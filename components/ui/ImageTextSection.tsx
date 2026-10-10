import type { ReactNode } from "react";
import type { SiteImage } from "@/lib/images";
import MediaImage from "@/components/ui/MediaImage";
import ScrollReveal from "@/components/motion/ScrollReveal";

type Tone = "cream" | "white" | "navy" | "royal";
type Shape = "rounded" | "soft" | "arch" | "organic" | "none";

type Props = {
  image: SiteImage;
  title: ReactNode;
  eyebrow?: string;
  children: ReactNode;
  footer?: ReactNode;
  /** image on the right when true (desktop); stacks image-first on mobile */
  reverse?: boolean;
  tone?: Tone;
  ratio?: string;
  shape?: Shape;
};

const toneClass: Record<Tone, string> = {
  cream: "bg-cream text-navy",
  white: "bg-white text-navy",
  navy: "bg-navy text-cream",
  royal: "bg-royal text-cream",
};

export default function ImageTextSection({
  image,
  title,
  eyebrow,
  children,
  footer,
  reverse = false,
  tone = "cream",
  ratio = "4 / 5",
  shape = "rounded",
}: Props) {
  const dark = tone === "navy" || tone === "royal";

  return (
    <section className={`py-16 md:py-24 ${toneClass[tone]}`}>
      <div className="container-content grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : "lg:order-1"}>
          <MediaImage image={image} ratio={ratio} shape={shape} />
        </div>

        <ScrollReveal className={reverse ? "lg:order-1" : "lg:order-2"}>
          {eyebrow && (
            <p className={`eyebrow mb-3 ${dark ? "text-gold" : "text-orange"}`}>
              {eyebrow}
            </p>
          )}
          <h2
            className={`text-2xl leading-tight sm:text-3xl md:text-4xl ${
              dark ? "text-cream" : "text-navy"
            }`}
          >
            {title}
          </h2>
          <div
            className={`mt-5 space-y-4 text-base leading-relaxed ${
              dark ? "text-cream/80" : "text-navy/70"
            }`}
          >
            {children}
          </div>
          {footer && <div className="mt-7">{footer}</div>}
        </ScrollReveal>
      </div>
    </section>
  );
}
