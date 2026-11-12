import { describe, expect, test } from "vitest";
import { coachContent } from "./index";
import { screenshot, type ScreenshotId } from "../../data/screenshots";

const en = coachContent("en");
const de = coachContent("de");

/** Every key path with its value type, and every array's length, so the two locales can be compared. */
function shape(value: unknown, path = ""): string[] {
  if (Array.isArray(value)) return [`${path}[${value.length}]`, ...value.flatMap((item, i) => shape(item, `${path}[${i}]`))];
  if (value !== null && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .flatMap((key) => shape((value as Record<string, unknown>)[key], `${path}.${key}`));
  }
  return [`${path}:${typeof value}`];
}

function strings(value: unknown, path = ""): [string, string][] {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((item, i) => strings(item, `${path}[${i}]`));
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => strings(item, `${path}.${key}`));
  }
  return [];
}

function screenshotIds(value: unknown): ScreenshotId[] {
  if (Array.isArray(value)) return value.flatMap(screenshotIds);
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, item]) => (key === "screenshot" ? [item as ScreenshotId] : screenshotIds(item)));
  }
  return [];
}

describe("coach content", () => {
  test("German keeps the English structure, keys and list lengths", () => {
    expect(shape(de)).toEqual(shape(en));
  });

  test("section list lengths", () => {
    for (const content of [en, de]) {
      expect(content.how.steps).toHaveLength(3);
      expect(content.features.blocks).toHaveLength(4);
      expect(content.clients.columns).toHaveLength(3);
      expect(content.faq.items).toHaveLength(8);
    }
  });

  test("feature blocks and columns use the same screenshots in both locales", () => {
    expect(screenshotIds(de)).toEqual(screenshotIds(en));
    expect(de.features.blocks.map((b) => b.id)).toEqual(en.features.blocks.map((b) => b.id));
  });

  test("every screenshot id has a file", () => {
    const ids = screenshotIds(en);
    expect(ids.length).toBeGreaterThan(0);
    for (const id of ids) expect(() => screenshot(id, "en")).not.toThrow();
    for (const id of ids) expect(() => screenshot(id, "de")).not.toThrow();
  });

  test("no exclamation mark or em dash anywhere (voice guide), thank-you included", () => {
    for (const content of [en, de]) {
      for (const [path, text] of strings(content)) {
        expect(text, path).not.toMatch(/[!\u2014]/);
      }
    }
  });

  test("the thank-you carries the name placeholder", () => {
    expect(en.form.thanks).toContain("{name}");
    expect(de.form.thanks).toContain("{name}");
  });

  test("headline split", () => {
    expect([en.hero.titleLead, en.hero.titleAccent]).toEqual(["Build the plan once.", "See every set they log."]);
    expect([de.hero.titleLead, de.hero.titleAccent]).toEqual(["Einmal den Plan bauen.", "Jeden Satz sehen, den sie loggen."]);
  });

  test("config", () => {
    for (const content of [en, de]) {
      expect(content.config.apiUrl).toMatch(/\/api\/access-requests$/);
      expect(content.config.coachAppUrl).toBe("https://coach.musclequest.app");
      expect(content.config.contactEmail).toBe("coach@musclequest.app");
      expect(content.config.turnstileSiteKey).toMatch(/^0x/);
    }
  });

  test("the error lines that offer email name the contact address", () => {
    for (const content of [en, de]) {
      expect(content.form.errors.server).toContain(content.config.contactEmail);
      expect(content.form.errors.network).toContain(content.config.contactEmail);
      expect(content.form.noScript).toContain(content.config.contactEmail);
    }
  });
});
