import { describe, expect, test } from "vitest";
import {
  formatReleaseDate,
  getChangelog,
  getHelp,
  latestRelease,
  parseChangelogMessage,
  parseHelp,
} from "./content";

const L = (s: string) => ({ en: s, de: s, es: s, fr: s });

describe("parseHelp", () => {
  test("accepts valid data", () => {
    const data = { groups: [{ id: "g", title: L("G"), sections: [{ id: "a", title: L("A"), body: { type: "text", text: L("x") } }] }] };
    expect(parseHelp(data).groups).toHaveLength(1);
  });
  test("rejects a missing locale", () => {
    const data = { groups: [{ id: "g", title: { en: "G" }, sections: [] }] };
    expect(() => parseHelp(data)).toThrow();
  });
  test("rejects duplicate anchor ids across groups and sections", () => {
    const s = { id: "dup", title: L("A"), body: { type: "text", text: L("x") } };
    const data = { groups: [{ id: "g1", title: L("G"), sections: [s] }, { id: "g2", title: L("H"), sections: [s] }] };
    expect(() => parseHelp(data)).toThrow(/dup/);
  });
});

describe("parseChangelogMessage", () => {
  test("splits title and paragraphs", () => {
    expect(parseChangelogMessage("\n🚀 Title!\n\nOne.\n\nTwo.\n")).toEqual({
      title: "🚀 Title!",
      blocks: [{ type: "p", text: "One." }, { type: "p", text: "Two." }],
    });
  });
  test("turns • lines into a list after a lead paragraph in the same chunk", () => {
    expect(parseChangelogMessage("T\n\nTrack your body:\n• Log weight\n• Chart it\n")).toEqual({
      title: "T",
      blocks: [{ type: "p", text: "Track your body:" }, { type: "ul", items: ["Log weight", "Chart it"] }],
    });
  });
  test("joins wrapped lines inside a paragraph with spaces", () => {
    expect(parseChangelogMessage("T\n\nline one\nline two").blocks).toEqual([{ type: "p", text: "line one line two" }]);
  });
});

test("formatReleaseDate", () => {
  expect(formatReleaseDate("2026-10", "en")).toBe("October 2026");
  expect(formatReleaseDate("2026-10", "de")).toBe("Oktober 2026");
});

test("real synced content loads and is ordered newest first", () => {
  const help = getHelp("en");
  expect(help.length).toBeGreaterThan(0);
  expect(help.flatMap((g) => g.sections).some((s) => s.id === "plate-calculator")).toBe(true);
  const releases = getChangelog("en");
  expect(releases[0]!.version).toBe(latestRelease());
  expect(releases[0]!.entries[0]!.title.length).toBeGreaterThan(0);
});
