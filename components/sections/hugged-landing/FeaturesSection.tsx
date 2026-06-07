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
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {messages.features.items.map((feature: { title: string; description: string; tone: string }, index: number) => (
          <Reveal key={feature.title} delay={index * 0.04}>
            <Card className="group rounded-[2rem] border-white/80 bg-white/76 shadow-[0_14px_40px_rgba(17,17,17,0.05)] transition-transform duration-300 hover:-translate-y-1 hover:bg-white/90">
              <CardHeader className="flex-row items-center justify-between gap-4">
                <div>
                  <CardTitle className="font-heading text-xl tracking-tight">
                    {feature.title}
                  </CardTitle>
                </div>
                <div className={`grid size-12 place-items-center rounded-full ${feature.tone === "coral" ? "bg-coral-soft text-coral" : "bg-mint-soft text-mint"}`}>
                  <Sparkles className="size-5" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-neutral-600">{feature.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionFrame>
  );
}
