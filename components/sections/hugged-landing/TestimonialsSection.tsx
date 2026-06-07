import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";

export function TestimonialsSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="testimonials">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title={messages.testimonials.title}
            description={messages.testimonials.description}
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {messages.testimonials.items.map((card: { name: string; role: string; quote: string }) => (
            <Reveal key={card.name}>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm">
                <p className="text-base leading-7 text-slate-700">“{card.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-slate-100" />
                  <div>
                    <p className="font-semibold text-slate-900">{card.name}</p>
                    <p className="text-sm text-slate-500">{card.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
