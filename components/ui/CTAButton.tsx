"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "light" | "gold";
type Size = "sm" | "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** analytics CTA name, e.g. "Enquire About Admission" */
  cta?: string;
  page?: string;
  section?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold tracking-tight transition-all duration-300 ease-editorial focus-visible:outline-offset-4 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-cream hover:bg-royal hover:-translate-y-0.5 shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-navy ring-1 ring-inset ring-navy/25 hover:ring-navy/60 hover:-translate-y-0.5",
  gold: "bg-gold text-navy hover:bg-orange hover:text-navy hover:-translate-y-0.5 shadow-sm hover:shadow-md",
  ghost: "bg-transparent text-navy hover:text-royal underline-offset-4 hover:underline",
  light:
    "bg-cream text-navy ring-1 ring-inset ring-white/30 hover:bg-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  cta,
  page,
  section,
  external = false,
}: Props) {
  const handleClick = () => {
    if (cta) track("cta_click", { cta, page, section });
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={handleClick}>
      {children}
    </Link>
  );
}
