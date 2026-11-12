// The campaign source from the coach page's `?src=` parameter. Only a short lowercase slug passes
// (the same rule as the API route and the access_requests.source CHECK); anything else is dropped.
const SOURCE = /^[a-z0-9-]{1,40}$/;

export function sanitiseSource(raw: string | null): string | null {
  return raw !== null && SOURCE.test(raw) ? raw : null;
}
