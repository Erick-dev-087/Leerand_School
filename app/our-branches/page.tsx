import type { Metadata } from "next";
import SectionIntro from "@/components/ui/SectionIntro";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  title: "Our Branches — Thika Valley & Athena Campus Locations",
  description:
    "Leerand School has two branches in the Thika area — our main campus in Thika Valley and the Athena branch on Kiganjo–British American Tobacco Road. Find directions, maps and how to enrol.",
  alternates: { canonical: "https://leerandschool.ac.ke/our-branches" },
};

const branches = [
  {
    id: "thika-valley",
    name: "Thika Valley — Main Campus",
    eyebrow: "Main Campus",
    description:
      "Our main campus sits in the heart of Thika Valley, offering a spacious, secure environment where children learn, play and grow. The campus houses our primary and junior secondary programmes along with dedicated activity, sports and creative spaces — everything a growing child needs under one roof.",
    address: "6615-01000 Thika Valley, Thika",
    mapQuery: "6615-01000+Thika+Valley,+Thika",
    mapSrc:
      "https://www.google.com/maps?q=6615-01000+Thika+Valley,+Thika&output=embed",
  },
  {
    id: "athena",
    name: "Athena Branch",
    eyebrow: "Athena Branch",
    description:
      "The Athena branch extends Leerand's commitment to accessible, quality education to families in the Kiganjo area. Located along the British American Tobacco Road, the branch provides the same whole-child learning experience in a warm, community-centred setting.",
    address: "Kiganjo — British American Tobacco Rd",
    mapQuery: "Kiganjo+British+American+Tobacco+Rd",
    mapSrc:
      "https://www.google.com/maps?q=Kiganjo+British+American+Tobacco+Rd&output=embed",
  },
];

export default function OurBranchesPage() {
  return (
    <>
      {/* Page intro */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-content">
          <SectionIntro
            as="h1"
            eyebrow="Our Branches"
            title="Two campuses, one Leerand family"
            lead="Wherever you are in Thika and its surroundings, Leerand is close to home. Explore our two branches and find the one that works best for your family."
          />
        </div>
      </section>

      {/* Branch sections */}
      {branches.map((branch, idx) => {
        const isReversed = idx % 2 !== 0;

        return (
          <section
            key={branch.id}
            id={branch.id}
            className={`${idx % 2 === 0 ? "bg-white" : "bg-cream-deep"} py-16 md:py-24`}
          >
            <div className="container-wide">
              {/* Branch heading — always full-width on top */}
              <ScrollReveal>
                <p className="eyebrow mb-3 text-orange">{branch.eyebrow}</p>
                <h2 className="text-balance text-3xl leading-[1.08] text-navy sm:text-4xl md:text-5xl">
                  {branch.name}
                </h2>
              </ScrollReveal>

              {/* Two-column layout: alternates description/map order */}
              <div
                className={`mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14 ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Description column — always first on mobile */}
                <ScrollReveal
                  delay={0.08}
                  className={`${isReversed ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="max-w-lg">
                    <p className="text-base leading-relaxed text-navy/75 sm:text-lg">
                      {branch.description}
                    </p>

                    {/* Address badge */}
                    <div className="mt-6 flex items-start gap-3 rounded-2xl bg-cream p-4 ring-1 ring-navy/8">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-cream">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4.5 w-4.5"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.274 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-navy">
                          Address
                        </p>
                        <p className="mt-0.5 text-sm text-navy/65">
                          {branch.address}
                        </p>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <CTAButton
                        href="/admissions"
                        variant="primary"
                        size="lg"
                        cta="Enrol Now"
                        page="/our-branches"
                        section={branch.id}
                      >
                        Enrol Now
                      </CTAButton>
                      <CTAButton
                        href="/contact"
                        variant="secondary"
                        size="lg"
                        cta="Contact Us"
                        page="/our-branches"
                        section={branch.id}
                      >
                        Contact Us
                      </CTAButton>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Map column — always second on mobile */}
                <ScrollReveal
                  delay={0.16}
                  className={`${isReversed ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-[0_20px_50px_-20px_rgba(7,26,74,0.25)]">
                    <iframe
                      title={`Map to Leerand School — ${branch.name}`}
                      src={branch.mapSrc}
                      className="h-[340px] w-full sm:h-[400px] lg:h-[440px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-3 text-xs text-navy/50">
                    Map location is approximate — open in Google Maps for exact
                    directions.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <CtaBand
        eyebrow="Admissions"
        title="Ready to join the Leerand family?"
        lead="Whichever branch is closest to you, we'd love to welcome your child. Start your enquiry today."
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Visit / Contact" }}
        page="/our-branches"
      />
    </>
  );
}
