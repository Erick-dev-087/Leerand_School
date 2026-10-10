import { upcomingEvents } from "@/lib/events";
import SectionIntro from "@/components/ui/SectionIntro";
import EventCard from "@/components/ui/EventCard";
import CTAButton from "@/components/ui/CTAButton";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function EventsPreview() {
  const events = upcomingEvents(3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            eyebrow="What's on"
            title="Upcoming at Leerand"
            lead="A glimpse of school life — open days, sports, showcases and community moments."
          />
          <CTAButton href="/events" variant="secondary" cta="View All Events" page="/" section="events-preview" className="shrink-0">
            View all events
          </CTAButton>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((e, i) => (
            <ScrollReveal key={e.id} delay={i * 0.08} as="div" className="h-full">
              <EventCard event={e} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
