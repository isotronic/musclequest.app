import { describe, expect, test } from "vitest";
import { home as en } from "./en";
import { home as de } from "./de";

// The German home page must keep the English structure: same anchors, screenshots and list lengths.
describe("German home content", () => {
  test("feature blocks match by id and screenshot", () => {
    expect(de.features.blocks.map((b) => [b.id, b.screenshot])).toEqual(en.features.blocks.map((b) => [b.id, b.screenshot]));
  });
  test("lists have the same lengths", () => {
    expect(de.hero.chips).toHaveLength(en.hero.chips.length);
    expect(de.features.blocks.map((b) => b.bullets.length)).toEqual(en.features.blocks.map((b) => b.bullets.length));
    expect(de.privacy.items).toHaveLength(en.privacy.items.length);
    expect(de.more.items).toHaveLength(en.more.items.length);
    expect(de.faq.items).toHaveLength(en.faq.items.length);
  });
  test("FAQ links point at the same English paths (the component localises them)", () => {
    expect(de.faq.items.map((i) => i.link?.href)).toEqual(en.faq.items.map((i) => i.link?.href));
  });
});
