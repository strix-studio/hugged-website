import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { ShieldCheck } from "lucide-react";

export function SafetySection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="safety">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Safety first"
            title={messages.safety.title}
            description={messages.safety.description}
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {messages.safety.points.map((point: string) => (
            <Reveal key={point}>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-foreground/10 text-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-base leading-7 text-slate-700">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
