"use client";

import { motion, useReducedMotion } from "framer-motion";
import { img } from "@/lib/images";
import SectionIntro from "@/components/ui/SectionIntro";
import ActivityCard from "@/components/ui/ActivityCard";
import CTAButton from "@/components/ui/CTAButton";

const items = [
  { image: img.sportsRace, name: "Sport & Movement", themes: ["Teamwork", "Discipline", "Confidence"] },
  { image: img.creativityCrafts, name: "Creativity & Craft", themes: ["Imagination", "Patience", "Pride"] },
  { image: img.musicGuitars, name: "Music", themes: ["Expression", "Focus", "Joy"] },
  { image: img.danceBallet, name: "Dance & Performance", themes: ["Grace", "Courage", "Discipline"] },
];

// slight "loose" offsets that settle to aligned when scrolled into view
const loose = [
  { rotate: -3, y: 20 },
  { rotate: 2.5, y: -14 },
  { rotate: -2, y: 24 },
  { rotate: 3, y: -8 },
];

export default function ActivitiesPreview() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            eyebrow="Beyond the classroom"
            title="Learning doesn't stop when the lesson ends"
            lead="Sport, creativity, music and play help children discover interests, build confidence and learn about themselves."
          />
          <CTAButton href="/activities" variant="secondary" cta="See Activities" page="/" section="activities-preview" className="shrink-0">
            See all activities
          </CTAButton>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-4 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-auto"
              initial={reduce ? false : { opacity: 0, rotate: loose[i].rotate, y: loose[i].y }}
              whileInView={reduce ? undefined : { opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <ActivityCard image={it.image} name={it.name} themes={it.themes} />
            </motion.div>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-navy/40 md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
