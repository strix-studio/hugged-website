import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";

export function FAQSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="faq">
      <Reveal>
        <SectionHeading
          eyebrow="FAQs"
          title={messages.faq.title}
          description={messages.faq.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-4">
        <Accordion type="multiple" className="space-y-4">
          {messages.faq.items.map((item: { question: string; answer: string }) => (
            <Reveal key={item.question}>
              <AccordionItem value={item.question} className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-4 shadow-sm">
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-sm leading-7 text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </SectionFrame>
  );
}
