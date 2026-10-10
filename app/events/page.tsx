import type { Metadata } from "next";
import { upcomingEvents } from "@/lib/events";
import SectionIntro from "@/components/ui/SectionIntro";
import EventCard from "@/components/ui/EventCard";
import TrackOnMount from "@/components/analytics/TrackOnMount";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events and moments of school life at Leerand School, Thika — open days, sports, showcases and community gatherings.",
};

export default function EventsPage() {
  const events = upcomingEvents();

  return (
    <>
      <TrackOnMount event="events_page_view" />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-wide">
          <SectionIntro
            as="h1"
            eyebrow="Events"
            title="What's happening at Leerand"
            lead="Open days, sports, showcases and community gatherings. These sample events illustrate school life while the live calendar is being set up with the school."
          />
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-wide grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <ScrollReveal key={e.id} delay={(i % 3) * 0.08} className="h-full">
              <EventCard event={e} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Admissions"
        title="Want to visit during an event?"
        lead="Come and feel the Leerand community for yourself. Get in touch to arrange a visit."
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Contact Us" }}
        page="/events"
      />
    </>
  );
}
