import { expect, test } from "vitest";
import { parsePo } from "./po";

const PO = `msgid ""
msgstr ""
"Language: de\\n"

#: constants/HelpData.ts:117
msgid "Plate Calculator"
msgstr "Scheibenrechner"

#: constants/WhatsNew.ts:94
msgid ""
"\\n"
"🚀 Title!\\n"
"\\n"
"Body with \\"quotes\\" and a backslash \\\\.\\n"
""
msgstr ""
"\\n"
"🚀 Titel!\\n"
"\\n"
"Text mit \\"Anführungszeichen\\" und \\\\.\\n"
""

msgid "Untranslated"
msgstr ""

#~ msgid "Obsolete"
#~ msgstr "Veraltet"
`;

test("parses single-line entries", () => {
  expect(parsePo(PO).get("Plate Calculator")).toBe("Scheibenrechner");
});

test("joins multi-line strings and unescapes \\n, \\\" and \\\\", () => {
  const map = parsePo(PO);
  expect(map.get('\n🚀 Title!\n\nBody with "quotes" and a backslash \\.\n')).toBe(
    '\n🚀 Titel!\n\nText mit "Anführungszeichen" und \\.\n',
  );
});

test("skips the header, empty translations and obsolete entries", () => {
  const map = parsePo(PO);
  expect(map.has("")).toBe(false);
  expect(map.has("Untranslated")).toBe(false);
  expect(map.has("Obsolete")).toBe(false);
  expect(map.size).toBe(2);
});
