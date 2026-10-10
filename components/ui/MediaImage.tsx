"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteImage } from "@/lib/images";

type Shape = "rounded" | "soft" | "arch" | "organic" | "none";

type Props = {
  image: SiteImage;
  className?: string;
  /** CSS aspect-ratio, e.g. "4 / 5" or "16 / 9" */
  ratio?: string;
  shape?: Shape;
  priority?: boolean;
  sizes?: string;
  /** subtle scale-in reveal when scrolled into view */
  reveal?: boolean;
};

const shapeClass: Record<Shape, string> = {
  rounded: "rounded-[1.75rem]",
  soft: "rounded-2xl",
  arch: "rounded-t-[14rem] rounded-b-2xl",
  organic: "rounded-organic",
  none: "",
};

/**
 * Editorial image frame: fills its box with object-cover using the manifest's
 * focal position, applies an optional shape, and reveals with a gentle mask +
 * zoom on scroll. Reduced-motion users get a static image.
 */
export default function MediaImage({
  image,
  className = "",
  ratio = "4 / 5",
  shape = "soft",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  reveal = true,
}: Props) {
  const reduce = useReducedMotion();
  const animate = reveal && !reduce;

  return (
    <motion.div
      className={`relative overflow-hidden bg-navy/5 ${shapeClass[shape]} ${className}`}
      style={{ aspectRatio: ratio }}
      initial={animate ? { opacity: 0, clipPath: "inset(0 0 18% 0)" } : false}
      whileInView={animate ? { opacity: 1, clipPath: "inset(0 0 0% 0)" } : undefined}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="h-full w-full"
        initial={animate ? { scale: 1.08 } : false}
        whileInView={animate ? { scale: 1 } : undefined}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: image.pos ?? "center" }}
        />
      </motion.div>
    </motion.div>
  );
}
