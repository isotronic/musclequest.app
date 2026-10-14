import { existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { extractHelp, extractWhatsNew, type RawHelpBody } from "./extract";
import { parsePo } from "./po";
import {
  LOCALES,
  SyncError,
  type ChangelogJson,
  type HelpBody,
  type HelpJson,
  type Locale,
  type Localized,
} from "./types";

function read(path: string): string {
  if (!existsSync(path)) throw new SyncError(`File not found: ${path}`);
  return readFileSync(path, "utf8");
}

export function buildContent(appDir: string): { help: HelpJson; changelog: ChangelogJson; missing: Record<Locale, number> } {
  if (!existsSync(appDir)) throw new SyncError(`App repo not found at ${appDir} (set --app-dir or MUSCLEQUEST_APP_DIR)`);

  const catalogs = Object.fromEntries(
    LOCALES.map((l) => [l, parsePo(read(join(appDir, "locales", l, "messages.po")))]),
  ) as Record<Locale, Map<string, string>>;
  const missing = Object.fromEntries(LOCALES.map((l) => [l, 0])) as Record<Locale, number>;

  const localize = (source: string): Localized =>
    Object.fromEntries(
      LOCALES.map((l) => {
        if (l === "en") return [l, source];
        const tr = catalogs[l].get(source);
        if (!tr) missing[l]++;
        return [l, tr || source];
      }),
    ) as Localized;

  const helpFile = join(appDir, "constants", "HelpData.ts");
  const help: HelpJson = {
    groups: extractHelp(read(helpFile), "constants/HelpData.ts").map((g) => ({
      id: g.id,
      title: localize(g.title),
      sections: g.sections.map((s) => ({ id: s.id, title: localize(s.title), body: localizeBody(s.body, localize) })),
    })),
  };

  const wnFile = join(appDir, "constants", "WhatsNew.ts");
  const { releases, entries } = extractWhatsNew(read(wnFile), "constants/WhatsNew.ts");
  const known = new Set(releases.map((r) => r.version));
  for (const e of entries) {
    if (!known.has(e.release)) throw new SyncError(`constants/WhatsNew.ts: entry ${e.version} has unknown release "${e.release}"`);
  }
  const changelog: ChangelogJson = {
    releases: [...releases]
      .reverse()
      .map((r) => ({
        version: r.version,
        date: r.date,
        entries: entries
          .filter((e) => e.release === r.version)
          .sort((a, b) => b.version - a.version)
          .map((e) => ({ version: e.version, message: localize(e.message) })),
      }))
      .filter((r) => r.entries.length > 0),
  };

  return { help, changelog, missing };
}

function localizeBody(body: RawHelpBody, localize: (s: string) => Localized): HelpBody {
  return body.type === "text"
    ? { type: "text", text: localize(body.text) }
    : { type: "steps", lead: localize(body.lead), steps: body.steps.map(localize), ordered: body.ordered };
}

function writeAtomic(path: string, data: unknown) {
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  renameSync(tmp, path);
}

export function writeContent(outDir: string, content: { help: HelpJson; changelog: ChangelogJson }) {
  writeAtomic(join(outDir, "help.json"), content.help);
  writeAtomic(join(outDir, "changelog.json"), content.changelog);
}
