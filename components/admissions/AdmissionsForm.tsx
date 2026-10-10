"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site";

type Fields = {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: string;
  currentClass: string;
  interestedStage: string;
  message: string;
};

const empty: Fields = {
  parentName: "",
  phone: "",
  email: "",
  childName: "",
  childAge: "",
  currentClass: "",
  interestedStage: "",
  message: "",
};

const stages = ["Early Years", "Primary", "Junior Secondary", "Not sure yet"];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+\d][\d\s-]{6,}$/;

export default function AdmissionsForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const update = (key: keyof Fields, val: string) => {
    if (!started) {
      setStarted(true);
      track("admission_form_start", { source: "admissions_page" });
    }
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.parentName.trim()) next.parentName = "Please enter your name.";
    if (!phoneRe.test(values.phone.trim())) next.phone = "Enter a valid phone number.";
    if (!emailRe.test(values.email.trim())) next.email = "Enter a valid email address.";
    if (!values.childName.trim()) next.childName = "Please enter your child's name.";
    if (values.childAge && Number.isNaN(Number(values.childAge))) {
      next.childAge = "Age should be a number.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // silently drop bots
    if (!validate()) {
      track("admission_form_error", { source: "admissions_page" });
      return;
    }
    // Phase 2 (see backend.md): POST to /api/enquiry → database → notification.
    // No PII is sent to analytics — only that a submission happened.
    track("admission_form_submit", { source: "admissions_page" });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-navy/10 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-2xl">
          ✓
        </div>
        <h3 className="mt-5 font-serif text-2xl text-navy">Thank you</h3>
        <p className="mx-auto mt-3 max-w-md text-navy/70">
          Your enquiry has been received. Our admissions team will be in touch
          soon. For anything urgent, you can also reach us on WhatsApp.
        </p>
        <a
          href={whatsappUrl("Hello Leerand School, I've just sent an admission enquiry.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
        >
          Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <fieldset className="space-y-4">
        <legend className="eyebrow text-orange">Parent / Guardian</legend>
        <Field id="parentName" label="Full name" required error={errors.parentName}>
          <input
            id="parentName"
            type="text"
            autoComplete="name"
            value={values.parentName}
            onChange={(e) => update("parentName", e.target.value)}
            aria-invalid={!!errors.parentName}
            className={inputCls(errors.parentName)}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="phone" label="Phone" required error={errors.phone}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              className={inputCls(errors.phone)}
            />
          </Field>
          <Field id="email" label="Email" required error={errors.email}>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              className={inputCls(errors.email)}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="mt-6 space-y-4">
        <legend className="eyebrow text-orange">Child</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="childName" label="Child's name" required error={errors.childName}>
            <input
              id="childName"
              type="text"
              value={values.childName}
              onChange={(e) => update("childName", e.target.value)}
              aria-invalid={!!errors.childName}
              className={inputCls(errors.childName)}
            />
          </Field>
          <Field id="childAge" label="Age" error={errors.childAge}>
            <input
              id="childAge"
              type="text"
              inputMode="numeric"
              value={values.childAge}
              onChange={(e) => update("childAge", e.target.value)}
              aria-invalid={!!errors.childAge}
              className={inputCls(errors.childAge)}
            />
          </Field>
          <Field id="currentClass" label="Current class (optional)">
            <input
              id="currentClass"
              type="text"
              value={values.currentClass}
              onChange={(e) => update("currentClass", e.target.value)}
              className={inputCls()}
            />
          </Field>
          <Field id="interestedStage" label="Stage of interest">
            <select
              id="interestedStage"
              value={values.interestedStage}
              onChange={(e) => update("interestedStage", e.target.value)}
              className={inputCls()}
            >
              <option value="">Select…</option>
              {stages.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="eyebrow text-orange">Message</legend>
        <Field id="message" label="Your question or message (optional)">
          <textarea
            id="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={inputCls()}
          />
        </Field>
      </fieldset>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-navy px-6 py-4 text-sm font-semibold text-cream transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-royal sm:w-auto"
      >
        Send Enquiry
      </button>
      <p className="mt-4 text-xs text-navy/50">
        We only use these details to respond to your enquiry. We never ask for
        unnecessary sensitive information.
      </p>
    </form>
  );
}

function inputCls(error?: string) {
  return `w-full rounded-xl border bg-cream/50 px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-royal focus:bg-white ${
    error ? "border-brandred" : "border-navy/15"
  }`;
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy/80">
        {label}
        {required && <span className="text-brandred"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-brandred" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
