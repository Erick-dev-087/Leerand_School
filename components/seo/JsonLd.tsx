import { site } from "@/lib/site";

/**
 * Global JSON-LD structured data for Leerand School.
 *
 * Outputs three Schema.org types:
 * 1. **School** (extends EducationalOrganization) — the main entity
 * 2. **WebSite** — helps Google understand the site identity
 * 3. **BreadcrumbList** — per-page breadcrumbs for SERP display
 *
 * This component renders an invisible `<script type="application/ld+json">`
 * and must be placed inside <body> (via layout.tsx).
 */

type BreadcrumbItem = { name: string; href: string };

type Props = {
  /** Optional breadcrumb trail for the current page (homepage is always prepended). */
  breadcrumbs?: BreadcrumbItem[];
};

const BASE_URL = "https://leerandschool.ac.ke";

function schoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${BASE_URL}/#school`,
    name: "Leerand School, Thika",
    alternateName: "Leerand School",
    description:
      "Leerand School is a CBE-based primary and junior secondary school in Thika, Kenya, built around whole-child development — helping children learn strong foundations, discover their strengths and grow into confident, capable individuals.",
    url: BASE_URL,
    logo: `${BASE_URL}/images/leerand-logo.jpg`,
    image: `${BASE_URL}/images/campus.png`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thika Valley",
      addressLocality: "Thika",
      addressRegion: "Kiambu County",
      postalCode: "01000",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate coordinates for Thika Valley area
      latitude: -1.0396,
      longitude: 37.0900,
    },
    areaServed: {
      "@type": "City",
      name: "Thika",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Kiambu County, Kenya",
      },
    },
    sameAs: [
      site.socials.facebook,
      site.socials.instagram,
    ],
    numberOfStudents: {
      "@type": "QuantitativeValue",
      // PLACEHOLDER — replace with actual student count if/when confirmed
      name: "Students enrolled",
    },
    educationalLevel: [
      "Early Years",
      "Primary School",
      "Junior Secondary School",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Academic Programmes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Early Years Programme",
            educationalLevel: "Early Years",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Primary School Programme (CBC)",
            educationalLevel: "Primary",
            educationalProgramMode: "full-time",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "EducationalOccupationalProgram",
            name: "Junior Secondary School Programme (CBC)",
            educationalLevel: "Junior Secondary",
            educationalProgramMode: "full-time",
          },
        },
      ],
    },
    // Additional keywords for local search
    knowsAbout: [
      "Competency-Based Education",
      "CBC Kenya",
      "Primary education in Thika",
      "Junior secondary education in Thika",
      "Whole-child development",
    ],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Leerand School, Thika",
    url: BASE_URL,
    publisher: { "@id": `${BASE_URL}/#school` },
    description:
      "Official website of Leerand School — a primary and junior secondary school in Thika, Kenya.",
    inLanguage: "en-KE",
  };
}

function breadcrumbSchema(items: BreadcrumbItem[]) {
  const allItems = [{ name: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export default function JsonLd({ breadcrumbs }: Props) {
  const schemas: object[] = [schoolSchema(), websiteSchema()];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(breadcrumbSchema(breadcrumbs));
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
