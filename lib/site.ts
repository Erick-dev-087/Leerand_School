// Central site configuration. Values marked PLACEHOLDER must be replaced with
// verified school details before launch (see design.md "Content Rules").

export const site = {
  name: "Leerand School",
  shortName: "Leerand",
  location: "Thika, Kiambu County, Kenya",
  tagline: "Learn · Innovate · Succeed",
  // PLACEHOLDER contact details — confirm with the school before launch.
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  email: "admissions@leerandschool.ac.ke",
  emailHref: "mailto:admissions@leerandschool.ac.ke",
  whatsappNumber: "254700000000",
  whatsappMessage: "Hello Leerand School, I would like to enquire about admissions.",
  address: "P.O. Box 0000-01000, Thika, Kenya",
  officeHours: "Monday – Friday, 8:00am – 5:00pm",
  socials: {
    facebook: "https://www.facebook.com/LeerandSchoolThika",
    instagram: "https://www.instagram.com/leerandschoolthika",
  },
};

export function whatsappUrl(message: string = site.whatsappMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our School", href: "/our-school" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "Why Leerand", href: "/why-leerand" },
  { label: "Admissions", href: "/admissions" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

// Working brand spine — replaceable with official wording without redesign.
export const brandSpine = [
  {
    key: "learn",
    title: "Learn",
    statement: "Building strong foundations.",
    detail: "Knowledge, understanding, skills and curiosity.",
  },
  {
    key: "innovate",
    title: "Innovate",
    statement: "Exploring what is possible.",
    detail: "Questioning, imagining, creating, experimenting and discovering.",
  },
  {
    key: "succeed",
    title: "Succeed",
    statement: "Growing into confident, capable individuals.",
    detail: "Success beyond grades: confidence, character, independence and capability.",
  },
] as const;
