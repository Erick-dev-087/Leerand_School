// Provider-agnostic analytics abstraction (see analytics.md §12).
// No real provider is wired up yet; events are buffered / logged in dev.
// NEVER pass PII (names, phone, email, enquiry message) as event properties.

export type AnalyticsEvent =
  | "page_view"
  | "admissions_page_view"
  | "admission_form_start"
  | "admission_form_submit"
  | "admission_form_error"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "events_page_view"
  | "event_view"
  | "cta_click";

type Props = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === "undefined") return;

  const payload = { event, ...props, ts: Date.now() };

  // Future: forward to the chosen provider (GA4, Plausible, custom endpoint).
  // window.dataLayer?.push(payload);

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", payload);
  }
}
