import { describe, expect, test } from "vitest";
import { collectPayload, eventForResponse, initialState, readSource, reduce, type FormState, type Payload } from "./requestForm";
import { coach } from "../content/coach/en";

const messages = coach.form.errors;

function form(overrides: Record<string, string | undefined> = {}): FormData {
  const values: Record<string, string | undefined> = {
    name: "  Sam Trainer ",
    email: " Sam@Example.com ",
    coachingSetting: "gym",
    clientCount: "6-15",
    clientPhones: "mixed",
    message: "",
    ...overrides,
  };
  const data = new FormData();
  for (const [key, value] of Object.entries(values)) if (value !== undefined) data.set(key, value);
  return data;
}

const payload: Payload = {
  name: "Sam Trainer",
  email: "Sam@Example.com",
  coachingSetting: "gym",
  clientCount: "6-15",
  clientPhones: "mixed",
  message: null,
  source: null,
  locale: "en",
};

describe("readSource", () => {
  test("reads a valid src parameter", () => {
    expect(readSource("?src=flyer-2026")).toBe("flyer-2026");
  });
  test.each(["", "?", "?other=1", "?src=", "?src=%3Cscript%3E", `?src=${"a".repeat(41)}`, "?src=Flyer"])("drops %s", (search) => {
    expect(readSource(search)).toBeNull();
  });
});

describe("collectPayload", () => {
  test("a valid form gives the trimmed payload, message null when empty and source null when absent", () => {
    expect(collectPayload(form(), null, "en", messages)).toEqual({ ok: true, payload });
  });

  test("keeps the source, the locale and a trimmed message", () => {
    const result = collectPayload(form({ message: " Hi there \n" }), "flyer", "de", messages);
    expect(result).toEqual({ ok: true, payload: { ...payload, message: "Hi there", source: "flyer", locale: "de" } });
  });

  test.each([
    ["name", "nameRequired"],
    ["email", "emailRequired"],
    ["coachingSetting", "coachingSettingRequired"],
    ["clientCount", "clientCountRequired"],
    ["clientPhones", "clientPhonesRequired"],
  ] as const)("a missing %s is an error", (field, key) => {
    expect(collectPayload(form({ [field]: undefined }), null, "en", messages)).toEqual({ ok: false, errors: { [field]: messages[key] } });
  });

  test("a name of only spaces is missing", () => {
    expect(collectPayload(form({ name: "   " }), null, "en", messages)).toEqual({ ok: false, errors: { name: messages.nameRequired } });
  });

  test("a radio value outside the allowed set counts as missing", () => {
    expect(collectPayload(form({ clientCount: "100+" }), null, "en", messages)).toEqual({ ok: false, errors: { clientCount: messages.clientCountRequired } });
  });

  test("name length counts code points: 120 emoji pass, 121 characters fail", () => {
    expect(collectPayload(form({ name: "\u{1F4AA}".repeat(120) }), null, "en", messages).ok).toBe(true);
    expect(collectPayload(form({ name: "a".repeat(121) }), null, "en", messages)).toEqual({ ok: false, errors: { name: messages.nameTooLong } });
  });

  test.each(["sam", "sam@example", "sam @example.com", "@example.com", "sam@@example.com"])("email %s is invalid", (email) => {
    expect(collectPayload(form({ email }), null, "en", messages)).toEqual({ ok: false, errors: { email: messages.emailInvalid } });
  });

  test("an email over 254 characters is too long", () => {
    const email = `${"a".repeat(243)}@example.com`;
    expect(email.length).toBe(255);
    expect(collectPayload(form({ email }), null, "en", messages)).toEqual({ ok: false, errors: { email: messages.emailTooLong } });
  });

  test("a message over 2000 characters is too long, 2000 pass", () => {
    expect(collectPayload(form({ message: "m".repeat(2000) }), null, "en", messages).ok).toBe(true);
    expect(collectPayload(form({ message: "m".repeat(2001) }), null, "en", messages)).toEqual({ ok: false, errors: { message: messages.messageTooLong } });
  });

  test("reports every invalid field at once, in form order", () => {
    const result = collectPayload(new FormData(), null, "en", messages);
    expect(result.ok).toBe(false);
    if (!result.ok) expect(Object.keys(result.errors)).toEqual(["name", "email", "coachingSetting", "clientCount", "clientPhones"]);
  });
});

