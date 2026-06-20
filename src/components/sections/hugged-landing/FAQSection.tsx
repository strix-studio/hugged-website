import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";

export function FAQSection() {
  const messages = useTranslations();

  // Select the 8 most critical questions in a structured order
  const importantIndices = [0, 1, 9, 11, 4, 3, 5, 6];
  const faqItems = importantIndices
    .map((index) => messages.faq.items[index])
    .filter(Boolean);

  return (
    <SectionFrame id="faq" className="py-12 md:py-16 lg:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="FAQs"
          title={messages.faq.title}
          description={messages.faq.description}
        />
      </Reveal>
      <div className="mt-10 grid gap-4 max-w-4xl mx-auto">
        <Accordion type="multiple" className="space-y-5">
          {faqItems.map((item: { question: string; answer: string }) => (
            <Reveal key={item.question}>
              <AccordionItem
                value={item.question}
                className="rounded-[2rem] border border-border/80 dark:border-white/5 bg-white/75 dark:bg-neutral-900/75 px-6 py-3 shadow-[0_4px_20px_rgba(44,43,40,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(44,43,40,0.04)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground dark:text-neutral-100 hover:text-coral dark:hover:text-coral transition-colors duration-250 py-3 cursor-pointer">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-2 text-sm leading-7 text-neutral-700 dark:text-neutral-300 border-t border-border/50 dark:border-white/5 mt-3">
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
