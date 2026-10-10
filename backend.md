# Leerand School Thika — Backend & Systems Specification

## 1. Purpose

The backend should support the public website without prematurely committing to a complete school management or admissions system.

Core principle:

> Design for future integration, but only build what confirmed school requirements justify.

Leerand has not yet confirmed the project, its current internal systems, or its exact admissions workflow. Therefore the initial site should avoid unnecessary infrastructure and complexity.

---

# 2. System Layers

## Public Website
Responsible for:
- pages;
- content;
- events display;
- admissions enquiry;
- contact actions;
- analytics.

## Future School Operations System
Potentially responsible for:
- enquiry storage;
- admissions management;
- application tracking;
- staff access;
- event management;
- content management;
- analytics dashboard;
- communication workflows.

The second layer is a later phase.

---

# 3. Recommended Architecture

```text
LEERAND PUBLIC WEBSITE
        |
   +----+----+
   |         |
Content   Admissions
             |
         Enquiry Form
             |
            API
             |
       Future Database
             |
      +------+------+
      |             |
Notifications   Admin System
```

The public website must not depend on a complete dashboard.

---

# 4. Admissions Enquiry

Preferred flow:

```text
Parent
  ↓
Admissions Page
  ↓
Enquiry Form
  ↓
Validation
  ↓
API
  ↓
Database
  ↓
Notification
  ↓
Future Admin Dashboard
```

This is preferred over directly sending the form to WhatsApp.

---

# 5. Why Store Enquiries in a Database?

A database provides:
- persistent records;
- search;
- history;
- follow-up;
- analytics;
- conversion tracking;
- future dashboard;
- independence from chat history;
- multiple notification channels.

WhatsApp should be treated as communication, not the system of record.

---

# 6. Initial Enquiry Model

Potential record:

```text
AdmissionEnquiry
----------------
id
parent_name
phone
email
child_name
child_age
current_class
interested_stage
message
status
source
created_at
updated_at
```

Possible statuses:
- NEW
- CONTACTED
- FOLLOW_UP
- APPLICATION_STARTED
- COMPLETED
- CLOSED

Confirm these with the school before implementation.

---

# 7. Notification Layer

Possible channels:
- email;
- WhatsApp Business/API;
- future admin dashboard.

Do not assume a normal personal WhatsApp account can receive automated backend messages.

Keep notification delivery separate from database storage.

```text
New Enquiry
   ├── Database
   ├── Email
   ├── WhatsApp
   └── Dashboard
```

Only enable the channels the school needs.

---

# 8. Requirement Discovery Before Backend Build

After the school agrees to the project, establish:

1. How admission enquiries currently arrive.
2. Whether WhatsApp is used.
3. Whether email is used.
4. Whether Google Forms are used.
5. Whether spreadsheets are used.
6. Whether an existing school management system exists.
7. Who handles admissions.
8. How many staff need access.
9. Whether an admissions dashboard is wanted.
10. Whether application status tracking is wanted.
11. Whether documents are collected.
12. Whether an existing database/system exists.
13. Whether staff need event management.
14. Whether staff need website content editing.
15. What information is private.
16. Data retention requirements.

These answers determine the final architecture.

---

# 9. Do Not Build a Custom CMS Prematurely

First determine:
- what changes;
- how frequently it changes;
- who edits it;
- whether staff actually need an admin interface.

Possible future approaches:
1. simple database-backed content;
2. lightweight headless CMS;
3. reusable custom school CMS;
4. integration with an existing school platform.

Do not build a large CMS merely because content might change.

---

# 10. Events System

Potential record:

```text
Event
-----
id
title
slug
description
start_datetime
end_datetime
location
category
image
registration_url
published
created_at
updated_at
```

Homepage queries upcoming events and shows approximately three.

The `/events` page displays the full public list.

Eventually authorized staff should be able to manage events without code changes.

---

# 11. Future Admin Dashboard

Possible dashboard:

```text
LEERAND ADMIN

Overview
-----------------------------
Admission Enquiries     18
Applications             7
Events                   4
Website Enquiries       12

Admissions
-----------------------------
New
Contacted
Follow-up
Application Started
Completed

Events
-----------------------------
Upcoming
Past

Analytics
-----------------------------
Visitors
Admissions Page Views
Enquiries
Applications
WhatsApp Clicks
```

This is a future system, not a first-version requirement.

---

# 12. Database Selection

Choose based on:
- traffic;
- enquiry volume;
- storage;
- authentication;
- backups;
- cost;
- maintenance;
- developer familiarity;
- actual school requirements.

Supabase is a strong candidate for a small/medium custom backend because it provides PostgreSQL and useful backend services. However, do not pay for a higher tier until actual requirements justify it.

Other valid options include managed PostgreSQL or an existing school system/API.

Infrastructure should remain replaceable where practical.

---

# 13. Hosting

The frontend can use a modern Next.js-compatible platform.

Backend/database can be separate if appropriate.

Do not couple the project to one provider before the school confirms the project.

---

# 14. Security

Any production admissions backend should include:
- server-side validation;
- input sanitization;
- rate limiting;
- spam protection;
- secure authentication;
- role-based access;
- HTTPS;
- database access controls;
- secret management;
- backups;
- audit logging where appropriate.

Never expose database credentials to the browser.

---

# 15. Privacy

Admissions enquiries contain personal information.

Before production launch, confirm:
- who can access records;
- where records are stored;
- retention period;
- privacy notice requirements;
- deletion procedures;
- existing school data policies.

Only collect information necessary for the stated purpose.

---

# 16. Development Phases

## Phase 0 — Proposal / Prototype
Build:
- frontend;
- visual system;
- page structure;
- responsive experience;
- mock/temporary admissions form;
- temporary event data;
- analytics architecture.

Avoid unnecessary paid infrastructure.

## Phase 1 — Confirmed Website
After school approval:
- finalize content;
- verify contact details;
- connect real forms;
- connect analytics;
- configure hosting/domain.

## Phase 2 — School Backend
After requirements meeting:
- database;
- enquiry management;
- notifications;
- event management;
- authentication;
- admin dashboard if required.

## Phase 3 — Expansion
Potential:
- applications;
- document uploads;
- admissions status;
- staff roles;
- content management;
- richer analytics;
- integrations.

---

# 17. Architectural Rule

> Do not build a school management system when the confirmed requirement is only a school website.

Build the public experience cleanly, prepare the interfaces/data boundaries, then build only the backend complexity that solves a confirmed school problem.
