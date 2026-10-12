import type { Metadata } from "next";
import { img } from "@/lib/images";
import { brandSpine } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import ImageTextSection from "@/components/ui/ImageTextSection";
import SectionIntro from "@/components/ui/SectionIntro";
import MediaImage from "@/components/ui/MediaImage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import CtaBand from "@/components/ui/CtaBand";
import LeerandChild from "@/components/home/LeerandChild";

export const metadata: Metadata = {
  title: "Our School — About Leerand School in Thika",
  description:
    "Leerand School is a community in Thika built around children's growth — a primary and junior secondary school offering whole-child development, strong values and a supportive learning environment in Thika, Kenya.",
  alternates: { canonical: "https://leerandschool.ac.ke/our-school" },
};

const foundation = [
  {
    label: "Vision",
    accent: "border-navy bg-navy text-cream",
    chip: "text-gold",
    // PLACEHOLDER — replace with the school's official vision statement.
    body: "A community where every child grows into a confident, capable and caring individual, ready for a changing world.",
  },
  {
    label: "Mission",
    accent: "border-royal bg-royal text-cream",
    chip: "text-gold",
    // PLACEHOLDER — replace with the school's official mission statement.
    body: "To nurture strong foundations, curiosity and character through learning that goes beyond the classroom.",
  },
  {
    label: "Philosophy",
    accent: "border-orange bg-gradient-to-br from-orange to-gold text-navy",
    chip: "text-navy/70",
    // PLACEHOLDER — replace with the school's official philosophy.
    body: "We believe children learn best when they are known, challenged and encouraged to explore who they can become.",
  },
];

const stages = [
  {
    name: "Early Years",
    line: "Discovering the world through play, wonder and first foundations.",
    image: img.earlyYearsClassroom,
  },
  {
    name: "Primary",
    line: "Building strong foundations, understanding and confidence.",
    image: img.handsOnSkills,
  },
  {
    name: "Junior Secondary",
    line: "Developing independence, deeper skills and real responsibility.",
    image: img.scienceChemistry,
  },
];

export default function OurSchoolPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Our School"
        title={<>More than a place to learn.</>}
        lead="Leerand is a community built to help children learn, discover their strengths and grow into confident individuals — together."
        image={img.communityDance}
        imageRatio="4 / 3"
        actions={
          <>
            <CTAButton href="/admissions" variant="primary" size="lg" cta="Enquire About Admission" page="/our-school" section="hero">
              Enquire About Admission
            </CTAButton>
            <CTAButton href="/academics" variant="secondary" size="lg" cta="Explore Academics" page="/our-school" section="hero">
              Explore Academics
            </CTAButton>
          </>
        }
      />

      {/* Our Foundation */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <SectionIntro
            eyebrow="Our foundation"
            title="What we stand for"
            lead="Our vision, mission and philosophy guide everything at Leerand. Official wording will be confirmed with the school."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {foundation.map((f, i) => (
              <ScrollReveal key={f.label} delay={i * 0.1}>
                <article className={`h-full rounded-3xl border p-7 ${f.accent}`}>
                  <p className={`eyebrow ${f.chip}`}>{f.label}</p>
                  <p className="mt-4 font-serif text-xl leading-snug">{f.body}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Leerand Child (reused interactive section) */}
      <LeerandChild />

      {/* Growing with every stage */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <SectionIntro
            eyebrow="Growing with every stage"
            title="A journey that grows with your child"
            lead="A short look at how learning develops through the years. Exact stages and availability are confirmed with the school."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stages.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.08}>
                <article className="group overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <MediaImage image={s.image} ratio="16 / 11" shape="none" reveal={false} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65">{s.line}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <CTAButton href="/academics" variant="primary" cta="Explore Academics" page="/our-school" section="stages">
              Explore Academics
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Learning environment */}
      <ImageTextSection
        image={img.campus}
        eyebrow="Learning environment"
        title="Space to learn, play and belong"
        tone="white"
        ratio="5 / 4"
        reverse
      >
        <p>
          From classrooms and labs to lawns, play areas and performance spaces,
          Leerand gives children room to focus, explore and come together.
        </p>
        <p>
          Our environment is designed around real learning and genuine
          community — not just a building, but a place children are glad to be.
        </p>
      </ImageTextSection>

      {/* Brief Learn · Innovate · Succeed reinforcement */}
      <section className="bg-navy py-16 text-cream md:py-20">
        <div className="container-content grid gap-8 md:grid-cols-3">
          {brandSpine.map((p, i) => (
            <ScrollReveal key={p.key} delay={i * 0.08}>
              <h3 className="font-serif text-2xl text-gold">{p.title}</h3>
              <p className="mt-2 text-cream/80">{p.statement}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Admissions"
        title="Come and experience Leerand."
        lead="The best way to understand Leerand is to visit. We'd love to meet you."
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Visit / Contact" }}
        page="/our-school"
      />
    </>
  );
}
