export const SITE_URL = "https://musclequest.app";
export const PLAY_PACKAGE = "com.isotronic.musclequest";
export const SUPPORT_EMAIL = "support@musclequest.app";
export const INSTAGRAM_URL = "https://www.instagram.com/musclequest.app/";
export const AUTHOR_URL = "https://joseph.bouqdib.com";

export type Placement = "hero" | "nav" | "cta" | "footer" | "404";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function playUrl(placement: Placement): string {
  const url = new URL("https://play.google.com/store/apps/details");
  url.searchParams.set("id", PLAY_PACKAGE);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_campaign", placement);
  return url.toString();
}

export function organizationJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MuscleQuest",
    url: SITE_URL,
    logo: absoluteUrl("/icon-512.png"),
    email: SUPPORT_EMAIL,
    sameAs: [INSTAGRAM_URL],
  };
}

export function mobileAppJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MuscleQuest",
    operatingSystem: "Android",
    applicationCategory: "HealthApplication",
    url: SITE_URL,
    installUrl: `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`,
    image: absoluteUrl("/og-image.png"),
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    author: { "@type": "Person", name: "Joseph Bouqdib", url: AUTHOR_URL },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: i.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((i, idx) => ({ "@type": "ListItem", position: idx + 1, name: i.name, item: absoluteUrl(i.path) })),
  };
}
