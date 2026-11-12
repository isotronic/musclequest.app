import type { ScreenshotId } from "../../data/screenshots";
import type { FaqContent } from "../home/types";

/** Values the access request form sends; the API route and the database accept these only. */
export type CoachingSetting = "gym" | "online" | "both";
export type ClientCount = "1-5" | "6-15" | "16-40" | "40+";
export type ClientPhones = "android" | "iphone" | "mixed";

export type CoachContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
    primary: string;
    secondary: string;
    /** Under the buttons: which phones clients can train on. */
    platformNote: string;
    /** Under the buttons, the whole sentence links to the consumer home page. */
    appLinkText: string;
    screenshotAlt: string;
  };
  how: { title: string; intro: string; steps: { title: string; text: string }[] };
  features: {
    title: string;
    blocks: { id: string; title: string; text: string; bullets: string[]; screenshot: ScreenshotId; screenshotAlt: string }[];
  };
  clients: { title: string; intro: string; columns: { title: string; text: string; screenshot: ScreenshotId; screenshotAlt: string }[] };
  early: { title: string; text: string; bullets: string[] };
  form: {
    title: string;
    labels: {
      name: string;
      email: string;
      coachingSetting: string;
      clientCount: string;
      clientPhones: string;
      message: string;
      /** Shown beside the optional field's label. */
      optional: string;
      /** Accessible name of the Turnstile widget's container. */
      turnstile: string;
      options: {
        coachingSetting: Record<CoachingSetting, string>;
        clientCount: Record<ClientCount, string>;
        clientPhones: Record<ClientPhones, string>;
      };
    };
    submit: string;
    sending: string;
    /** Under the button; `privacyLink` is the sentence that links to the privacy policy. */
    note: { text: string; privacyLink: string };
    /** Replaces the form on success; `{name}` is the name the trainer typed. */
    thanks: string;
    /** Label of the Google Play link under the thank-you. */
    thanksPlay: string;
    errors: {
      nameRequired: string;
      nameTooLong: string;
      emailRequired: string;
      emailInvalid: string;
      emailTooLong: string;
      coachingSettingRequired: string;
      clientCountRequired: string;
      clientPhonesRequired: string;
      messageTooLong: string;
      network: string;
      server: string;
      turnstile: string;
    };
    noScript: string;
  };
  faq: FaqContent;
  closing: { title: string; text: string; button: string };
  config: { turnstileSiteKey: string; apiUrl: string; coachAppUrl: string; contactEmail: string };
};
