import type { Metadata } from "next";
import { site } from "@/lib/site";
import SectionIntro from "@/components/ui/SectionIntro";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Leerand School handles enquiry information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-content">
        <SectionIntro
          as="h1"
          eyebrow="Privacy"
          title="Your privacy at Leerand"
          lead="A short note on how we handle the information you share through this website. A full privacy notice will be finalised with the school before launch."
        />
        <div className="mt-10 max-w-2xl space-y-5 text-navy/70">
          <p>
            When you send an admission enquiry, we collect only the details
            needed to respond — your name, contact details and information about
            your child. We never ask for unnecessary sensitive information.
          </p>
          <p>
            Enquiry information is used solely by the school admissions team to
            get in touch with you and support your enquiry. It is not sold or
            shared for marketing.
          </p>
          <p>
            To ask about the information we hold, or to request its removal,
            contact us at{" "}
            <a href={site.emailHref} className="text-royal hover:underline">
              {site.email}
            </a>
            .
          </p>
          <p className="text-sm text-navy/50">
            This is placeholder wording for the prototype and does not yet
            constitute the school&apos;s final privacy notice.
          </p>
        </div>
      </div>
    </section>
  );
}
