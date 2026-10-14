import { z } from "zod";
import helpJson from "../content/help.json";
import changelogJson from "../content/changelog.json";
import type { Locale } from "../i18n/ui";

const localized = z.object({ en: z.string().min(1), de: z.string().min(1), es: z.string().min(1), fr: z.string().min(1) });

const helpSchema = z.object({
  groups: z.array(
    z.object({
      id: z.string().min(1),
      title: localized,
      sections: z.array(
        z.object({
          id: z.string().min(1),
          title: localized,
          body: z.discriminatedUnion("type", [
            z.object({ type: z.literal("text"), text: localized }),
            z.object({ type: z.literal("steps"), lead: localized, steps: z.array(localized), ordered: z.boolean() }),
          ]),
        }),
      ),
    }),
  ),
});

const changelogSchema = z.object({
  releases: z.array(
    z.object({
      version: z.string().min(1),
      date: z.string().regex(/^\d{4}-\d{2}$/),
      entries: z.array(z.object({ version: z.number().int(), message: localized })).min(1),
    }),
  ),
});

export type HelpData = z.infer<typeof helpSchema>;
export type ChangelogData = z.infer<typeof changelogSchema>;
export type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

export function parseHelp(data: unknown): HelpData {
  const parsed = helpSchema.parse(data);
  const seen = new Set<string>();
  for (const id of parsed.groups.flatMap((g) => [g.id, ...g.sections.map((s) => s.id)])) {
    if (seen.has(id)) throw new Error(`Duplicate help anchor id "${id}"`);
    seen.add(id);
  }
  return parsed;
}

export function parseChangelog(data: unknown): ChangelogData {
  return changelogSchema.parse(data);
}

const help = parseHelp(helpJson);
const changelog = parseChangelog(changelogJson);

export function getHelp(locale: Locale) {
  return help.groups.map((g) => ({
    id: g.id,
    title: g.title[locale],
    sections: g.sections.map((s) => ({
      id: s.id,
      title: s.title[locale],
      body:
        s.body.type === "text"
          ? { type: "text" as const, text: s.body.text[locale] }
          : { type: "steps" as const, lead: s.body.lead[locale], steps: s.body.steps.map((x) => x[locale]), ordered: s.body.ordered },
    })),
  }));
}
export type HelpView = ReturnType<typeof getHelp>[number];

const BULLET = /^\s*[•\-]\s+/;

export function parseChangelogMessage(message: string): { title: string; blocks: Block[] } {
  const [titleChunk = "", ...chunks] = message.trim().split(/\n\s*\n/);
  const blocks: Block[] = [];
  for (const chunk of chunks) {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    const para: string[] = [];
    const items: string[] = [];
    for (const line of lines) {
      if (BULLET.test(line)) items.push(line.replace(BULLET, ""));
      else if (items.length === 0) para.push(line);
      else items[items.length - 1] += ` ${line}`;
    }
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
    if (items.length) blocks.push({ type: "ul", items });
  }
  return { title: titleChunk.trim(), blocks };
}

export function formatReleaseDate(date: string, locale: Locale): string {
  const [y, m] = date.split("-").map(Number) as [number, number];
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric", timeZone: "UTC" }).format(Date.UTC(y, m - 1, 1));
}

export function getChangelog(locale: Locale) {
  return changelog.releases.map((r) => ({
    version: r.version,
    date: r.date,
    label: formatReleaseDate(r.date, locale),
    entries: r.entries.map((e) => ({ version: e.version, ...parseChangelogMessage(e.message[locale]) })),
  }));
}
export type ReleaseView = ReturnType<typeof getChangelog>[number];

export function latestRelease(): string {
  return changelog.releases[0]!.version;
}
