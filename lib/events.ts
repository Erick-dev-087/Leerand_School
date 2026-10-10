// SAMPLE event data for the frontend prototype (Phase 0).
// These are illustrative placeholders — NOT confirmed Leerand events.
// In Phase 2 this will be replaced by a database/CMS-driven source
// (see backend.md §10). The shape mirrors the planned Event record.

export type SchoolEvent = {
  id: string;
  title: string;
  slug: string;
  description: string;
  start: string; // ISO date
  end?: string;
  location: string;
  category: "Academic" | "Sports" | "Arts" | "Community" | "Admissions";
  image: string;
  registrationUrl?: string;
};

// Marked clearly so no fabricated specifics are mistaken for real ones.
export const SAMPLE_EVENTS: SchoolEvent[] = [
  {
    id: "e1",
    title: "Term Open Day & School Tour",
    slug: "open-day-school-tour",
    description:
      "Meet our teachers, walk through the classrooms and learning spaces, and see a Leerand school day for yourself. Families considering admission are warmly welcome.",
    start: "2026-02-14T09:00:00+03:00",
    end: "2026-02-14T12:00:00+03:00",
    location: "Leerand School, Thika",
    category: "Admissions",
    image: "/images/learners-mural.jpg",
  },
  {
    id: "e2",
    title: "Inter-House Sports Day",
    slug: "inter-house-sports-day",
    description:
      "A full day of athletics, team games and house spirit as learners compete, cheer and celebrate together on the field.",
    start: "2026-03-07T08:30:00+03:00",
    end: "2026-03-07T15:00:00+03:00",
    location: "Leerand School Field, Thika",
    category: "Sports",
    image: "/images/sports-race.jpg",
  },
  {
    id: "e3",
    title: "Creativity & Music Showcase",
    slug: "creativity-music-showcase",
    description:
      "An evening of music, dance and hands-on creative work, where learners share what they have been exploring beyond the classroom.",
    start: "2026-03-21T16:00:00+03:00",
    end: "2026-03-21T18:30:00+03:00",
    location: "Leerand School Hall, Thika",
    category: "Arts",
    image: "/images/music-guitars.jpg",
  },
  {
    id: "e4",
    title: "Parent–Teacher Learning Review",
    slug: "parent-teacher-learning-review",
    description:
      "A structured conversation about each child's progress, strengths and next steps, in partnership with their teachers.",
    start: "2026-04-11T08:00:00+03:00",
    end: "2026-04-11T13:00:00+03:00",
    location: "Leerand School, Thika",
    category: "Academic",
    image: "/images/early-years-classroom.png",
  },
  {
    id: "e5",
    title: "Science & Discovery Fair",
    slug: "science-discovery-fair",
    description:
      "Learners present experiments, projects and discoveries, turning curiosity into questions, tests and shared ideas.",
    start: "2026-05-09T09:00:00+03:00",
    end: "2026-05-09T13:00:00+03:00",
    location: "Leerand School, Thika",
    category: "Academic",
    image: "/images/science-chemistry.jpg",
  },
  {
    id: "e6",
    title: "Community Fun Day",
    slug: "community-fun-day",
    description:
      "Families, staff and learners come together for games, food and connection — including the much-loved staff tug-of-war.",
    start: "2026-06-06T10:00:00+03:00",
    end: "2026-06-06T15:00:00+03:00",
    location: "Leerand School, Thika",
    category: "Community",
    image: "/images/sports-tugofwar.jpg",
  },
];

export function upcomingEvents(count?: number): SchoolEvent[] {
  const sorted = [...SAMPLE_EVENTS].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  );
  return typeof count === "number" ? sorted.slice(0, count) : sorted;
}

export function formatEventDate(iso: string): { day: string; month: string; full: string } {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}
