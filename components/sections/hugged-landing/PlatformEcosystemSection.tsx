import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";

export function PlatformEcosystemSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="ecosystem">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Platform ecosystem"
            title={messages.ecosystem.title}
            description={messages.ecosystem.description}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {messages.ecosystem.modules.map((module: string, index: number) => (
              <Reveal key={module} delay={index * 0.04}>
                <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
                  <CardContent className="p-6">
                    <p className="text-sm uppercase tracking-[0.32em] text-neutral-400">Module</p>
                    <p className="mt-4 font-heading text-xl text-foreground">{module}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.06}>
          <div className="relative mx-auto max-w-md rounded-[2.5rem] border border-white/80 bg-white/60 p-8 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-sm">
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-coral-soft text-coral shadow-[0_12px_40px_rgba(255,122,107,0.18)]">
              <span className="font-heading text-xl">HUGGED</span>
            </div>
            <div className="grid gap-4">
              {messages.ecosystem.modules.map((module: string) => (
                <div
                  key={module}
                  className="rounded-[1.75rem] border border-neutral-200 bg-white/80 p-4 text-sm text-neutral-700 shadow-sm"
                >
                  <p className="font-medium">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
