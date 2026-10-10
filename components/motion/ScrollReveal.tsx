"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** vertical offset in px before reveal */
  y?: number;
  /** delay in seconds */
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Reveals its children with a subtle fade + upward movement when scrolled into
 * view. Honours prefers-reduced-motion by rendering immediately with no motion.
 */
export default function ScrollReveal({
  children,
  className,
  y = 28,
  delay = 0,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
