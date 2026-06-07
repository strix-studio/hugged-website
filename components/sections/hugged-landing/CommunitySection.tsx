import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame, Reveal } from "./shared";
import { cn } from "@/lib/utils";

export function CommunitySection() {
  return (
    <SectionFrame id="community">
      <div className="grid gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Community"
            title="Village communities, local parent groups, and anonymous support."
            description="Hugged helps parents find connection in a way that feels safe, supportive, and built for real life."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid gap-4">
              {[
                [
                  "Village Communities",
                  "Small circles of parents who share routines, resources, and emotional support.",
                ],
                [
                  "Family Communities",
                  "Broader groups for caregivers, homeschooling families, and moms seeking calm connection.",
                ],
                [
                  "Local Parent Groups",
                  "Discover nearby parents through moderated meetups and conversation spaces.",
                ],
                [
                  "Anonymous Support",
                  "Speak freely in moderated rooms without needing to reveal your name.",
                ],
              ].map(([title, description]) => (
                <Card
                  key={title}
                  className="rounded-[2rem] border-white/80 bg-white/75 shadow-[0_14px_40px_rgba(17,17,17,0.05)]"
                >
                  <CardContent className="p-6">
                    <CardTitle className="font-heading text-xl tracking-tight">
                      {title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-sm leading-7 text-neutral-600">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4">
              {[
                "I finally feel heard without worrying about being judged.",
                "The anonymous rooms let me vent without always needing a solution.",
                "This community feels like a soft room, not a pressure cooker.",
              ].map((message, index) => (
                <Card
                  key={message}
                  className={cn(
                    "rounded-[2rem] border-white/80 bg-white/80 p-6 shadow-[0_14px_40px_rgba(17,17,17,0.05)]",
                    index === 0 && "translate-y-2",
                    index === 2 && "-translate-y-2"
                  )}
                >
                  <p className="text-lg leading-8 text-foreground">“{message}”</p>
                </Card>
              ))}
              <div className="rounded-[2rem] border border-neutral-200 bg-white/80 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
                  Community mockups
                </p>
                <div className="mt-4 grid gap-3">
                  {[
                    "Discussion board for new parents",
                    "Local meetup calendar",
                    "Homeschooling resource exchange",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] bg-neutral-100 p-4 text-sm text-neutral-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
