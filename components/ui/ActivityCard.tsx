import Image from "next/image";
import type { SiteImage } from "@/lib/images";

type Props = {
  image: SiteImage;
  name: string;
  themes?: string[];
  description?: string;
  className?: string;
};

/** Activity showcase card: clear subject, label and development themes. */
export default function ActivityCard({
  image,
  name,
  themes = [],
  description,
  className = "",
}: Props) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(7,26,74,0.5)] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
          style={{ objectPosition: image.pos ?? "center" }}
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-navy">{name}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-navy/65">
            {description}
          </p>
        )}
        {themes.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {themes.map((t) => (
              <li
                key={t}
                className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-semibold text-navy/75"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
