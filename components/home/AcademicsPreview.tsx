import { img } from "@/lib/images";
import ImageTextSection from "@/components/ui/ImageTextSection";
import ProgressFlow from "@/components/ui/ProgressFlow";
import CTAButton from "@/components/ui/CTAButton";

export default function AcademicsPreview() {
  return (
    <ImageTextSection
      image={img.scienceChemistry}
      eyebrow="Academics"
      title="Learning that goes beyond knowing"
      reverse
      tone="white"
      ratio="5 / 4"
      shape="rounded"
      footer={
        <div className="space-y-6">
          <ProgressFlow steps={["Learn", "Explore", "Apply", "Grow"]} />
          <CTAButton href="/academics" variant="primary" cta="Explore Academics" page="/" section="academics-preview">
            Explore Academics
          </CTAButton>
        </div>
      }
    >
      <p>
        Our CBE approach is about far more than memorising facts. Children build
        understanding, ask questions and learn to apply what they know — turning
        knowledge into curiosity, problem-solving and real capability.
      </p>
      <p>
        From early years through to the upper primary, learning is active,
        practical and connected to the world around them.
      </p>
    </ImageTextSection>
  );
}
