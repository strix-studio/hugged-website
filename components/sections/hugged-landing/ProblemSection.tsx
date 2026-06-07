import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { DecorativeQuote } from "@/components/graphics/hugged-graphics";
import { cn } from "@/lib/utils";

export function ProblemSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="problem">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title={messages.problem.title}
            description={messages.problem.description}
          />
          <div className="mt-8 space-y-3 text-foreground">
            {messages.problem.emotionalLines.map((item: string, index: number) => (
              <p
                key={item}
                className={cn(
                  "text-base leading-8 text-neutral-600 md:text-lg",
                  index === 0 && "ml-0 md:ml-10",
                  index === 1 && "ml-0 md:ml-2",
                  index === 2 && "ml-0 md:ml-16"
                )}
              >
                {item}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid gap-4 md:grid-cols-2">
            {messages.problem.points.map((point: string, index: number) => (
              <Card
                key={point}
                className={cn(
                  "rounded-[2rem] border-white/70 bg-white/72 shadow-[0_12px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm",
                  index === 0 && "md:translate-y-6",
                  index === 3 && "md:-translate-y-6"
                )}
              >
                <CardHeader className="pb-2">
                  <div className="mb-2 flex items-center gap-2 text-coral">
                    <DecorativeQuote className="size-6" />
                  </div>
                  <CardTitle className="font-heading text-xl tracking-tight">
                    {point}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-neutral-600">
                    {messages.problem.cardDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
