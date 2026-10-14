// Checks every internal href (and #anchor) in dist/ resolves, ids are unique per page, and legacy URLs keep working.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = process.argv[2] ?? "dist";
const LEGACY = ["/privacy-policy/", "/delete-account/", "/#features", "/#download", "/#contact", "/#faq", "/#benefits", "/#screenshots"];

const pages = new Map(); // "/help/" -> Set(ids)
const dupes = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html")) {
      const rel = "/" + relative(DIST, p).replace(/index\.html$/, "").replace(/\\/g, "/");
      const html = readFileSync(p, "utf8");
      const idList = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
      for (const id of new Set(idList.filter((id, i) => idList.indexOf(id) !== i))) dupes.push(`${rel}: duplicate id "${id}"`);
      pages.set(rel, { html, ids: new Set(idList) });
    }
  }
})(DIST);

const errors = [...dupes];
const check = (from, href) => {
  // Resolve against the linking page so relative hrefs ("../help/", "#faq") are checked too.
  const url = new URL(href, `http://site${from.startsWith("/") ? from : "/"}`);
  const target = decodeURIComponent(url.pathname);
  const hash = url.hash.slice(1);
  const page = pages.get(target);
  if (!page) {
    if (!existsSync(join(DIST, target))) errors.push(`${from}: broken link ${href}`);
    return;
  }
  if (hash && !page.ids.has(decodeURIComponent(hash))) errors.push(`${from}: missing anchor ${href}`);
};

for (const [from, { html }] of pages) {
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith("//")) continue; // external or non-page scheme
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/_astro/") && !/\.\w+$/.test(href.split("#")[0]) && !href.split("#")[0].endsWith("/") && href.split("#")[0] !== "") {
      errors.push(`${from}: internal link without trailing slash ${href}`);
    }
    check(from, href);
  }
}
for (const href of LEGACY) check("(legacy)", href);

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`OK: ${pages.size} pages, all internal links and anchors resolve, no duplicate ids`);
