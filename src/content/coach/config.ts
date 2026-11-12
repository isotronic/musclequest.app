import type { CoachContent } from "./types";

// Shared by both locales. The Turnstile site key is public (the secret is a Worker secret on the
// coach app); index.ts lets PUBLIC_COACH_API_URL and PUBLIC_TURNSTILE_SITE_KEY override these locally.
export const config: CoachContent["config"] = {
  turnstileSiteKey: "0x4AAAAAAF-BssgFb_07sRUt",
  apiUrl: "https://coach.musclequest.app/api/access-requests",
  coachAppUrl: "https://coach.musclequest.app",
  contactEmail: "coach@musclequest.app",
};
