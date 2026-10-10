"use client";

import { site, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";

const row =
  "flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5";

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className={row}>
        <span className="text-xl" aria-hidden>📍</span>
        <div>
          <h3 className="font-serif text-lg text-navy">Visit us</h3>
          <p className="mt-1 text-sm text-navy/70">{site.address}</p>
          <p className="text-sm text-navy/70">{site.location}</p>
        </div>
      </div>

      <div className={row}>
        <span className="text-xl" aria-hidden>🕐</span>
        <div>
          <h3 className="font-serif text-lg text-navy">Office hours</h3>
          <p className="mt-1 text-sm text-navy/70">{site.officeHours}</p>
        </div>
      </div>

      <div className={row}>
        <span className="text-xl" aria-hidden>📞</span>
        <div>
          <h3 className="font-serif text-lg text-navy">Call or email</h3>
          <p className="mt-1 text-sm">
            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { source: "contact_page" })}
              className="text-royal hover:underline"
            >
              {site.phone}
            </a>
          </p>
          <p className="text-sm">
            <a
              href={site.emailHref}
              onClick={() => track("email_click", { source: "contact_page" })}
              className="break-all text-royal hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={site.phoneHref}
          onClick={() => track("phone_click", { source: "contact_page_cta" })}
          className="inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-royal"
        >
          Call Us
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "contact_page" })}
          className="inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
        >
          WhatsApp Us
        </a>
      </div>

      <div className="flex gap-5 pt-2 text-sm">
        <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-navy/60 hover:text-royal">
          Facebook
        </a>
        <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-navy/60 hover:text-royal">
          Instagram
        </a>
      </div>
    </div>
  );
}
