import en from "./en.json";

export const LOCALES = ["en", "de", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
export type UiKey = keyof typeof en;

// Phase 2 adds de/es/fr dictionaries here.
const dictionaries: Partial<Record<Locale, Partial<Record<UiKey, string>>>> = { en };

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
