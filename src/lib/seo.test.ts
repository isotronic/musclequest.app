import { expect, test } from "vitest";
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, mobileAppJsonLd, playUrl } from "./seo";

test("absoluteUrl", () => {
  expect(absoluteUrl("/")).toBe("https://musclequest.app/");
  expect(absoluteUrl("/help/")).toBe("https://musclequest.app/help/");
});

test("playUrl tags the placement", () => {
  const url = new URL(playUrl("hero"));
  expect(url.origin + url.pathname).toBe("https://play.google.com/store/apps/details");
  expect(url.searchParams.get("id")).toBe("com.isotronic.musclequest");
  expect(url.searchParams.get("utm_source")).toBe("website");
  expect(url.searchParams.get("utm_campaign")).toBe("hero");
});

test("mobileAppJsonLd is free, Android, no rating", () => {
  const ld = mobileAppJsonLd() as Record<string, any>;
  expect(ld["@type"]).toBe("MobileApplication");
  expect(ld.operatingSystem).toBe("Android");
  expect(ld.offers.price).toBe("0");
  expect(ld.aggregateRating).toBeUndefined();
});

test("faqJsonLd and breadcrumbJsonLd", () => {
  const faq = faqJsonLd([{ question: "Q?", answer: "A." }]) as any;
  expect(faq.mainEntity[0].acceptedAnswer.text).toBe("A.");
  const bc = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Help", path: "/help/" }]) as any;
  expect(bc.itemListElement[1]).toMatchObject({ position: 2, item: "https://musclequest.app/help/" });
});
