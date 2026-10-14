// Which section a table of contents should highlight: the last one whose top has scrolled past `offset`
// (in viewport pixels). At the very bottom of the page short final sections never reach the offset, so pick the last.
export function activeId(sections: { id: string; top: number }[], offset: number, atBottom: boolean): string | null {
  if (sections.length === 0) return null;
  if (atBottom) return sections[sections.length - 1]!.id;
  let active = sections[0]!.id;
  for (const s of sections) {
    if (s.top <= offset) active = s.id;
    else break;
  }
  return active;
}
