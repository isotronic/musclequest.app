// Checks every internal href (and #anchor) in dist/ resolves, plus legacy URLs that must keep working.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = process.argv[2] ?? "dist";
const LEGACY = ["/privacy-policy/", "/delete-account/", "/#features", "/#download", "/#contact", "/#faq"];

const pages = new Map(); // "/help/" -> Set(ids)
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html")) {
      const rel = "/" + relative(DIST, p).replace(/index\.html$/, "").replace(/\\/g, "/");
      const html = readFileSync(p, "utf8");
      pages.set(rel, { html, ids: new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])) });
    }
  }
})(DIST);

const errors = [];
const check = (from, href) => {
  const [path, hash] = href.split("#");
  const target = path === "" ? from : path;
  const page = pages.get(target);
  if (!page) {
    if (!existsSync(join(DIST, target))) errors.push(`${from}: broken link ${href}`);
    return;
  }
  if (hash && !page.ids.has(decodeURIComponent(hash))) errors.push(`${from}: missing anchor ${href}`);
};

for (const [from, { html }] of pages) {
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/_astro/") && !/\.\w+$/.test(href.split("#")[0]) && !href.split("#")[0].endsWith("/") && href.split("#")[0] !== "") {
      errors.push(`${from}: internal link without trailing slash ${href}`);
    }
    if (href.startsWith("/") || href.startsWith("#")) check(from, href);
  }
}
for (const href of LEGACY) check("(legacy)", href);

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`OK: ${pages.size} pages, all internal links and anchors resolve`);
