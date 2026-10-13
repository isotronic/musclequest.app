function unquote(line: string): string {
  const body = line.slice(line.indexOf('"') + 1, line.lastIndexOf('"'));
  return body.replace(/\\(.)/g, (_, ch: string) => (ch === "n" ? "\n" : ch === "t" ? "\t" : ch));
}

export function parsePo(text: string): Map<string, string> {
  const map = new Map<string, string>();
  let field: "msgid" | "msgstr" | null = null;
  let msgid = "";
  let msgstr = "";

  const flush = () => {
    if (msgid !== "" && msgstr !== "") map.set(msgid, msgstr);
    msgid = "";
    msgstr = "";
    field = null;
  };

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith("msgid ")) {
      flush();
      field = "msgid";
      msgid = unquote(line);
    } else if (line.startsWith("msgstr ")) {
      field = "msgstr";
      msgstr = unquote(line);
    } else if (line.startsWith('"') && field) {
      if (field === "msgid") msgid += unquote(line);
      else msgstr += unquote(line);
    } else if (line === "" || line.startsWith("#")) {
      if (line === "" && field === "msgstr") flush();
    }
  }
  flush();
  return map;
}
