import type { SiteLocale } from "../../i18n/ui";
import type { HomeContent } from "./types";
import { home as en } from "./en";
import { home as de } from "./de";

const homes: Record<SiteLocale, HomeContent> = { en, de };

export function getHome(locale: SiteLocale): HomeContent {
  return homes[locale];
}
