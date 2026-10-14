import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { extractHelp, extractWhatsNew } from "./extract";

const fixture = (name: string) => readFileSync(new URL(`../__fixtures__/app/constants/${name}`, import.meta.url), "utf8");

test("extracts help groups, text bodies and steps bodies", () => {
  const groups = extractHelp(fixture("HelpData.ts"), "HelpData.ts");
  expect(groups).toHaveLength(1);
  expect(groups[0]!.id).toBe("training");
  expect(groups[0]!.title).toBe("Training");
  const [plate, rest, plans] = groups[0]!.sections;
  expect(plate).toEqual({ id: "plate-calculator", title: "Plate Calculator", body: { type: "text", text: "See which plates to load." } });
  expect(rest!.body).toEqual({
    type: "steps",
    lead: "The rest timer starts automatically.",
    steps: ["Use the ± buttons.", "Configure it in Settings."],
    ordered: false,
  });
  expect(plans!.body).toMatchObject({ type: "steps", ordered: true });
});

test("extracts releases and entries with the exact msgid text", () => {
  const { releases, entries } = extractWhatsNew(fixture("WhatsNew.ts"), "WhatsNew.ts");
  expect(releases).toEqual([
    { version: "0.8", date: "2024-11" },
    { version: "0.9", date: "2025-02" },
    { version: "1.0", date: "2026-05" },
  ]);
  expect(entries[0]).toEqual({ version: 801, release: "0.8", message: "\n🚀 MuscleQuest Is Here!\n\nThe first public release.\n" });
  expect(entries).toHaveLength(2);
});

test("throws a SyncError naming the file when an export is missing", () => {
  expect(() => extractHelp("export const OTHER = [];", "HelpData.ts")).toThrow(/HelpData\.ts.*HELP_DATA/);
});

test("throws when a msg template has interpolations", () => {
  const src = "export const HELP_DATA = [{ id: 'a', group: msg`Hi ${name}`, sections: [] }];";
  expect(() => extractHelp(src, "HelpData.ts")).toThrow(/interpolation/);
});

test("throws when a field has an unexpected shape", () => {
  const src = "export const HELP_DATA = [{ id: 1, group: msg`G`, sections: [] }];";
  expect(() => extractHelp(src, "HelpData.ts")).toThrow(/HelpData\.ts.*id/);
});
