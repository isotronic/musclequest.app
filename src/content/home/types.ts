import type { ScreenshotId } from "../../data/screenshots";

export type HomeContent = {
  meta: { title: string; description: string };
  hero: { titleLead: string; titleAccent: string; lede: string; chips: string[]; screenshotAlt: string };
  features: { intro: { title: string; text: string }; blocks: { id: string; title: string; text: string; bullets: string[]; screenshot: ScreenshotId; screenshotAlt: string }[] };
  privacy: { title: string; intro: string; items: { title: string; text: string }[] };
  more: { title: string; intro: string; items: { title: string; text: string }[] };
  faq: { title: string; items: { question: string; answer: string; link?: { label: string; href: string } }[] };
  download: { title: string; text: string };
};
