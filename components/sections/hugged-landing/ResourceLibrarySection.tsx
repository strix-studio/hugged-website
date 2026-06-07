import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal, googleForms } from "./shared";

export function ResourceLibrarySection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="resources">
      <SectionHeading
        eyebrow="Resource library"
        title={messages.resources.title}
        description={messages.resources.description}
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {messages.resources.items.map((item: string) => (
          <Reveal key={item}>
            <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
              <CardContent className="p-6">
                <CardTitle className="font-heading text-lg tracking-tight">
                  {item}
                </CardTitle>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Button className="h-12 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90" asChild>
          <a href={googleForms.waitlist} target="_blank" rel="noreferrer">
            {messages.resources.cta}
          </a>
        </Button>
      </div>
    </SectionFrame>
  );
}
