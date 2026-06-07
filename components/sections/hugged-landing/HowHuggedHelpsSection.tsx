import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { BookOpen, CalendarHeart, Home, Users } from "lucide-react";

export function HowHuggedHelpsSection() {
  const messages = useTranslations();
  const helpCards = Object.values(messages.helpCards) as Array<{ title: string; description: string }>;
  const cardIcons = [Home, BookOpen, Users, CalendarHeart];

  return (
    <SectionFrame id="how-hugged-helps">
      <SectionHeading
        eyebrow="How Hugged helps"
        title="Support for parenting, homeschooling, experts, and real connection."
        description="Every major part of the product is built to reduce overwhelm and help families move from pressure to trust."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {helpCards.map((card, index) => {
          const Icon = cardIcons[index % cardIcons.length];

          return (
            <Reveal key={card.title} delay={index * 0.05}>
              <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_18px_50px_rgba(17,17,17,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="grid gap-6 p-6 md:grid-cols-[0.18fr_0.82fr]">
                  <div className="grid h-14 w-14 place-items-center rounded-3xl bg-coral-soft text-coral">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-2xl tracking-tight">
                      {card.title}
                    </CardTitle>
                    <p className="mt-3 text-base leading-7 text-neutral-600">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </SectionFrame>
  );
}
