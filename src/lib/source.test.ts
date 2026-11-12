import { describe, expect, test } from "vitest";
import { sanitiseSource, withSource } from "./source";

describe("sanitiseSource", () => {
  test.each(["flyer", "ad-2026", "a".repeat(40)])("keeps %s", (value) => {
    expect(sanitiseSource(value)).toBe(value);
  });
  test.each(["Flyer", "<script>", "", "a".repeat(41), "flyer ", "a".repeat(200), "fly_er"])("drops %s", (value) => {
    expect(sanitiseSource(value)).toBeNull();
  });
  test("drops null", () => {
    expect(sanitiseSource(null)).toBeNull();
  });
});

describe("withSource", () => {
  test("adds a valid source to a page link", () => {
    expect(withSource("/de/coach/", "flyer")).toBe("/de/coach/?src=flyer");
  });
  test("leaves the link alone without a source", () => {
    expect(withSource("/coach/", null)).toBe("/coach/");
  });
  test("drops a source that does not pass the rule", () => {
    expect(withSource("/coach/", "<script>")).toBe("/coach/");
  });
  test("keeps an existing query and hash", () => {
    expect(withSource("/coach/?a=1#request", "ad")).toBe("/coach/?a=1&src=ad#request");
  });
});
