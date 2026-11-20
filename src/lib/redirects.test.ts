import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { sanitiseSource } from "./source";

// public/_redirects: the campaign short links (spec 09, "Campaign sources"). Cloudflare Pages reads
// one rule per line, `from to [status]`; `#` starts a comment.
const rules = readFileSync(new URL("../../public/_redirects", import.meta.url), "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"))
  .map((l) => l.split(/\s+/));

test("every rule has a from, a to and a 302", () => {
  expect(rules.length).toBeGreaterThan(0);
  for (const r of rules) {
    expect(r).toHaveLength(3);
    expect(r[2]).toBe("302");
  }
});

test("literal campaign lines land on the coach page with a source that passes sanitiseSource", () => {
  const literal = rules.filter(([from]) => !from.includes("*"));
  expect(literal.length).toBeGreaterThan(0);
  for (const [from, to] of literal) {
    const m = /^\/(de\/)?coach\/\?src=([^&#]*)$/.exec(to);
    expect(m, `${from} -> ${to}`).not.toBeNull();
    const src = m![2];
    expect(sanitiseSource(src), `${from} -> ${to}`).toBe(src);
    // The short path names the same campaign as its source, so the analytics path and the stored source match.
    expect(from).toBe(`/${m![1] ?? ""}go/${src}`);
  }
});

test("a splat line passes the path segment on as the source", () => {
  const splat = rules.filter(([from]) => from.includes("*"));
  expect(splat.map(([from, to]) => [from, to])).toEqual([["/de/go/*", "/de/coach/?src=:splat"]]);
});

test("each from is unique", () => {
  const froms = rules.map(([from]) => from);
  expect(new Set(froms).size).toBe(froms.length);
});
