import { describe, expect, test } from "vitest";
import { htmlLang, localePath, t } from "./ui";

describe("t", () => {
  test("returns the English string", () => {
    expect(t("en", "nav.help")).toBe("Help");
  });
  test("falls back to English for a locale without a dictionary", () => {
    expect(t("de", "nav.help")).toBe("Help");
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
});
