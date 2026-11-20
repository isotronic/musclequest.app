import { afterEach, describe, expect, test, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("coachContent config overrides", () => {
  test("PUBLIC_COACH_API_URL and PUBLIC_TURNSTILE_SITE_KEY replace the production values", async () => {
    vi.stubEnv("PUBLIC_COACH_API_URL", "http://localhost:3000/api/access-requests");
    vi.stubEnv("PUBLIC_TURNSTILE_SITE_KEY", "1x00000000000000000000AA");
    const { coachContent } = await import("./index");
    for (const locale of ["en", "de"] as const) {
      expect(coachContent(locale).config.apiUrl).toBe("http://localhost:3000/api/access-requests");
      expect(coachContent(locale).config.turnstileSiteKey).toBe("1x00000000000000000000AA");
    }
  });

  test("without them the production values stay", async () => {
    vi.stubEnv("PUBLIC_COACH_API_URL", "");
    vi.stubEnv("PUBLIC_TURNSTILE_SITE_KEY", "");
    const { coachContent } = await import("./index");
    expect(coachContent("en").config.apiUrl).toBe("https://coach.musclequest.app/api/access-requests");
    expect(coachContent("en").config.turnstileSiteKey).toBe("0x4AAAAAAF-BssgFb_07sRUt");
  });
});
