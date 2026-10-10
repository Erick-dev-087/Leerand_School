import Image from "next/image";
import { brandSpine } from "@/lib/site";
import { img } from "@/lib/images";
import ScrollReveal from "@/components/motion/ScrollReveal";

const media = [img.scienceElectricity, img.creativityCrafts, img.sportsWinners];
const accents = [
  { bar: "bg-gold", text: "text-gold", lift: "lg:translate-y-0" },
  { bar: "bg-orange", text: "text-orange", lift: "lg:translate-y-8" },
  { bar: "bg-brandred", text: "text-brandred", lift: "lg:translate-y-16" },
];

export default function BrandSpine() {
  return (
    <section className="bg-navy py-20 text-cream md:py-28">
      <div className="container-wide">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Our spine</p>
          <h2 className="mt-3 text-3xl text-cream sm:text-4xl md:text-5xl">
            Learn · Innovate · Succeed
          </h2>
          <p className="mt-5 text-cream/70">
            Three connected moments in every Leerand child&apos;s journey — strong
            foundations, the courage to explore, and the confidence to grow.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
          {brandSpine.map((p, i) => (
            <ScrollReveal
              key={p.key}
              delay={i * 0.1}
              className={`group ${accents[i].lift}`}
            >
              <article className="overflow-hidden rounded-3xl bg-cream/[0.04] ring-1 ring-cream/10 transition-colors duration-300 hover:bg-cream/[0.07]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={media[i].src}
                    alt={media[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    style={{ objectPosition: media[i].pos ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span
                    className={`absolute left-5 top-5 h-1.5 w-10 rounded-full ${accents[i].bar}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl ${accents[i].text}`}>{p.title}</h3>
                  <p className="mt-2 font-serif text-lg text-cream">
                    {p.statement}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    {p.detail}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
