import type { ClientCount, ClientPhones, CoachContent, CoachingSetting } from "../content/coach/types";
import { sanitiseSource } from "./source";

// The request-access form on the coach page. The top half is pure (readSource, collectPayload,
// reduce) and tested under Vitest without a DOM; attachRequestForm is the DOM glue, checked by hand.
// The limits match the coach app's route (src/lib/accessRequests/validate.ts) and
// coaching.submit_access_request: lengths count code points after trimming, as Postgres does.

export type ErrorMessages = CoachContent["form"]["errors"];
export type ErrorKey = keyof ErrorMessages;
export type Messages = ErrorMessages & { sending: string };

export type Payload = {
  name: string;
  email: string;
  coachingSetting: CoachingSetting;
  clientCount: ClientCount;
  clientPhones: ClientPhones;
  message: string | null;
  source: string | null;
  locale: string;
};

export type Field = "name" | "email" | "coachingSetting" | "clientCount" | "clientPhones" | "message";
const FIELDS: readonly Field[] = ["name", "email", "coachingSetting", "clientCount", "clientPhones", "message"];

const COACHING_SETTINGS: readonly CoachingSetting[] = ["gym", "online", "both"];
const CLIENT_COUNTS: readonly ClientCount[] = ["1-5", "6-15", "16-40", "40+"];
const CLIENT_PHONES: readonly ClientPhones[] = ["android", "iphone", "mixed"];
// The route's and the database's shape: something, an @, something with a dot in it.
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const length = (value: string) => Array.from(value).length;

/** The campaign tag from the page's `?src=`, or null when absent or not a short lowercase slug. */
export function readSource(search: string): string | null {
  return sanitiseSource(new URLSearchParams(search).get("src"));
}

