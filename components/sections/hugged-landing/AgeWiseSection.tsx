import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";

export function AgeWiseSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="age-wise">
      <SectionHeading
        eyebrow="Age-wise guidance"
        title="A gentle timeline for each season of early parenting."
        description="From pregnancy through early childhood, every stage includes activities, feeding support, milestones, and development guidance."
      />
      <div className="mt-10 grid gap-6">
        {messages.ageStages.map((stage: { title: string; items: string[] }, index: number) => (
          <Reveal key={stage.title} delay={index * 0.05}>
            <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-neutral-400">{stage.title}</p>
                  <p className="mt-2 font-heading text-2xl text-foreground">{stage.title}</p>
                </div>
                <div className="rounded-full bg-coral-soft px-4 py-2 text-sm text-coral">
                  {stage.items.length} focus areas
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {stage.items.map((item: string) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-neutral-200 bg-white/80 p-4 text-sm text-neutral-600 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
