import ts from "typescript";
import { SyncError } from "./types";

export type RawHelpBody =
  | { type: "text"; text: string }
  | { type: "steps"; lead: string; steps: string[]; ordered: boolean };
export type RawHelpGroup = { id: string; title: string; sections: { id: string; title: string; body: RawHelpBody }[] };
export type RawRelease = { version: string; date: string };
export type RawEntry = { version: number; release: string; message: string };

class Reader {
  constructor(private file: string) {}

  fail(what: string, node?: ts.Node): never {
    const where = node ? ` (near "${node.getText().slice(0, 60)}")` : "";
    throw new SyncError(`${this.file}: ${what}${where}`);
  }

  exported(source: ts.SourceFile, name: string): ts.ArrayLiteralExpression {
    for (const stmt of source.statements) {
      if (!ts.isVariableStatement(stmt)) continue;
      for (const decl of stmt.declarationList.declarations) {
        if (ts.isIdentifier(decl.name) && decl.name.text === name && decl.initializer) {
          let init: ts.Expression = decl.initializer;
          while (ts.isAsExpression(init) || ts.isSatisfiesExpression(init)) init = init.expression;
          if (!ts.isArrayLiteralExpression(init)) this.fail(`export ${name} is not an array literal`, init);
          return init;
        }
      }
    }
    return this.fail(`export ${name} not found`);
  }

  objects(arr: ts.ArrayLiteralExpression, what: string): ts.ObjectLiteralExpression[] {
    return arr.elements.map((el) => (ts.isObjectLiteralExpression(el) ? el : this.fail(`${what} item is not an object`, el)));
  }

  prop(obj: ts.ObjectLiteralExpression, name: string): ts.Expression | undefined {
    for (const p of obj.properties) {
      if (ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name) return p.initializer;
    }
    return undefined;
  }

  required(obj: ts.ObjectLiteralExpression, name: string): ts.Expression {
    return this.prop(obj, name) ?? this.fail(`missing property "${name}"`, obj);
  }

  string(obj: ts.ObjectLiteralExpression, name: string): string {
    const v = this.required(obj, name);
    return ts.isStringLiteral(v) || ts.isNoSubstitutionTemplateLiteral(v) ? v.text : this.fail(`"${name}" is not a string`, v);
  }

  number(obj: ts.ObjectLiteralExpression, name: string): number {
    const v = this.required(obj, name);
    return ts.isNumericLiteral(v) ? Number(v.text) : this.fail(`"${name}" is not a number`, v);
  }

  msg(node: ts.Expression, what: string): string {
    if (!ts.isTaggedTemplateExpression(node) || !ts.isIdentifier(node.tag) || node.tag.text !== "msg") {
      return this.fail(`${what} is not a msg\`\` template`, node);
    }
    if (!ts.isNoSubstitutionTemplateLiteral(node.template)) return this.fail(`${what} has an interpolation`, node);
    return node.template.text;
  }

  array(node: ts.Expression, what: string): ts.ArrayLiteralExpression {
    return ts.isArrayLiteralExpression(node) ? node : this.fail(`${what} is not an array`, node);
  }
}

const parse = (source: string, file: string) => ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);

export function extractHelp(source: string, file: string): RawHelpGroup[] {
  const r = new Reader(file);
  const sf = parse(source, file);
  return r.objects(r.exported(sf, "HELP_DATA"), "HELP_DATA").map((g) => ({
    id: r.string(g, "id"),
    title: r.msg(r.required(g, "group"), "group"),
    sections: r.objects(r.array(r.required(g, "sections"), "sections"), "section").map((s) => {
      const bodyNode = r.required(s, "body");
      let body: RawHelpBody;
      if (ts.isObjectLiteralExpression(bodyNode)) {
        const ordered = r.prop(bodyNode, "ordered");
        if (ordered && ordered.kind !== ts.SyntaxKind.TrueKeyword && ordered.kind !== ts.SyntaxKind.FalseKeyword) {
          r.fail(`"ordered" is not a boolean literal`, ordered);
        }
        body = {
          type: "steps",
          lead: r.msg(r.required(bodyNode, "lead"), "lead"),
          steps: r.array(r.required(bodyNode, "steps"), "steps").elements.map((e) => r.msg(e, "step")),
          ordered: ordered ? ordered.kind === ts.SyntaxKind.TrueKeyword : true,
        };
      } else {
        body = { type: "text", text: r.msg(bodyNode, "body") };
      }
      return { id: r.string(s, "id"), title: r.msg(r.required(s, "title"), "title"), body };
    }),
  }));
}

export function extractWhatsNew(source: string, file: string): { releases: RawRelease[]; entries: RawEntry[] } {
  const r = new Reader(file);
  const sf = parse(source, file);
  const releases = r.objects(r.exported(sf, "RELEASES"), "RELEASES").map((o) => ({
    version: r.string(o, "version"),
    date: r.string(o, "date"),
  }));
  const entries = r.objects(r.exported(sf, "WHATS_NEW_ENTRIES"), "WHATS_NEW_ENTRIES").map((o) => ({
    version: r.number(o, "version"),
    release: r.string(o, "release"),
    message: r.msg(r.required(o, "message"), "message"),
  }));
  return { releases, entries };
}
