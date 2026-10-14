import { expect, test } from "vitest";
import { activeId } from "./scrollspy";

const s = (...tops: number[]) => tops.map((top, i) => ({ id: `s${i}`, top }));

test("picks the last section whose top has passed the offset", () => {
  expect(activeId(s(-500, -20, 100, 600), 120, false)).toBe("s2");
  expect(activeId(s(-500, -20, 300, 600), 120, false)).toBe("s1");
});

test("falls back to the first section before any has reached the offset", () => {
  expect(activeId(s(400, 900), 120, false)).toBe("s0");
});

test("picks the last section when scrolled to the bottom", () => {
  expect(activeId(s(-900, -300, 200, 500), 120, true)).toBe("s3");
});

test("returns null when there are no sections", () => {
  expect(activeId([], 120, false)).toBeNull();
});
