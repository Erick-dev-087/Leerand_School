import ScrollReveal from "@/components/motion/ScrollReveal";

type Tone = "dark" | "light";

type Props = {
  steps: string[];
  tone?: Tone;
  className?: string;
};

/** A compact progression flow, e.g. LEARN → EXPLORE → APPLY → GROW. */
export default function ProgressFlow({ steps, tone = "dark", className = "" }: Props) {
  const light = tone === "light";
  return (
    <ScrollReveal
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}
      as="div"
    >
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-3">
          <span
            className={`rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide ${
              light
                ? "bg-cream/10 text-cream ring-1 ring-cream/20"
                : "bg-navy/5 text-navy ring-1 ring-navy/10"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className={light ? "text-gold" : "text-orange"} aria-hidden>
              →
            </span>
          )}
        </span>
      ))}
    </ScrollReveal>
  );
}
