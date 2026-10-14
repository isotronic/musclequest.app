import type { ImageMetadata } from "astro";
import home from "../assets/screenshots/home.jpg";
import plan from "../assets/screenshots/plan.jpg";
import workout from "../assets/screenshots/workout.jpg";
import progression from "../assets/screenshots/progression.jpg";
import stats from "../assets/screenshots/stats.jpg";
import measurements from "../assets/screenshots/measurements.jpg";
import friends from "../assets/screenshots/friend-profile.jpg";
import workoutOverview from "../assets/screenshots/workout-overview.jpg";

export type ScreenshotId = "home" | "plan" | "workout" | "progression" | "stats" | "measurements" | "friends" | "workoutOverview";
export const screenshots: Record<ScreenshotId, ImageMetadata> = {
  home,
  plan,
  workout,
  progression,
  stats,
  measurements,
  friends,
  workoutOverview,
};
