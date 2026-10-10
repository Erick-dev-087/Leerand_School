import Image from "next/image";
import { formatEventDate, type SchoolEvent } from "@/lib/events";

type Props = {
  event: SchoolEvent;
  className?: string;
};

const categoryColor: Record<SchoolEvent["category"], string> = {
  Academic: "bg-royal/10 text-royal",
  Sports: "bg-orange/15 text-orange",
  Arts: "bg-brandred/10 text-brandred",
  Community: "bg-gold/20 text-navy",
  Admissions: "bg-navy/10 text-navy",
};

/** Practical event card: image, date badge, category, title and details. */
export default function EventCard({ event, className = "" }: Props) {
  const date = formatEventDate(event.start);

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(7,26,74,0.5)] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-cream/95 px-3 py-2 text-center shadow-sm backdrop-blur">
          <span className="font-serif text-xl font-bold leading-none text-navy">
            {date.day}
          </span>
          <span className="mt-0.5 text-[0.65rem] font-bold tracking-widest text-orange">
            {date.month}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span
          className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColor[event.category]}`}
        >
          {event.category}
        </span>
        <h3 className="font-serif text-xl leading-snug text-navy">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-navy/65">
          {event.description}
        </p>
        <p className="mt-4 text-xs font-medium text-navy/50">
          {date.full} · {event.location}
        </p>
      </div>
    </article>
  );
}
