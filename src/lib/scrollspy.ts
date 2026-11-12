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

// The nav link (its `data-nav-section`) to highlight while a page section is being read. The home page's privacy
// and "more" sections belong under Features; a section with no nav link of its own (the hero, the home download
// card, the coach page's clients and request sections) clears the highlight.
const NAV_SECTION: Record<string, string> = { how: "how", features: "features", privacy: "features", more: "features", faq: "faq" };

export function navSection(sectionId: string | null): string | undefined {
  return sectionId ? NAV_SECTION[sectionId] : undefined;
}
