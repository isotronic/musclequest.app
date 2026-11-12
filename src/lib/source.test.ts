import { describe, expect, test } from "vitest";
import { sanitiseSource } from "./source";

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
