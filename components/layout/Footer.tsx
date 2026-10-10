"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, site, whatsappUrl } from "@/lib/site";
import { img } from "@/lib/images";
import { track } from "@/lib/analytics";
import CTAButton from "@/components/ui/CTAButton";

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src={img.logo.src}
                alt={img.logo.alt}
                width={52}
                height={52}
                className="h-13 w-13 rounded-xl bg-white p-1"
                style={{ height: 52, width: 52 }}
              />
              <span className="font-serif text-xl font-semibold">
                Leerand School
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              A CBE school in {site.location} built around whole-child growth —
              helping children learn strong foundations, discover their
              strengths and grow into confident, capable individuals.
            </p>
            <p className="eyebrow mt-5 text-gold">{site.tagline}</p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="eyebrow mb-4 text-cream/50">Explore</h2>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + CTA */}
          <div>
            <h2 className="eyebrow mb-4 text-cream/50">Get in touch</h2>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <a
                  href={site.phoneHref}
                  onClick={() => track("phone_click", { source: "footer" })}
                  className="transition-colors hover:text-gold"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  onClick={() => track("email_click", { source: "footer" })}
                  className="break-all transition-colors hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-cream/60">{site.address}</li>
              <li className="text-cream/60">{site.officeHours}</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/admissions" variant="gold" size="sm" cta="Enquire About Admission" page={pathname} section="footer">
                Enquire
              </CTAButton>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { source: "footer" })}
                className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-cream ring-1 ring-inset ring-cream/25 transition-colors hover:ring-cream/60"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Leerand School, Thika. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Facebook
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              Instagram
            </a>
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
