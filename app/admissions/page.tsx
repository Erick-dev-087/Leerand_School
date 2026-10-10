import type { Metadata } from "next";
import { site, whatsappUrl } from "@/lib/site";
import SectionIntro from "@/components/ui/SectionIntro";
import AdmissionsForm from "@/components/admissions/AdmissionsForm";
import TrackOnMount from "@/components/analytics/TrackOnMount";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Start your journey with Leerand School, Thika. Send a quick admission enquiry or talk to us directly on WhatsApp.",
};

export default function AdmissionsPage() {
  return (
    <>
      <TrackOnMount event="admissions_page_view" props={{ source: "admissions_page" }} />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-content">
          <SectionIntro
            as="h1"
            eyebrow="Admissions"
            title="Start your journey with Leerand"
            lead="Enrolment is open. Tell us a little about your child and we'll be in touch — or chat with us directly on WhatsApp."
          />
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-content grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {/* Form path */}
          <div>
            <h2 className="mb-5 font-serif text-2xl text-navy">
              Enquire about admission
            </h2>
            <AdmissionsForm />
          </div>

          {/* WhatsApp path + reassurance */}
          <ScrollReveal className="lg:sticky lg:top-24">
            <div className="rounded-3xl bg-navy p-7 text-cream">
              <h2 className="font-serif text-2xl">Prefer to talk?</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                Message our team on WhatsApp for a quick, friendly conversation
                about places, visits and next steps.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white"
              >
                Talk to us on WhatsApp
              </a>
              <div className="mt-6 border-t border-cream/15 pt-6 text-sm text-cream/75">
                <p>
                  Call:{" "}
                  <a href={site.phoneHref} className="text-gold hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a href={site.emailHref} className="text-gold hover:underline">
                    {site.email}
                  </a>
                </p>
                <p className="mt-1 text-cream/55">{site.officeHours}</p>
              </div>
            </div>
            <p className="mt-4 px-1 text-xs text-navy/50">
              Your information goes only to the school admissions team and is
              used solely to respond to your enquiry.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
