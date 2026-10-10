import type { Metadata } from "next";
import { img } from "@/lib/images";
import PageHero from "@/components/ui/PageHero";
import ImageTextSection from "@/components/ui/ImageTextSection";
import SectionIntro from "@/components/ui/SectionIntro";
import ProgressFlow from "@/components/ui/ProgressFlow";
import ActivityCard from "@/components/ui/ActivityCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Learning doesn't stop when the lesson ends. Sport, creativity, music and discovery help Leerand children build confidence, teamwork and character.",
};

const showcase = [
  { image: img.sportsRace, name: "Athletics & Sport", themes: ["Teamwork", "Discipline", "Confidence"] },
  { image: img.creativityCrafts, name: "Art & Craft", themes: ["Imagination", "Patience", "Pride"] },
  { image: img.musicGuitars, name: "Music", themes: ["Expression", "Focus", "Joy"] },
  { image: img.danceBallet, name: "Dance", themes: ["Grace", "Courage", "Rhythm"] },
  { image: img.scienceChemistry, name: "Science Club", themes: ["Curiosity", "Problem-solving"] },
  { image: img.playSwings, name: "Play & Movement", themes: ["Freedom", "Friendship", "Wellbeing"] },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        variant="wide"
        eyebrow="Activities"
        title={<>Where curiosity becomes experience</>}
        lead="Sport, creativity, teamwork and exploration help children discover their interests, build confidence and learn about themselves."
        image={img.communityDance}
      />

      {/* Intro statement */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-content">
          <SectionIntro
            title={<>Learning doesn&apos;t stop when the lesson ends</>}
            lead="Beyond formal lessons, children at Leerand find the activities that light them up — and grow in ways a timetable alone could never capture."
          />
        </div>
      </section>

      {/* Main activity story — alternating */}
      <ImageTextSection
        image={img.sportsRace}
        eyebrow="Sport & Movement"
        title="Confidence built in motion"
        tone="white"
        ratio="4 / 3"
      >
        <p>
          On the field and the track, children learn to push themselves, support
          their team and handle both winning and losing with grace. Sport builds
          discipline, resilience and a healthy, active confidence.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={img.creativityCrafts}
        eyebrow="Creativity & Expression"
        title="Ideas made real"
        tone="cream"
        ratio="4 / 3"
        reverse
      >
        <p>
          Through craft, music, dance and making, children learn to express
          ideas, take creative risks and feel proud of what they produce —
          developing patience, imagination and a strong sense of self.
        </p>
      </ImageTextSection>

      <ImageTextSection
        image={img.scienceElectricity}
        eyebrow="Discovery & Thinking"
        title="Curiosity turned into questions"
        tone="white"
        ratio="4 / 3"
      >
        <p>
          Whether solving a problem, running an experiment or exploring something
          new together, children learn to think, test, collaborate and discover —
          the heart of real, lasting learning.
        </p>
      </ImageTextSection>

      {/* Activity showcase */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-wide">
          <SectionIntro
            eyebrow="Activity showcase"
            title="A taste of life at Leerand"
            lead="A sample of the experiences children can take part in. Confirmed activities are updated with the school."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((s, i) => (
              <ScrollReveal key={s.name} delay={(i % 3) * 0.07}>
                <ActivityCard image={s.image} name={s.name} themes={s.themes} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth connection */}
      <section className="bg-navy py-16 text-cream md:py-20">
        <div className="container-content text-center">
          <ScrollReveal>
            <h2 className="mx-auto max-w-2xl text-3xl text-cream sm:text-4xl">
              Every experience helps a child grow
            </h2>
            <div className="mt-8 flex justify-center">
              <ProgressFlow steps={["Discover", "Participate", "Grow"]} tone="light" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="Discover life at Leerand"
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Visit / Contact" }}
        page="/activities"
      />
    </>
  );
}
