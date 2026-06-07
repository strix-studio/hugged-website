import type { ComponentType, SVGProps } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal, googleForms } from "./shared";
import { Sparkles } from "lucide-react";

export function WebinarsSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="events">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Webinars & events"
            title={messages.events.title}
            description={messages.events.description}
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {messages.events.cards.map((event: { title: string; description: string; icon?: ComponentType<SVGProps<SVGSVGElement>> }) => {
            const Icon = event.icon || Sparkles;
            return (
              <Reveal key={event.title}>
                <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
                  <CardContent className="grid gap-4 p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-3xl bg-coral-soft text-coral">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg tracking-tight">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-7 text-neutral-600">
                        {event.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <Button className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90" asChild>
          <a href={googleForms.webinar} target="_blank" rel="noreferrer">
            {messages.events.cta}
          </a>
        </Button>
      </div>
    </SectionFrame>
  );
}
