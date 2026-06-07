"use client";

import Image from "next/image";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useTranslations } from "@/lib/locale-context";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { CoralBlob, illustrationSrc } from "@/components/graphics/hugged-graphics";
import { SectionFrame, Reveal, MotionOrb } from "./shared";

export function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  const messages = useTranslations();

  return (
    <SectionFrame id="hero" className="overflow-hidden pt-8 md:pt-12 lg:pt-16">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/55 px-6 py-10 shadow-[0_30px_90px_rgba(17,17,17,0.06)] backdrop-blur-sm md:px-10 md:py-14 lg:px-14 lg:py-16">
        <MotionOrb tone="coral" className="left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3" />
        <MotionOrb tone="mint" className="bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3" />
        <CoralBlob className="absolute left-[55%] top-[-12%] h-[140%] w-full opacity-70 lg:left-[48%]" />

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <Reveal className="relative z-10 max-w-2xl">
            <SectionHeading
              eyebrow={messages.hero.eyebrow}
              title={messages.hero.headline}
              description={messages.hero.description}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="h-12 rounded-full bg-foreground px-6 text-background shadow-[0_16px_42px_rgba(17,17,17,0.12)] hover:bg-foreground/90"
                onClick={() => onNavigate("waitlist")}
              >
                {messages.hero.primaryCta}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-border/80 bg-white/80 px-6 text-foreground hover:bg-white"
                onClick={() => onNavigate("ecosystem")}
              >
                {messages.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3">
              {messages.hero.badges.map((badge: string) => (
                <span
                  key={badge}
                  className="rounded-full border border-neutral-200 bg-white/70 px-4 py-2 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative z-10">
            <div className="relative mx-auto aspect-4/5 max-w-130 rounded-[2.5rem] border border-white/80 bg-white/60 p-4 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-sm">
              <MotionOrb tone="coral" className="left-8 top-8 h-40 w-40" />
              <MotionOrb tone="mint" className="bottom-8 right-6 h-48 w-48" />
              <div className="absolute inset-4 overflow-hidden rounded-[2rem] bg-neutral-100/90">
                <Image
                  src={illustrationSrc("hero")}
                  alt="Layered mother and child composition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute left-6 top-8 rounded-full bg-white/85 px-4 py-2 text-xs font-medium text-neutral-700 shadow-[0_10px_30px_rgba(17,17,17,0.08)] backdrop-blur-sm">
                emotional safety first
              </div>
              <div className="absolute right-6 top-20 rounded-[1.5rem] bg-white/90 p-4 shadow-[0_10px_34px_rgba(17,17,17,0.08)] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-full bg-coral-soft text-coral">
                    <MessageCircleMore className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-neutral-400">
                      Today
                    </p>
                    <p className="text-sm text-neutral-700">
                      A space to vent without judgement
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  ["Venting", "92%"],
                  ["Comfort", "4.9"],
                  ["Groups", "18"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] bg-white/90 p-3 text-center shadow-[0_12px_32px_rgba(17,17,17,0.08)]"
                  >
                    <p className="text-xs text-neutral-400">{label}</p>
                    <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}
