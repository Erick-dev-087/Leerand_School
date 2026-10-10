"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "@/lib/images";
import ScrollReveal from "@/components/motion/ScrollReveal";

// Working labels — replaceable with official Leerand terminology.
const traits = [
  { label: "Think", copy: "Curiosity, questions and real problem-solving." },
  { label: "Create", copy: "Making, designing and expressing original ideas." },
  { label: "Move", copy: "Sport, play and growing physical confidence." },
  { label: "Perform", copy: "Music, dance and the courage to take the stage." },
  { label: "Lead", copy: "Teamwork, responsibility and finding their voice." },
  { label: "Discover", copy: "Exploring interests and the wider world." },
];

export default function LeerandChild() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <Image
                src={img.learnersMural.src}
                alt={img.learnersMural.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: img.learnersMural.pos }}
              />
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-gold px-5 py-3 shadow-lg">
              <p className="font-serif text-lg font-semibold text-navy">
                The whole child
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="eyebrow text-orange">The Leerand child</p>
            <h2 className="mt-3 text-3xl text-navy sm:text-4xl md:text-5xl">
              What does a Leerand education look like?
            </h2>
            <p className="mt-5 text-navy/70">
              It is more than a timetable. A Leerand child learns to think,
              create, move, perform, lead and discover — growing in every
              direction, not just on paper.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-8">
            <div className="flex flex-wrap gap-2.5">
              {traits.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    active === i
                      ? "bg-navy text-cream"
                      : "bg-navy/5 text-navy/70 hover:bg-navy/10"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[3.5rem] rounded-2xl border border-navy/10 bg-white/60 p-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif text-lg text-navy"
                >
                  <span className="text-royal">{traits[active].label}.</span>{" "}
                  {traits[active].copy}
                </motion.p>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
