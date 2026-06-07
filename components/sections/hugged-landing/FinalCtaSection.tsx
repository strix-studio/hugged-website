import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal, googleForms } from "./shared";

export function FinalCtaSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="join">
      <div className="grid gap-8 rounded-[3rem] border border-slate-200/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Ready for more?"
              title={messages.finalCta.headline}
              description={messages.finalCta.description}
              className="text-white"
            />
          </Reveal>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="h-14 rounded-full bg-white px-8 text-slate-950 shadow-lg hover:bg-slate-100" asChild>
            <a href={googleForms.waitlist} target="_blank" rel="noreferrer">
              {messages.finalCta.primaryCta}
            </a>
          </Button>
          <Button variant="outline" className="h-14 rounded-full border-white/70 px-8 text-white hover:bg-white/10" asChild>
            <a href={googleForms.contact} target="_blank" rel="noreferrer">
              {messages.finalCta.secondaryCta}
            </a>
          </Button>
        </div>
      </div>
    </SectionFrame>
  );
}
