import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal, googleForms } from "./shared";

export function PartnerSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="partner">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={messages.partner.eyebrow}
            title={messages.partner.title}
            description={messages.partner.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {messages.partner.cards.map((card: { title: string; description: string }) => (
              <Reveal key={card.title}>
                <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
                  <CardContent className="p-6">
                    <CardTitle className="font-heading text-lg tracking-tight">{card.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-7 text-neutral-600">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90" asChild>
              <a href={googleForms.partner} target="_blank" rel="noreferrer">
                {messages.partner.cta}
              </a>
            </Button>
          </div>
        </div>
        <Reveal>
          <div className="rounded-[2.5rem] border border-white/80 bg-white/60 p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)]">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">Partner impact</p>
            <div className="mt-5 space-y-4">
              {messages.partner.impact.map((item: string) => (
                <div key={item} className="rounded-[1.75rem] bg-neutral-100 p-4 text-sm text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
