"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { img } from "@/lib/images";

const principles = [
  {
    key: "learn",
    title: "Learn",
    statement: "Building strong foundations.",
    body: "Knowledge, understanding, skills and curiosity. Every Leerand journey begins with learning that is solid, genuine and built to last.",
    image: img.scienceChemistry,
  },
  {
    key: "innovate",
    title: "Innovate",
    statement: "Exploring what is possible.",
    body: "Questioning, imagining, creating, experimenting and discovering. We give children room to explore ideas and find new ways to think.",
    image: img.creativityCrafts,
  },
  {
    key: "succeed",
    title: "Succeed",
    statement: "Growing into confident, capable individuals.",
    body: "Success beyond grades: confidence, character, independence and capability — children ready to thrive, together and on their own.",
    image: img.sportsWinners,
  },
];

export default function PhilosophyScroll() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [isLarge, setIsLarge] = useState(false);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLarge(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-cream">
      <div className="container-wide grid gap-0 lg:grid-cols-2 lg:gap-12">
        {/* Sticky image panel (desktop) */}
        <div className="hidden lg:block">
          <div className="sticky top-24 h-[70vh] overflow-hidden rounded-[2.5rem] bg-navy/5">
            {principles.map((p, i) => (
              <motion.div
                key={p.key}
                className="absolute inset-0"
                animate={{
                  opacity: active === i ? 1 : 0,
                  scale: reduce ? 1 : active === i ? 1 : 1.06,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                  style={{ objectPosition: p.image.pos ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </motion.div>
            ))}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {principles.map((p, i) => (
                <span
                  key={p.key}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    active === i ? "w-8 bg-gold" : "w-3 bg-cream/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling text blocks */}
        <div>
          {principles.map((p, i) => {
            const dim = isLarge && active !== i;
            return (
              <div
                key={p.key}
                data-index={i}
                ref={(el) => {
                  blockRefs.current[i] = el;
                }}
                className="flex min-h-[72vh] items-center py-10"
              >
                <motion.div
                  animate={{
                    opacity: dim ? 0.35 : 1,
                    filter: dim && !reduce ? "blur(3px)" : "blur(0px)",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {/* Inline image on mobile only */}
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-3xl lg:hidden">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: p.image.pos ?? "center" }}
                    />
                  </div>
                  <span className="font-serif text-6xl text-gold/30">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-4xl text-navy sm:text-5xl">{p.title}</h2>
                  <p className="mt-3 font-serif text-xl text-royal">
                    {p.statement}
                  </p>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-navy/70">
                    {p.body}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
