import type { ImageMetadata } from "astro";
import type { Locale } from "../i18n/ui";

export type ScreenshotId = "home" | "plan" | "workout" | "progression" | "stats" | "measurements" | "friends" | "workoutOverview";

// File name per screenshot, without extension. English captures sit in assets/screenshots/; a capture of the
// app in another language goes in assets/screenshots/<locale>/ with the same name, and replaces the English one there.
const FILES: Record<ScreenshotId, string> = {
  home: "home",
  plan: "plan",
  workout: "workout",
  progression: "progression",
  stats: "stats",
  measurements: "measurements",
  friends: "friend-profile",
  workoutOverview: "workout-overview",
};

const images = import.meta.glob<ImageMetadata>("../assets/screenshots/**/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const byPath = new Map<string, ImageMetadata>();
for (const [path, image] of Object.entries(images)) {
  byPath.set(path.replace("../assets/screenshots/", "").replace(/\.\w+$/, ""), image);
}

export function screenshot(id: ScreenshotId, locale: Locale): ImageMetadata {
  const image = byPath.get(`${locale}/${FILES[id]}`) ?? byPath.get(FILES[id]);
  if (!image) throw new Error(`Missing screenshot "${FILES[id]}" in src/assets/screenshots/`);
  return image;
}
