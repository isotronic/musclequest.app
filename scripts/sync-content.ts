import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { buildContent, writeContent } from "./lib/sync";
import { SyncError } from "./lib/types";

const argIndex = process.argv.indexOf("--app-dir");
const appDir = resolve(
  argIndex > -1 ? process.argv[argIndex + 1]! : (process.env.MUSCLEQUEST_APP_DIR ?? "../MuscleQuest"),
);
const outDir = resolve("src/content");

try {
  const content = buildContent(appDir);
  mkdirSync(outDir, { recursive: true });
  writeContent(outDir, content);
  const sections = content.help.groups.reduce((n, g) => n + g.sections.length, 0);
  const entries = content.changelog.releases.reduce((n, r) => n + r.entries.length, 0);
  console.log(`Synced from ${appDir}`);
  console.log(`  help: ${content.help.groups.length} groups, ${sections} sections`);
  console.log(`  changelog: ${content.changelog.releases.length} releases, ${entries} entries`);
  console.log(`  missing translations (fell back to English): ${JSON.stringify(content.missing)}`);
} catch (err) {
  if (err instanceof SyncError) {
    console.error(`sync-content failed: ${err.message}\nNothing was written.`);
    process.exit(1);
  }
  throw err;
}
