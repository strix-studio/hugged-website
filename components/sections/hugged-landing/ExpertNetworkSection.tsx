import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal, googleForms } from "./shared";
import { Button } from "@/components/ui/button";

export function ExpertNetworkSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="experts">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Expert network"
            title={messages.experts.title}
            description={messages.experts.description}
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {messages.experts.roles.map((role: string) => (
            <Reveal key={role}>
              <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
                <CardContent className="p-6">
                  <CardTitle className="font-heading text-lg tracking-tight">
                    {role}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm leading-7 text-neutral-600">
                    Support from vetted experts who understand early family rhythms.
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90" asChild>
            <a href={googleForms.expert} target="_blank" rel="noreferrer">
              Apply as Expert
            </a>
          </Button>
          <Button variant="outline" className="h-12 rounded-full border-border/80 bg-white/80 px-6 text-foreground hover:bg-white" asChild>
            <a href={googleForms.contact} target="_blank" rel="noreferrer">
              Learn how experts join
            </a>
          </Button>
        </div>
      </div>
    </SectionFrame>
  );
}
