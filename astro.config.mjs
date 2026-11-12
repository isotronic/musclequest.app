import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { existsSync, renameSync, rmdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Cloudflare Pages serves the nearest 404.html for a missing path, so /de/... misses need dist/de/404.html.
// Astro writes non-root 404 pages as de/404/index.html; move them into place.
const localized404 = {
  name: "localized-404",
  hooks: {
    "astro:build:done": ({ dir }) => {
      for (const locale of ["de"]) {
        const from = fileURLToPath(new URL(`${locale}/404/index.html`, dir));
        if (!existsSync(from)) continue;
        renameSync(from, fileURLToPath(new URL(`${locale}/404.html`, dir)));
        rmdirSync(fileURLToPath(new URL(`${locale}/404/`, dir)));
      }
    },
  },
};

export default defineConfig({
  site: "https://musclequest.app",
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    locales: ["en", "de", "es", "fr"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    localized404,
    sitemap({
      filter: (page) => !page.includes("/404"),
      // Adds hreflang links between pages that exist in both languages.
      i18n: { defaultLocale: "en", locales: { en: "en-GB", de: "de" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
