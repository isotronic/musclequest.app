export const LOCALES = ["en", "de", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];
export type Localized = Record<Locale, string>;

export type HelpBody =
  | { type: "text"; text: Localized }
  | { type: "steps"; lead: Localized; steps: Localized[]; ordered: boolean };
export type HelpSection = { id: string; title: Localized; body: HelpBody };
export type HelpGroup = { id: string; title: Localized; sections: HelpSection[] };
export type HelpJson = { groups: HelpGroup[] };

export type ChangelogEntry = { version: number; message: Localized };
export type ChangelogRelease = { version: string; date: string; entries: ChangelogEntry[] };
export type ChangelogJson = { releases: ChangelogRelease[] };

export class SyncError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SyncError";
  }
}
