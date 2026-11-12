import en from "./en.json";
import de from "./de.json";

export const LOCALES = ["en", "de", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export type UiKey = keyof typeof en;

/** Locales the site has pages for. es and fr follow later. */
export const SITE_LOCALES = ["en", "de"] as const satisfies readonly Locale[];
export type SiteLocale = (typeof SITE_LOCALES)[number];

const dictionaries: Partial<Record<Locale, Record<UiKey, string>>> = { en, de: de satisfies Record<UiKey, string> };

export function t(locale: Locale, key: UiKey): string {
  return dictionaries[locale]?.[key] ?? en[key];
}

export function localePath(locale: Locale, path: string): string {
  if (!path.startsWith("/")) throw new Error(`localePath expects an absolute path, got "${path}"`);
  const [pathname, hash] = path.split("#") as [string, string | undefined];
  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const prefixed = locale === DEFAULT_LOCALE ? withSlash : `/${locale}${withSlash === "/" ? "/" : withSlash}`;
  return hash === undefined ? prefixed : `${prefixed}#${hash}`;
}

const HTML_LANG: Record<Locale, string> = { en: "en-GB", de: "de", es: "es", fr: "fr" };
export function htmlLang(locale: Locale): string {
  return HTML_LANG[locale];
}

const OG_LOCALE: Record<Locale, string> = { en: "en_GB", de: "de_DE", es: "es_ES", fr: "fr_FR" };
export function ogLocale(locale: Locale): string {
  return OG_LOCALE[locale];
}

/** Each language's name in that language, for the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = { en: "English", de: "Deutsch", es: "Español", fr: "Français" };
