"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { img } from "@/lib/images";
import CTAButton from "@/components/ui/CTAButton";

const slides = [
  img.studentsClimbing,
  img.scienceChemistry,
  img.communityDance,
  img.learnersMural,
  img.campus,
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback(
    (step: number) =>
      setState(([i]) => [(i + step + slides.length) % slides.length, step]),
    [],
  );
  const goTo = (i: number) =>
    setState(([cur]) => [i, i > cur ? 1 : i < cur ? -1 : 0]);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [reduce, paused, paginate, index]);

  const active = slides[index];

  return (
    <section className="relative flex flex-col overflow-hidden bg-cream lg:block lg:min-h-[88vh]">
      {/* soft decorative wash behind the text */}
      <div className="pointer-events-none absolute -left-24 -top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      {/* Text — stable, sits above the image on cream */}
      <div className="container-wide relative z-10 order-1 flex flex-col justify-center py-12 sm:py-16 lg:min-h-[88vh] lg:py-20">
        <div className="max-w-xl">
          <motion.p
            className="eyebrow text-orange"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Leerand School · Thika
          </motion.p>
          <motion.h1
            className="mt-4 text-balance text-4xl leading-[1.05] text-navy sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            Growing Minds. <span className="text-royal">Shaping Lives.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-navy/70"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            More than academics. At Leerand, children build strong foundations,
            discover their strengths and grow into confident, capable
            individuals — learning to live and work well with others.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <CTAButton href="/our-school" variant="primary" size="lg" cta="Explore Leerand" page="/" section="hero">
              Explore Leerand
            </CTAButton>
            <CTAButton href="/admissions" variant="secondary" size="lg" cta="Enquire About Admission" page="/" section="hero">
              Admissions / Enquire
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/* Image — large and edge-bleeding, with a soft rounded edge toward the
          text (no cream wash over the photo, so colours stay vivid) */}
      <div
        className="group relative order-2 h-[64vw] max-h-[520px] w-full overflow-hidden rounded-t-[1.75rem] shadow-[0_26px_60px_-34px_rgba(7,26,74,0.5)] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:max-h-none lg:w-[56%] lg:rounded-t-none lg:rounded-l-[2.75rem]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="group"
        aria-roledescription="carousel"
        aria-label="Life at Leerand"
      >
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            className="absolute inset-0"
            initial={reduce ? { opacity: 0 } : { x: dir >= 0 ? "100%" : "-100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: dir >= 0 ? "-100%" : "100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            drag={reduce ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) paginate(1);
              else if (info.offset.x > 70) paginate(-1);
            }}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              style={{ objectPosition: active.pos ?? "center" }}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Only a soft shadow + rounded edge separate image from text — no
            cream overlay, so the photo keeps its full colour. A slim scrim at
            the base just keeps the controls legible. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/25 to-transparent" />

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-cream" : "w-2 bg-cream/50 hover:bg-cream/80"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-3 right-3 z-10 flex gap-2">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous image"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/85 text-navy shadow-md backdrop-blur transition hover:bg-cream"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next image"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/85 text-navy shadow-md backdrop-blur transition hover:bg-cream"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
