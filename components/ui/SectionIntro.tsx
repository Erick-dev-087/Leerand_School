import type { ReactNode } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
};

/** Reusable section header: small eyebrow label, editorial heading, lead text. */
export default function SectionIntro({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className = "",
  as = "h2",
}: Props) {
  const Heading = as;
  const isLight = tone === "light";

  return (
    <ScrollReveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow mb-3 ${isLight ? "text-gold" : "text-orange"}`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={`text-balance text-3xl leading-[1.08] sm:text-4xl md:text-5xl ${
          isLight ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </Heading>
      {lead && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-cream/80" : "text-navy/70"
          }`}
        >
          {lead}
        </p>
      )}
    </ScrollReveal>
  );
}
