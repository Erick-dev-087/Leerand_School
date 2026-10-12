import type { Metadata } from "next";
import { img } from "@/lib/images";
import ImageTextSection from "@/components/ui/ImageTextSection";
import SectionIntro from "@/components/ui/SectionIntro";
import ProgressFlow from "@/components/ui/ProgressFlow";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Academics — CBE Curriculum, Primary & Junior Secondary",
  description:
    "How children learn and grow at Leerand School, Thika: a CBE (CBC) approach built on understanding, curiosity, application and confidence — from Early Years through Junior Secondary in Thika, Kenya.",
  alternates: { canonical: "https://leerandschool.ac.ke/academics" },
};

const approach = [
  { title: "Foundation", copy: "Core knowledge and skills, built to last." },
  { title: "Exploration", copy: "Questions, curiosity and the freedom to try." },
  { title: "Application", copy: "Using what they know in the real world." },
  { title: "Growth", copy: "Confidence, character and independence." },
];

export default function AcademicsPage() {
  return (
    <>
      {/* Compact intro — no oversized hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-content">
          <SectionIntro
            as="h1"
            eyebrow="Academics"
            title="Learning that builds more than knowledge"
            lead="At Leerand, our CBE approach is about understanding, not just remembering. Children learn to apply what they know, ask good questions, and grow in curiosity, creativity, problem-solving and confidence."
          />
        </div>
      </section>

      {/* Learning approach */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <SectionIntro
            eyebrow="Our approach"
            title="How learning works at Leerand"
          />
          <div className="mt-10">
            <ProgressFlow steps={["Learn", "Explore", "Apply", "Grow"]} />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-navy/10 bg-cream p-6">
                  <span className="font-serif text-3xl text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-serif text-lg text-navy">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {a.copy}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning stages — alternating image/text */}
      <div className="bg-cream pt-6">
        <div className="container-content pb-2 pt-10">
          <SectionIntro
            eyebrow="Learning stages"
            title="Growing through the years"
            lead="A look at how learning develops at each stage. Actual offerings and wording are confirmed with the school."
          />
        </div>
      </div>

      <ImageTextSection
        image={img.earlyYearsClassroom}
        eyebrow="Early Years"
        title="Discovery, curiosity and first foundations"
        tone="cream"
        ratio="4 / 3"
      >
        <p>
          Our youngest learners explore the world through play, wonder and
          hands-on activity — building language, confidence and a love of
          learning from the very start.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={img.scienceElectricity}
        eyebrow="Primary"
        title="Strong foundations and real understanding"
        tone="white"
        ratio="4 / 3"
        reverse
      >
        <p>
          Children deepen core skills in literacy, numeracy and beyond —
          learning collaboratively, working practically and growing the
          confidence to tackle new challenges.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={img.scienceChemistry}
        eyebrow="Junior Secondary"
        title="Independence, depth and responsibility"
        tone="cream"
        ratio="4 / 3"
      >
        <p>
          Older learners take on deeper exploration, teamwork and independent
          work — connecting subjects to the wider world and preparing for the
          next step with real capability.
        </p>
      </ImageTextSection>

      {/* Beyond the classroom */}
      <section className="bg-navy py-16 text-cream md:py-20">
        <div className="container-content text-center">
          <ScrollReveal>
            <p className="eyebrow text-gold">Beyond the classroom</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl text-cream sm:text-4xl">
              Learning connects to creativity, sport and leadership
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">
              Academics at Leerand reach beyond lessons — into creativity,
              teamwork, technology, movement and co-curricular experiences that
              help the whole child grow.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href="/activities" variant="gold" cta="See Activities" page="/academics" section="beyond">
                Explore Activities
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Learning environment */}
      <ImageTextSection
        image={img.handsOnSkills}
        eyebrow="Learning environment"
        title="Where skills are taught hands-on"
        tone="cream"
        ratio="5 / 4"
        reverse
      >
        <p>
          Our learning spaces are made for doing, not just watching — practical,
          purposeful and designed to keep children engaged in genuine learning.
        </p>
      </ImageTextSection>

      <CtaBand
        title="See how your child can grow at Leerand."
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Visit / Contact" }}
        page="/academics"
      />
    </>
  );
}
