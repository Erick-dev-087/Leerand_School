import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import JsonLd from "@/components/seo/JsonLd";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leerandschool.ac.ke"),
  title: {
    default: "Leerand School, Thika — Primary & Junior Secondary School | Learn · Innovate · Succeed",
    template: "%s — Leerand School, Thika",
  },
  description:
    "Leerand School is a leading CBE primary school and junior secondary school in Thika, Kenya. We nurture whole-child growth — strong foundations, curiosity, confidence and character. Enquire about admissions today.",
  keywords: [
    "Leerand School",
    "Leerand School Thika",
    "schools in Thika",
    "primary school Thika",
    "junior secondary school Thika",
    "best schools in Thika",
    "CBE school Thika",
    "CBC school Thika",
    "private school Thika",
    "schools in Kiambu County",
    "primary school Kenya",
    "Thika Valley school",
  ],
  openGraph: {
    title: "Leerand School, Thika — Primary & Junior Secondary School",
    description:
      "A leading CBE primary and junior secondary school in Thika, Kenya. Whole-child growth: Learn, Innovate, Succeed.",
    type: "website",
    locale: "en_KE",
    siteName: "Leerand School, Thika",
    images: [
      {
        url: "/images/campus.png",
        width: 1200,
        height: 630,
        alt: "Leerand School campus in Thika — primary and junior secondary school",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leerand School, Thika — Primary & Junior Secondary School",
    description:
      "A leading CBE school in Thika, Kenya. Strong foundations, curiosity, confidence and character.",
    images: ["/images/campus.png"],
  },
  alternates: {
    canonical: "https://leerandschool.ac.ke",
  },
  other: {
    "geo.region": "KE-22",
    "geo.placename": "Thika",
    "geo.position": "-1.0396;37.0900",
    ICBM: "-1.0396, 37.0900",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <JsonLd />
        <PageViewTracker />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
