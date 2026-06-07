import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { MapPin } from "lucide-react";

export function MeetupSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="meetups">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Meetups"
            title={messages.meetups.title}
            description={messages.meetups.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {messages.meetups.cards.map((card: { title: string; description: string; icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => {
              const Icon = card.icon || MapPin;
              return (
                <Card key={card.title} className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
                  <CardContent className="grid gap-4 p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-3xl bg-mint-soft text-mint">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg tracking-tight">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-7 text-neutral-600">
                        {card.description}
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Reveal>
          <div className="relative mx-auto max-w-lg rounded-[2.5rem] border border-white/80 bg-white/60 p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-sm">
            <div className="rounded-[2rem] bg-neutral-100 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">Map view</p>
              <div className="mt-4 h-72 rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,107,0.2),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(99,199,178,0.2),transparent_28%)]"></div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
