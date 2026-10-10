import Hero from "@/components/home/Hero";
import BrandSpine from "@/components/home/BrandSpine";
import LeerandChild from "@/components/home/LeerandChild";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import EventsPreview from "@/components/home/EventsPreview";
import WhyLeerandPreview from "@/components/home/WhyLeerandPreview";
import Testimonials from "@/components/home/Testimonials";
import CtaBand from "@/components/ui/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandSpine />
      <LeerandChild />
      <AcademicsPreview />
      <ActivitiesPreview />
      <EventsPreview />
      <WhyLeerandPreview />
      <Testimonials />
      <CtaBand
        eyebrow="Admissions"
        title="Ready to discover Leerand?"
        lead="We'd love to show you around and answer your questions. Start with a quick enquiry or come visit us."
        primary={{ href: "/admissions", label: "Enquire About Admission" }}
        secondary={{ href: "/contact", label: "Visit / Contact" }}
        page="/"
      />
    </>
  );
}