describe("reduce", () => {
  const sending: FormState = { ...initialState, status: "sending", values: payload };

  test("submit from idle goes to sending with the values and clears errors", () => {
    const before: FormState = { ...initialState, formError: "server", fieldErrors: { name: "nameRequired" }, resetTurnstile: true };
    expect(reduce(before, { type: "submit", values: payload })).toEqual({ status: "sending", values: payload, formError: null, fieldErrors: {}, resetTurnstile: false });
  });

  test("submit from error goes to sending", () => {
    const before: FormState = { ...initialState, status: "error", fieldErrors: { email: "emailInvalid" } };
    expect(reduce(before, { type: "submit", values: payload }).status).toBe("sending");
  });

  test("submit while sending or after sent changes nothing", () => {
    expect(reduce(sending, { type: "submit", values: { ...payload, name: "Other" } })).toBe(sending);
    const sent: FormState = { ...sending, status: "sent" };
    expect(reduce(sent, { type: "submit", values: payload })).toBe(sent);
  });

  test("succeeded goes to sent", () => {
    expect(reduce(sending, { type: "succeeded" })).toEqual({ ...sending, status: "sent" });
  });

  test("failed(turnstile) returns to idle with the turnstile sentence and a widget reset", () => {
    expect(reduce(sending, { type: "failed", kind: "turnstile" })).toEqual({ ...sending, status: "idle", formError: "turnstile", resetTurnstile: true });
  });

  test.each(["network", "server"] as const)("failed(%s) keeps idle with its sentence, the same values and a widget reset", (kind) => {
    const next = reduce(sending, { type: "failed", kind });
    expect(next).toEqual({ ...sending, status: "idle", formError: kind, resetTurnstile: true });
    expect(next.values).toBe(sending.values);
  });

  test("failed(invalid) on a known field shows that field's message", () => {
    expect(reduce(sending, { type: "failed", kind: "invalid", field: "email" })).toEqual({
      ...sending,
      status: "error",
      fieldErrors: { email: "emailInvalid" },
      formError: null,
      resetTurnstile: true,
    });
  });

  test.each([undefined, "body", "locale", "turnstileToken"])("failed(invalid) on field %s shows the server sentence", (field) => {
    expect(reduce(sending, { type: "failed", kind: "invalid", field })).toEqual({ ...sending, status: "error", formError: "server", resetTurnstile: true });
  });

  test("every failure kind asks for a widget reset", () => {
    for (const kind of ["network", "server", "turnstile", "invalid"] as const) {
      expect(reduce(sending, { type: "failed", kind }).resetTurnstile).toBe(true);
    }
  });

  test("a response that arrives when not sending changes nothing", () => {
    expect(reduce(initialState, { type: "succeeded" })).toBe(initialState);
    expect(reduce(initialState, { type: "failed", kind: "network" })).toBe(initialState);
  });
});

describe("eventForResponse", () => {
  test("201 succeeded", () => {
    expect(eventForResponse(201, { ok: true })).toEqual({ type: "succeeded" });
  });
  test("400 turnstile_failed is a turnstile failure", () => {
    expect(eventForResponse(400, { ok: false, code: "turnstile_failed" })).toEqual({ type: "failed", kind: "turnstile" });
  });
  test("400 invalid_body carries the field", () => {
    expect(eventForResponse(400, { ok: false, code: "invalid_body", field: "email" })).toEqual({ type: "failed", kind: "invalid", field: "email" });
  });
  test.each([
    [429, { ok: false, code: "rate_limited" }],
    [500, { ok: false, code: "server_error" }],
    [400, null],
    [404, "Not found"],
    [502, null],
  ])("%s %j is a server failure", (status, body) => {
    expect(eventForResponse(status, body)).toEqual({ type: "failed", kind: "server" });
  });
});
