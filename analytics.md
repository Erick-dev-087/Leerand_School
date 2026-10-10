# Leerand School Thika — Analytics Specification

## 1. Purpose

Analytics should answer:

> Is the website helping parents discover Leerand and take meaningful next steps?

Focus on useful decisions rather than collecting data for its own sake.

---

# 2. Main Funnel

```text
Visitor
  ↓
Website
  ↓
Admissions / Enquiry
  ├── WhatsApp
  └── Enquiry Form
        ↓
   Enquiry Submitted
        ↓
   Future Application
```

The journey should be measurable.

---

# 3. Core Events

## Navigation
`page_view`

Useful dimensions:
- page/path;
- timestamp;
- broad device category where supported.

## Admissions
`admissions_page_view`

`admission_form_start`

`admission_form_submit`

`admission_form_error`

Do not send form contents as analytics properties.

## WhatsApp
`whatsapp_click`

Useful property:
- source page/CTA location.

## Contact
`phone_click`

`email_click`

## Events
`events_page_view`

`event_view`

## CTAs
`cta_click`

Useful properties:
- CTA name;
- page;
- section.

Examples:
- Explore Leerand;
- Enquire About Admission;
- View All Events;
- Contact Us.

---

# 4. Core Conversion Metrics

## Admissions Funnel

```text
Admissions visitors
        ↓
Form starts
        ↓
Form submissions
```

## Enquiry Rate

```text
Enquiries / Admissions page visitors
```

## CTA Engagement

```text
CTA clicks / visitors
```

## WhatsApp Engagement

```text
WhatsApp clicks / website visitors
```

These are more useful than raw page views alone.

---

# 5. Homepage Metrics

Track useful actions:
- hero CTA clicks;
- admissions CTA clicks;
- academics CTA clicks;
- activities CTA clicks;
- events CTA clicks;
- WhatsApp clicks.

Do not track every hover or animation.

---

# 6. Content Engagement

Useful reporting:
- most visited pages;
- most viewed events;
- admissions page engagement;
- broad engagement time where supported;
- traffic source;
- device category.

The goal is to learn which content helps parents move toward enquiry.

---

# 7. Traffic Sources

Track broad acquisition sources when available:
- search;
- social;
- direct;
- referral;
- campaign links.

Use UTM parameters for specific campaigns where useful, such as Facebook, Instagram, WhatsApp campaigns, advertisements or QR codes.

Example:

```text
utm_source=facebook
utm_medium=social
utm_campaign=admissions
```

Avoid unnecessary tracking parameters.

---

# 8. Device Analysis

Track:
- mobile;
- tablet;
- desktop.

Mobile performance is particularly important because parents may discover and contact the school from phones.

---

# 9. Future Admissions Dashboard

Once a backend exists, combine analytics with actual enquiry records:

```text
Admissions Funnel

Visitors to Admissions      420
Enquiry Starts               84
Enquiries Submitted          51
Contacted                    45
Applications Started         27
Applications Completed       18
```

This is more valuable than website analytics alone.

---

# 10. Event Analytics

Measure:
- event page views;
- individual event views;
- registration clicks where applicable;
- enquiry clicks from events;
- event-related WhatsApp clicks.

This can show which school activities generate interest.

---

# 11. Privacy

Never put these into ordinary analytics event properties:
- parent names;
- child names;
- phone numbers;
- emails;
- enquiry messages.

Those belong in the secure admissions system if approved.

Analytics should measure behavior, not expose private enquiry data.

---

# 12. Implementation Abstraction

Keep tracking independent from a single analytics provider.

Conceptually:

```ts
track("admission_form_submit", {
  source: "admissions_page"
})
```

The implementation can later send the event to the chosen provider.

---

# 13. Launch Baseline

At minimum, measure:
- page views;
- admissions page views;
- admissions form starts;
- successful enquiry submissions;
- WhatsApp clicks;
- phone clicks;
- email clicks;
- CTA clicks.

This is enough to establish a useful baseline.

---

# 14. Success Questions

The analytics setup should eventually answer:

1. Are people finding Leerand?
2. Which pages do they visit?
3. Are they reaching Admissions?
4. Are they starting enquiries?
5. Are they completing enquiries?
6. Do parents prefer WhatsApp or the form?
7. Which acquisition channels generate enquiries?
8. Which devices are parents using?
9. Which content helps conversion?
10. Once a backend exists, how many enquiries become applications?

The purpose of analytics is to improve the website and admissions journey, not to create a large collection of numbers.
