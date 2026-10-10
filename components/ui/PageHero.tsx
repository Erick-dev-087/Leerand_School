import type { ReactNode } from "react";
import Image from "next/image";
import type { SiteImage } from "@/lib/images";
import MediaImage from "@/components/ui/MediaImage";
import ScrollReveal from "@/components/motion/ScrollReveal";

type Action = { node: ReactNode };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image: SiteImage;
  variant?: "split" | "wide";
  actions?: ReactNode;
  imageRatio?: string;
};

/**
 * Lightweight inner-page hero.
 * - "split": text left, image right (moderate scale, like Our School).
 * - "wide": a wide photograph with the heading overlaid.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  variant = "split",
  actions,
  imageRatio = "4 / 3",
}: Props) {
  if (variant === "wide") {
    return (
      <section className="relative">
        <div className="relative h-[52vh] min-h-[360px] w-full overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: image.pos ?? "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/35 to-navy/10" />
          <div className="container-wide absolute inset-x-0 bottom-0">
            <ScrollReveal className="max-w-2xl pb-10 text-cream md:pb-14">
              {eyebrow && <p className="eyebrow mb-3 text-gold">{eyebrow}</p>}
              <h1 className="text-balance text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                {title}
              </h1>
              {lead && <p className="mt-5 max-w-xl text-cream/85">{lead}</p>}
              {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
            </ScrollReveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-cream">
      <div className="container-wide grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          {eyebrow && <p className="eyebrow mb-3 text-orange">{eyebrow}</p>}
          <h1 className="text-balance text-4xl leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 text-lg leading-relaxed text-navy/70">{lead}</p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </ScrollReveal>
        <MediaImage
          image={image}
          ratio={imageRatio}
          shape="rounded"
          priority
          reveal={false}
          className="shadow-[0_30px_60px_-30px_rgba(7,26,74,0.5)]"
        />
      </div>
    </section>
  );
}
