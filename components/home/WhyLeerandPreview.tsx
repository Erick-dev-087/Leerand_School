import { img } from "@/lib/images";
import MediaImage from "@/components/ui/MediaImage";
import SectionIntro from "@/components/ui/SectionIntro";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";

// Temporary pillars — replace with verified claims before launch (design.md §16).
const pillars = [
  { title: "Strong Learning", copy: "Solid foundations in a modern, CBE-aligned approach.", accent: "bg-royal" },
  { title: "Discovering Potential", copy: "Space to find and grow real strengths and interests.", accent: "bg-orange" },
  { title: "Supportive Environment", copy: "A warm community where every child is known.", accent: "bg-gold" },
  { title: "Growing for Life", copy: "Confidence, character and the skills to thrive.", accent: "bg-brandred" },
];

export default function WhyLeerandPreview() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="lg:order-2">
          <MediaImage image={img.studentsGirls} ratio="5 / 4" shape="organic" />
        </ScrollReveal>

        <div className="lg:order-1">
          <SectionIntro
            eyebrow="Why Leerand"
            title="A school built around your child"
            lead="Not a list of features — a genuine approach to helping children learn, belong and grow."
          />
          <ul className="mt-8 space-y-4">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08} as="li">
                <div className="flex gap-4">
                  <span className={`mt-1.5 h-10 w-1.5 shrink-0 rounded-full ${p.accent}`} />
                  <div>
                    <h3 className="font-serif text-lg text-navy">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/65">
                      {p.copy}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton href="/why-leerand" variant="primary" cta="Why Leerand" page="/" section="why-preview">
              Discover why Leerand
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
