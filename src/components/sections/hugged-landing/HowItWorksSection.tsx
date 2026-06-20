import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { CalendarHeart, Home, Sparkles, Users } from "lucide-react";

const howItWorksSteps = [
  {
    number: "1",
    icon: Home,
    title: "Start with where you are",
    description: "Choose the support path that feels least overwhelming and easiest to engage with.",
  },
  {
    number: "2",
    icon: Users,
    title: "Join a calm circle",
    description: "Connect with parents, experts, or learning groups based on your family's needs.",
  },
  {
    number: "3",
    icon: Sparkles,
    title: "Use guided activities",
    description: "Follow gentle tools, worksheets, and small daily practices for steady progress.",
  },
  {
    number: "4",
    icon: CalendarHeart,
    title: "Keep the rhythm",
    description: "Stay in a supportive loop with events, check-ins, and flexible pacing.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionFrame id="how-it-works">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/60 px-6 py-10 shadow-[0_18px_50px_rgba(17,17,17,0.05)] backdrop-blur-sm md:px-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Join, connect, learn, and grow without the noise."
              description="The product flow mirrors the emotional flow: start where you are, find the right circle, and move at a pace that feels humane."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <svg
                className="absolute inset-x-8 top-8 hidden h-[calc(100%-4rem)] w-[calc(100%-4rem)] lg:block"
                viewBox="0 0 840 260"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M36 130C162 32 250 32 336 116c58 57 103 86 176 86 97 0 138-54 292-160"
                  stroke="rgba(255,122,107,0.32)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="12 16"
                />
              </svg>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {howItWorksSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <Card
                      key={step.number}
                      className={"rounded-[2rem] border-white/80 bg-white/80 shadow-[0_16px_42px_rgba(17,17,17,0.05)] transition-transform duration-300 hover:-translate-y-1" +
                        (index % 2 === 1 ? " md:translate-y-6" : "")}
                    >
                      <CardHeader>
                        <div className="mb-4 flex items-center justify-between">
                          <Badge className="rounded-full bg-coral-soft px-3 py-1 text-foreground hover:bg-coral-soft">
                            {step.number}
                          </Badge>
                          <Icon className="size-5 text-coral" />
                        </div>
                        <CardTitle className="font-heading text-xl tracking-tight">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-7 text-neutral-600">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
