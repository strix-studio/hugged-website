import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "@/lib/locale-context";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { cn } from "@/lib/utils";

export function SocialProofSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="social-proof">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Social proof"
            title={messages.socialProof.title}
            description={messages.socialProof.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {messages.socialProof.items.map((item: { quote: string; name: string; role: string; highlight: string }, index: number) => (
              <Card
                key={item.name}
                className={cn(
                  "rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)] backdrop-blur-sm",
                  index === 0 && "md:translate-y-4",
                  index === 2 && "md:-translate-y-4"
                )}
              >
                <CardContent className="space-y-5 p-6">
                  <p className="text-lg leading-8 text-foreground">“{item.quote}”</p>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p>{item.role}</p>
                    <p className="text-coral">{item.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
