import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, expect, test } from "vitest";
import { buildContent, writeContent } from "./sync";

const FIXTURE = fileURLToPath(new URL("../__fixtures__/app", import.meta.url));
const tmp: string[] = [];
const tempDir = () => {
  const d = mkdtempSync(join(tmpdir(), "mq-sync-"));
  tmp.push(d);
  return d;
};
afterEach(() => tmp.splice(0).forEach((d) => rmSync(d, { recursive: true, force: true })));

test("uses translations where present", () => {
  const { help, changelog } = buildContent(FIXTURE);
  const plate = help.groups[0]!.sections[0]!;
  expect(plate.title).toEqual({ en: "Plate Calculator", de: "Scheibenrechner", es: "Plate Calculator", fr: "Plate Calculator" });
  const first = changelog.releases.at(-1)!.entries[0]!;
  expect(first.message.de).toContain("MuscleQuest ist da!");
});

test("falls back to English for empty or missing translations and counts them", () => {
  const { help, missing } = buildContent(FIXTURE);
  const rest = help.groups[0]!.sections[1]!;
  expect(rest.title.de).toBe("Rest Timer");
  expect(missing.en).toBe(0);
  expect(missing.de).toBeGreaterThan(0);
  expect(missing.fr).toBeGreaterThan(missing.de);
});

test("orders releases and entries newest first and drops empty releases", () => {
  const { changelog } = buildContent(FIXTURE);
  expect(changelog.releases.map((r) => r.version)).toEqual(["1.0", "0.8"]);
});

test("fails on a missing app dir", () => {
  expect(() => buildContent("/nonexistent/MuscleQuest")).toThrow(/MuscleQuest/);
});

test("fails when a locale file is missing", () => {
  const dir = tempDir();
  cpSync(FIXTURE, dir, { recursive: true });
  rmSync(join(dir, "locales/fr/messages.po"));
  expect(() => buildContent(dir)).toThrow(/fr\/messages\.po/);
});

test("fails on an entry pointing at an unknown release", () => {
  const dir = tempDir();
  cpSync(FIXTURE, dir, { recursive: true });
  const f = join(dir, "constants/WhatsNew.ts");
  writeFileSync(f, readFileSync(f, "utf8").replace('release: "1.0"', 'release: "9.9"'));
  expect(() => buildContent(dir)).toThrow(/9\.9/);
});

test("writes pretty, deterministic JSON and leaves no temp files", () => {
  const out = tempDir();
  const content = buildContent(FIXTURE);
  writeContent(out, content);
  const a = readFileSync(join(out, "help.json"), "utf8");
  writeContent(out, buildContent(FIXTURE));
  expect(readFileSync(join(out, "help.json"), "utf8")).toBe(a);
  expect(a.endsWith("\n")).toBe(true);
  expect(existsSync(join(out, "help.json.tmp"))).toBe(false);
});
