import type { Metadata } from "next";
import SectionIntro from "@/components/ui/SectionIntro";
import PhilosophyScroll from "@/components/why/PhilosophyScroll";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Why Leerand",
  description:
    "What makes Leerand distinctive: one continuous journey of Learn, Innovate and Succeed — strong foundations, the courage to explore, and the confidence to grow.",
};

export default function WhyLeerandPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-content">
          <SectionIntro
            as="h1"
            eyebrow="Why Leerand"
            title="One journey: Learn, Innovate, Succeed"
            lead="What makes Leerand distinctive isn't a list of features — it's a single, connected journey that helps every child build foundations, explore boldly and grow into who they can be."
          />
        </div>
      </section>

      <PhilosophyScroll />

      <CtaBand
        eyebrow="Admissions"
        title="Ready to take the next step?"
        lead="Start a conversation with us — we'd love to help you discover whether Leerand is the right place for your child."
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Visit / Contact" }}
        page="/why-leerand"
      />
    </>
  );
}
