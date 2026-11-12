import { describe, expect, test } from "vitest";
import en from "./en.json";
import de from "./de.json";
import { htmlLang, localePath, ogLocale, t } from "./ui";

describe("t", () => {
  test("returns the English string", () => {
    expect(t("en", "nav.help")).toBe("Help");
  });
  test("returns the German string", () => {
    expect(t("de", "nav.help")).toBe("Hilfe");
  });
  test("falls back to English for a locale without a dictionary", () => {
    expect(t("es", "nav.help")).toBe("Help");
  });
  test("the German dictionary has exactly the English keys, none empty", () => {
    expect(Object.keys(de).sort()).toEqual(Object.keys(en).sort());
    expect(Object.entries(de).filter(([, v]) => !v.trim())).toEqual([]);
  });
  test("placeholders survive translation", () => {
    for (const [key, value] of Object.entries(en)) {
      const placeholders = value.match(/\{\w+\}/g) ?? [];
      for (const p of placeholders) expect(de[key as keyof typeof de], key).toContain(p);
    }
  });
});

describe("localePath", () => {
  test("default locale has no prefix", () => {
    expect(localePath("en", "/help/")).toBe("/help/");
    expect(localePath("en", "/")).toBe("/");
  });
  test("other locales are prefixed", () => {
    expect(localePath("de", "/help/")).toBe("/de/help/");
    expect(localePath("fr", "/")).toBe("/fr/");
  });
  test("keeps anchors and adds the trailing slash before them", () => {
    expect(localePath("en", "/#faq")).toBe("/#faq");
    expect(localePath("es", "/help#plans")).toBe("/es/help/#plans");
  });
  test("rejects relative paths", () => {
    expect(() => localePath("en", "help/")).toThrow();
  });
});

test("htmlLang", () => {
  expect(htmlLang("en")).toBe("en-GB");
  expect(htmlLang("es")).toBe("es");
  expect(ogLocale("de")).toBe("de_DE");
});
