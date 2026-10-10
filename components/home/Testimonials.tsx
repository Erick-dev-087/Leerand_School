"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/testimonials";
import SectionIntro from "@/components/ui/SectionIntro";

export default function Testimonials() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const has = TESTIMONIALS.length > 0;

  useEffect(() => {
    if (!has || reduce || TESTIMONIALS.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(t);
  }, [has, reduce]);

  return (
    <section className="bg-royal py-20 text-cream md:py-28">
      <div className="container-content text-center">
        <SectionIntro
          align="center"
          tone="light"
          eyebrow="Parent voices"
          title="What parents say about Leerand"
        />

        {has ? (
          <div className="relative mx-auto mt-12 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-serif text-2xl leading-snug text-cream sm:text-3xl">
                  &ldquo;{TESTIMONIALS[i].quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-cream/70">
                  <span className="font-semibold text-gold">
                    {TESTIMONIALS[i].name}
                  </span>
                  {TESTIMONIALS[i].role ? ` · ${TESTIMONIALS[i].role}` : ""}
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {TESTIMONIALS.length > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.name + idx}
                    type="button"
                    aria-label={`Testimonial ${idx + 1}`}
                    aria-current={idx === i}
                    onClick={() => setI(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === i ? "w-7 bg-gold" : "w-2 bg-cream/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Honest placeholder — no fabricated quotes.
          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-dashed border-cream/25 bg-cream/[0.04] p-8">
            <p className="font-serif text-xl text-cream/90">
              Genuine words from Leerand families will appear here.
            </p>
            <p className="mt-3 text-sm text-cream/65">
              We feature only real, school-approved testimonials. Share yours
              with the school office to be included.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
