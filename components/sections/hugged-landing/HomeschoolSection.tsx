import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowOrb, illustrationSrc } from "@/components/graphics/hugged-graphics";
import { SectionFrame, Reveal, googleForms } from "./shared";

export function HomeschoolSection() {
  return (
    <SectionFrame id="homeschooling">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Homeschooling community"
            title="A calm homeschool hub built for families who want learning without pressure."
            description="Learning groups, worksheets, activities, parent collaboration, and curriculum support — all organized around the needs of modern homeschooling families."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Learning groups", "Find parent-led groups for shared homeschooling journeys."],
              ["Worksheets", "Thoughtful activity sheets designed for early development."],
              ["Activities", "Playful routines that feel like learning and connection."],
              ["Parent collaboration", "Share ideas, plans, and gentle support with other families."],
            ].map(([title, text]) => (
              <Card
                key={title}
                className="rounded-[1.75rem] border-white/80 bg-white/72 shadow-[0_12px_30px_rgba(17,17,17,0.05)] backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="font-heading text-lg tracking-tight">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-7 text-neutral-600">
                    {text}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              className="h-12 rounded-full bg-foreground px-6 text-background shadow-[0_16px_42px_rgba(17,17,17,0.12)] hover:bg-foreground/90"
              asChild
            >
              <a href={googleForms.homeschooling} target="_blank" rel="noreferrer">
                Join Homeschooling Interest List
              </a>
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-full border-border/80 bg-white/80 px-6 text-foreground hover:bg-white"
              asChild
            >
              <a href={googleForms.contact} target="_blank" rel="noreferrer">
                Learn about curriculum support
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto max-w-155 rounded-[2.5rem] border border-white/80 bg-white/65 p-5 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-sm">
            <GlowOrb tone="mint" className="right-0 top-0 h-60 w-60" />
            <GlowOrb tone="coral" className="bottom-0 left-0 h-60 w-60" />
            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-4 rounded-[2rem] bg-white/85 p-4 ring-1 ring-foreground/10">
                <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,122,107,0.12),rgba(255,255,255,0.8))] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">
                    Homeschooling hub
                  </p>
                  <div className="mt-4 grid gap-3">
                    {[
                      "Activity planning",
                      "Shared lesson rhythms",
                      "Calm learning modules",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-3 shadow-sm"
                      >
                        <span className="grid size-7 place-items-center rounded-full bg-coral-soft text-xs font-semibold text-coral">
                          0{index + 1}
                        </span>
                        <span className="text-sm text-neutral-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white p-4 ring-1 ring-foreground/10">
                  <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">
                    Parent collaboration
                  </p>
                  <p className="mt-3 text-lg font-heading leading-tight text-foreground">
                    Share plans, swap worksheets, and design the week together.
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    The homeschooling experience should feel shared, not solitary.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-72 overflow-hidden rounded-[2rem] bg-neutral-100/80 ring-1 ring-foreground/10">
                  <Image
                    src={illustrationSrc("soft")}
                    alt="Homeschooling collage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Card className="rounded-[1.75rem] border-white/80 bg-white/80">
                    <CardHeader>
                      <CardTitle className="font-heading text-lg">
                        Worksheets
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-7 text-neutral-600">
                        Simple, thoughtful templates for calm learning moments.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="rounded-[1.75rem] border-white/80 bg-white/80">
                    <CardHeader>
                      <CardTitle className="font-heading text-lg">
                        Activities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-7 text-neutral-600">
                        Daily learning ideas that feel like play, not chores.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionFrame>
  );
}
