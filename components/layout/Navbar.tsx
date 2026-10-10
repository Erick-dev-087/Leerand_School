"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, site } from "@/lib/site";
import { img } from "@/lib/images";
import CTAButton from "@/components/ui/CTAButton";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_6px_24px_-14px_rgba(7,26,74,0.45)]" : ""
      }`}
    >
      <nav className="border-b border-navy/10 bg-cream/90 backdrop-blur-md">
        <div className="container-wide flex h-[72px] items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Leerand School — home"
          >
            <Image
              src={img.logo.src}
              alt={img.logo.alt}
              width={44}
              height={44}
              className="h-11 w-11 rounded-lg object-contain"
              priority
            />
            <span className="hidden font-serif text-lg font-semibold leading-tight text-navy sm:block">
              Leerand<span className="text-royal"> School</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-royal"
                      : "text-navy/70 hover:text-navy"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center lg:flex">
            <CTAButton href="/admissions" variant="primary" size="sm" cta="Enquire / Admissions" page={pathname} section="navbar">
              Enquire
            </CTAButton>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg text-navy lg:hidden"
          >
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-navy/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-[100dvh] w-[82%] max-w-sm flex-col bg-cream px-6 pb-8 pt-6 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-label="Site menu"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-serif text-lg font-semibold text-navy">
                  Leerand<span className="text-royal"> School</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-navy ring-1 ring-navy/15"
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-navy/5 text-royal"
                          : "text-navy/80 hover:bg-navy/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <CTAButton href="/admissions" variant="primary" size="lg" cta="Enquire / Admissions" page={pathname} section="mobile-nav">
                  Enquire About Admission
                </CTAButton>
                <a
                  href={site.phoneHref}
                  className="text-center text-sm font-medium text-navy/60"
                >
                  Call us: {site.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
