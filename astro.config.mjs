import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://musclequest.app",
  trailingSlash: "always",
  build: { format: "directory" },
  i18n: {
    locales: ["en", "de", "es", "fr"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
  vite: { plugins: [tailwindcss()] },
});
