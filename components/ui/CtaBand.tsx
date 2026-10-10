import type { ReactNode } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";

type Action = { href: string; label: string; external?: boolean };

type Props = {
  title: ReactNode;
  eyebrow?: string;
  lead?: string;
  primary: Action;
  secondary?: Action;
  page?: string;
  tone?: "navy" | "royal";
};

/** Reusable closing call-to-action band (color-led, no large photo needed). */
export default function CtaBand({
  title,
  eyebrow,
  lead,
  primary,
  secondary,
  page,
  tone = "navy",
}: Props) {
  return (
    <section className={`${tone === "navy" ? "bg-navy" : "bg-royal"} relative overflow-hidden py-20 text-cream md:py-24`}>
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />
      <ScrollReveal className="container-content relative text-center">
        {eyebrow && <p className="eyebrow mb-3 text-gold">{eyebrow}</p>}
        <h2 className="mx-auto max-w-2xl text-balance text-3xl text-cream sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {lead && (
          <p className="mx-auto mt-5 max-w-xl text-cream/75">{lead}</p>
        )}
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CTAButton
            href={primary.href}
            external={primary.external}
            variant="gold"
            size="lg"
            cta={primary.label}
            page={page}
            section="cta-band"
          >
            {primary.label}
          </CTAButton>
          {secondary && (
            <CTAButton
              href={secondary.href}
              external={secondary.external}
              variant="light"
              size="lg"
              cta={secondary.label}
              page={page}
              section="cta-band"
            >
              {secondary.label}
            </CTAButton>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
