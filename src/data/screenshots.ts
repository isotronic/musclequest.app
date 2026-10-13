import type { ImageMetadata } from "astro";
import home from "../assets/screenshots/home.png";
import plan from "../assets/screenshots/plan.png";
import workout from "../assets/screenshots/workout.png";
import progression from "../assets/screenshots/progression.png";
import stats from "../assets/screenshots/stats.png";
// PLACEHOLDER: wrong screen until the user supplies a measurements screenshot (README → Screenshots).
import measurements from "../assets/screenshots/measurements.jpg";

export type ScreenshotId = "home" | "plan" | "workout" | "progression" | "stats" | "measurements";
export const screenshots: Record<ScreenshotId, ImageMetadata> = { home, plan, workout, progression, stats, measurements };
