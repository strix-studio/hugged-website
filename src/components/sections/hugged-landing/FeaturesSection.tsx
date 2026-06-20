import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { Sparkles } from "lucide-react";

export function FeaturesSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="features">
      <Reveal>
        <SectionHeading
          eyebrow="Features"
          title={messages.features.title}
          description={messages.features.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {messages.features.items.map((feature: { title: string; description: string; tone: string }, index: number) => (
          <Reveal key={feature.title} delay={index * 0.04}>
            <Card className="group rounded-[2rem] border border-white/80 dark:border-white/5 bg-white/75 dark:bg-neutral-900/75 shadow-[0_14px_40px_rgba(17,17,17,0.04)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(255,111,97,0.12)] hover:bg-white/90 dark:hover:bg-neutral-900/90 py-6 px-2">
              <CardHeader className="flex-row items-start justify-between gap-4 pb-2 px-6 pt-2">
                <div>
                  <CardTitle className="font-heading text-xl tracking-tight text-foreground">
                    {feature.title}
                  </CardTitle>
                </div>
                <div className="grid size-12 place-items-center rounded-full bg-coral-soft text-coral dark:bg-coral-soft/20 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Sparkles className="size-5" />
                </div>
              </CardHeader>
              <CardContent className="px-6 pt-2">
                <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300 mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