function text(form: FormData, name: string): string {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function choice<T extends string>(form: FormData, name: string, allowed: readonly T[]): T | null {
  const value = form.get(name);
  return typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : null;
}

/** Validates the form; on failure, one message per invalid field, in form order. */
export function collectPayload(
  form: FormData,
  source: string | null,
  locale: string,
  messages: ErrorMessages,
): { ok: true; payload: Payload } | { ok: false; errors: Partial<Record<Field, string>> } {
  const errors: Partial<Record<Field, string>> = {};

  const name = text(form, "name");
  if (length(name) === 0) errors.name = messages.nameRequired;
  else if (length(name) > 120) errors.name = messages.nameTooLong;

  const email = text(form, "email");
  if (length(email) === 0) errors.email = messages.emailRequired;
  else if (length(email) > 254) errors.email = messages.emailTooLong;
  else if (!EMAIL.test(email)) errors.email = messages.emailInvalid;

  const coachingSetting = choice(form, "coachingSetting", COACHING_SETTINGS);
  if (!coachingSetting) errors.coachingSetting = messages.coachingSettingRequired;
  const clientCount = choice(form, "clientCount", CLIENT_COUNTS);
  if (!clientCount) errors.clientCount = messages.clientCountRequired;
  const clientPhones = choice(form, "clientPhones", CLIENT_PHONES);
  if (!clientPhones) errors.clientPhones = messages.clientPhonesRequired;

  const message = text(form, "message");
  if (length(message) > 2000) errors.message = messages.messageTooLong;

  if (!coachingSetting || !clientCount || !clientPhones || Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, payload: { name, email, coachingSetting, clientCount, clientPhones, message: message || null, source, locale } };
}

export type FailureKind = "network" | "server" | "turnstile" | "invalid";

/**
 * idle: ready to send (perhaps after a network, server or Turnstile failure, shown in formError).
 * sending: a request is in flight. sent: the thank-you shows. error: the server refused a field.
 * resetTurnstile: the last request used up the token, so the widget must be reset (every failure).
 * Client-side validation errors never reach the reducer: the glue shows them without sending.
 */
export type FormState = {
  status: "idle" | "sending" | "sent" | "error";
  values: Payload | null;
  formError: "network" | "server" | "turnstile" | null;
  fieldErrors: Partial<Record<Field, ErrorKey>>;
  resetTurnstile: boolean;
};

export type FormEvent =
  | { type: "submit"; values: Payload }
  | { type: "succeeded" }
  | { type: "failed"; kind: FailureKind; field?: string };

export const initialState: FormState = { status: "idle", values: null, formError: null, fieldErrors: {}, resetTurnstile: false };

// The message for a field the server called invalid. Client validation already passed, so this
// only fires when the two drift apart; the closest sentence for each field.
const INVALID_FIELD: Record<Field, ErrorKey> = {
  name: "nameRequired",
  email: "emailInvalid",
  coachingSetting: "coachingSettingRequired",
  clientCount: "clientCountRequired",
  clientPhones: "clientPhonesRequired",
  message: "messageTooLong",
};

const isField = (field: string | undefined): field is Field => field !== undefined && (FIELDS as readonly string[]).includes(field);

export function reduce(state: FormState, event: FormEvent): FormState {
  switch (event.type) {
    case "submit":
      if (state.status === "sending" || state.status === "sent") return state;
      return { status: "sending", values: event.values, formError: null, fieldErrors: {}, resetTurnstile: false };
    case "succeeded":
      if (state.status !== "sending") return state;
      return { ...state, status: "sent" };
    case "failed": {
      if (state.status !== "sending") return state;
      // Tokens are single use: whatever failed, the next try needs a fresh one.
      const failed = { ...state, resetTurnstile: true };
      if (event.kind !== "invalid") return { ...failed, status: "idle", formError: event.kind };
      if (isField(event.field)) return { ...failed, status: "error", fieldErrors: { [event.field]: INVALID_FIELD[event.field] } };
      return { ...failed, status: "error", formError: "server" };
    }
  }
}

/** Maps the API's answer to an event: 201 succeeded, 400 by its code, anything else a server failure. */
export function eventForResponse(status: number, body: unknown): FormEvent {
  if (status === 201) return { type: "succeeded" };
  const answer = typeof body === "object" && body !== null ? (body as { code?: unknown; field?: unknown }) : {};
  if (status === 400 && answer.code === "turnstile_failed") return { type: "failed", kind: "turnstile" };
  if (status === 400 && answer.code === "invalid_body") {
    return { type: "failed", kind: "invalid", field: typeof answer.field === "string" ? answer.field : undefined };
  }
  return { type: "failed", kind: "server" };
}

/** The thank-you heading: `{name}` replaced literally (a function replacer, so `$&` in a name stays as typed). */
export function fillThanks(template: string, name: string): string {
  return template.replace("{name}", () => name);
}

// ---- DOM glue ----

type Turnstile = {
  render(container: HTMLElement, options: Record<string, unknown>): string | undefined;
  reset(widgetId?: string): void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

// The server can take about 33 s in the worst case (Turnstile check plus database plus email).
const REQUEST_TIMEOUT_MS = 45_000;
// api.js loads with `defer` and `render=explicit`; this module polls for window.turnstile rather
// than using the script's onload callback, so the order the two scripts run in does not matter.
const TURNSTILE_POLL_MS = 100;
const TURNSTILE_GIVE_UP_MS = 20_000;

export function attachRequestForm(form: HTMLFormElement, messages: Messages): void {
  const submit = form.querySelector<HTMLButtonElement>("#rf-submit")!;
  const formError = form.querySelector<HTMLElement>("#rf-form-error")!;
  const container = form.querySelector<HTMLElement>("#rf-turnstile")!;
  const thanks = document.getElementById("rf-thanks")!;
  const thanksTitle = document.getElementById("rf-thanks-title")!;
  const submitLabel = submit.textContent ?? "";
  const source = readSource(location.search);
  const sourceInput = form.querySelector<HTMLInputElement>("#rf-source");
  if (sourceInput) sourceInput.value = source ?? "";

  let state = initialState;
  let token: string | null = null;
  let widgetId: string | undefined;
  let shownErrors: Partial<Record<Field, string>> = {};

  const controls = (field: Field): HTMLElement[] => [...form.querySelectorAll<HTMLElement>(`[name="${field}"]`)];

  const updateButton = () => {
    const sending = state.status === "sending";
    submit.disabled = sending || token === null;
    submit.textContent = sending ? messages.sending : submitLabel;
  };

  const showFieldErrors = (errors: Partial<Record<Field, string>>) => {
    shownErrors = errors;
    for (const field of FIELDS) {
      const message = errors[field];
      const slot = document.getElementById(`rf-${field}-error`);
      if (slot) {
        slot.textContent = message ?? "";
        slot.hidden = !message;
      }
      for (const el of controls(field)) {
        if (message) el.setAttribute("aria-invalid", "true");
        else el.removeAttribute("aria-invalid");
      }
    }
  };

  const showFormError = (message: string | null) => {
    formError.textContent = message ?? "";
    formError.hidden = !message;
  };

  const focusFirstInvalid = (errors: Partial<Record<Field, string>>) => {
    const first = FIELDS.find((field) => errors[field]);
    if (first) controls(first)[0]?.focus();
  };

  const setToken = (value: string | null) => {
    token = value;
    updateButton();
  };

  const resetTurnstile = () => {
    setToken(null);
    if (widgetId !== undefined) window.turnstile?.reset(widgetId);
  };

  const dispatch = (event: FormEvent) => {
    state = reduce(state, event);
    if (state.status === "sent") {
      const name = state.values?.name ?? "";
      thanksTitle.textContent = fillThanks(thanksTitle.dataset.template ?? "", name);
      form.hidden = true;
      thanks.hidden = false;
      thanksTitle.focus();
      return;
    }
    if (state.resetTurnstile) resetTurnstile();
    const fieldErrors: Partial<Record<Field, string>> = {};
    for (const [field, key] of Object.entries(state.fieldErrors) as [Field, ErrorKey][]) fieldErrors[field] = messages[key];
    // On submit this clears field errors left from a previous server answer.
    showFieldErrors(fieldErrors);
    if (state.status !== "sending") focusFirstInvalid(fieldErrors);
    showFormError(state.formError ? messages[state.formError] : null);
    updateButton();
  };

  // A shown field error disappears as soon as that field is valid again; others stay until submit.
  const recheck = () => {
    if (Object.keys(shownErrors).length === 0) return;
    const result = collectPayload(new FormData(form), source, form.dataset.locale ?? "en", messages);
    const still = result.ok ? {} : result.errors;
    const next: Partial<Record<Field, string>> = {};
    for (const field of FIELDS) if (shownErrors[field] && still[field]) next[field] = still[field];
    showFieldErrors(next);
  };
  form.addEventListener("input", recheck);
  form.addEventListener("change", recheck);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (state.status === "sending" || state.status === "sent") return;
    const result = collectPayload(new FormData(form), source, form.dataset.locale ?? "en", messages);
    if (!result.ok) {
      showFieldErrors(result.errors);
      showFormError(null);
      focusFirstInvalid(result.errors);
      return;
    }
    if (token === null) return;
    const turnstileToken = token;
    dispatch({ type: "submit", values: result.payload });
    let event: FormEvent;
    try {
      const response = await fetch(form.dataset.api!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.payload, turnstileToken }),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      const body: unknown = await response.json().catch(() => null);
      event = eventForResponse(response.status, body);
    } catch {
      event = { type: "failed", kind: "network" };
    }
    dispatch(event);
  });

  let rendered = false;
  const render = (turnstile: Turnstile) => {
    if (rendered) return;
    rendered = true;
    try {
      widgetId = turnstile.render(container, {
        sitekey: container.dataset.sitekey,
        action: container.dataset.action ?? "access-request",
        theme: container.dataset.theme ?? "dark",
        callback: (value: string) => setToken(value),
        "expired-callback": () => setToken(null),
        "error-callback": () => setToken(null),
      });
    } catch {
      widgetId = undefined;
    }
    // Without a widget id the token can never be reset, so the form cannot be sent: say so.
    if (widgetId === undefined) {
      setToken(null);
      showFormError(messages.turnstile);
    } else if (formError.textContent === messages.turnstile) {
      showFormError(null);
    }
  };

  // A slow connection can load api.js after the polling window: render on its load event then.
  document
    .querySelector<HTMLScriptElement>('script[src*="challenges.cloudflare.com/turnstile/"]')
    ?.addEventListener("load", () => window.turnstile && render(window.turnstile), { once: true });

  const started = Date.now();
  const waitForTurnstile = () => {
    if (rendered) return;
    if (window.turnstile) render(window.turnstile);
    else if (Date.now() - started < TURNSTILE_GIVE_UP_MS) setTimeout(waitForTurnstile, TURNSTILE_POLL_MS);
    else showFormError(messages.turnstile);
  };
  waitForTurnstile();
}
