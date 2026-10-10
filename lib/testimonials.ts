// Parent testimonials.
//
// IMPORTANT (design.md §16 / Content Rules): only genuine, school-approved
// testimonials may appear here. Never fabricate them. This array is
// intentionally empty until Leerand supplies approved quotes.

export type Testimonial = {
  quote: string;
  name: string;
  role?: string; // e.g. "Parent, Grade 3"
};

export const TESTIMONIALS: Testimonial[] = [];
