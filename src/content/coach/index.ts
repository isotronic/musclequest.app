import type { SiteLocale } from "../../i18n/ui";
import type { CoachContent } from "./types";
import { coach as en } from "./en";
import { coach as de } from "./de";

const contents: Record<SiteLocale, CoachContent> = { en, de };

// Local development points the form at the coach app on localhost and at Cloudflare's Turnstile
// test key through PUBLIC_COACH_API_URL and PUBLIC_TURNSTILE_SITE_KEY; builds without them use the
// production values from the content objects.
const apiUrl: string | undefined = import.meta.env.PUBLIC_COACH_API_URL || undefined;
const turnstileSiteKey: string | undefined = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || undefined;

export function coachContent(locale: SiteLocale): CoachContent {
  const content = contents[locale];
  if (!apiUrl && !turnstileSiteKey) return content;
  return {
    ...content,
    config: { ...content.config, apiUrl: apiUrl ?? content.config.apiUrl, turnstileSiteKey: turnstileSiteKey ?? content.config.turnstileSiteKey },
  };
}
