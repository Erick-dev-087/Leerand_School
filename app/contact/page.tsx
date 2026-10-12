import type { Metadata } from "next";
import SectionIntro from "@/components/ui/SectionIntro";
import ContactInfo from "@/components/contact/ContactInfo";
import CTAButton from "@/components/ui/CTAButton";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact — Reach Leerand School in Thika",
  description:
    "Get in touch with Leerand School in Thika — call, email, WhatsApp or visit us. Find our address, office hours, directions and arrange a school tour.",
  alternates: { canonical: "https://leerandschool.ac.ke/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-20">
        <div className="container-content">
          <SectionIntro
            as="h1"
            eyebrow="Contact"
            title="We'd love to hear from you"
            lead="Reach out with any question, or arrange a visit to see Leerand for yourself. Contact details are confirmed with the school."
          />
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-start">
          <ContactInfo />

          <ScrollReveal>
            <div className="overflow-hidden rounded-3xl border border-navy/10">
              <iframe
                title="Map to Leerand School, Thika"
                src="https://www.google.com/maps?q=Leerand+School+Thika&output=embed"
                className="h-[380px] w-full lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-xs text-navy/50">
              Map location is approximate until confirmed with the school.
            </p>
            <div className="mt-6">
              <CTAButton href="/admissions" variant="primary" size="lg" cta="Enquire About Admission" page="/contact" section="contact">
                Enquire About Admission
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
