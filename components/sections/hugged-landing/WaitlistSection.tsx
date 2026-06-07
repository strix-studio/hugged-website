import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, googleForms } from "./shared";
import { useTranslations } from "@/lib/locale-context";

export function WaitlistSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="waitlist" className="bg-[linear-gradient(135deg,rgba(255,226,221,0.95),rgba(221,246,240,0.92))]">
      <div className="rounded-[2.5rem] border border-white/80 bg-white/80 p-8 shadow-[0_24px_90px_rgba(17,17,17,0.08)] md:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={messages.waitlist.eyebrow}
              title={messages.waitlist.title}
              description={messages.waitlist.description}
            />
            <div className="mt-6 grid gap-4">
              {messages.waitlist.fields.map((label: string) => (
                <input
                  key={label}
                  type="text"
                  placeholder={label}
                  className="w-full rounded-3xl border border-neutral-200 bg-white/90 px-4 py-4 text-sm text-foreground shadow-sm outline-none focus:border-foreground focus:ring-2 focus:ring-coral/10"
                />
              ))}
              <Button className="h-14 rounded-full bg-foreground px-6 text-background hover:bg-foreground/90" asChild>
                <a href={googleForms.waitlist} target="_blank" rel="noreferrer">
                  {messages.waitlist.submit}
                </a>
              </Button>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
              {messages.waitlist.note}
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-100/90 p-6 text-sm text-neutral-700">
            <p className="text-xs uppercase tracking-[0.32em] text-neutral-400">{messages.waitlist.thankYou.eyebrow}</p>
            <p className="mt-4 font-heading text-2xl text-foreground">{messages.waitlist.thankYou.title}</p>
            <p className="mt-3 leading-7">{messages.waitlist.thankYou.description}</p>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}
