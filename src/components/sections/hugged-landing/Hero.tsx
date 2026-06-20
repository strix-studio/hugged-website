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
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/55 px-6 py-10 shadow-[0_30px_90px_rgba(17,17,17,0.06)] backdrop-blur-sm md:px-10 md:py-14 lg:px-14 lg:py-16 dark:border-white/10 dark:bg-white/5">
        <MotionOrb tone="coral" className="left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3" />
        <MotionOrb tone="mint" className="bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3" />
        <CoralBlob className="absolute left-[55%] top-[-12%] h-[140%] w-full opacity-70 lg:left-[48%]" />
        
        {/* Subtle HUGGED gradient glow using Coral Hug and Spearmint */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,111,97,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(97,212,196,0.12)_0%,transparent_70%)] blur-3xl" />

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <Reveal className="relative z-10 max-w-3xl">
            <SectionHeading
              eyebrow={messages.hero.eyebrow}
              title={messages.hero.headline}
              description={messages.hero.description}
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                className="h-12 rounded-full bg-foreground px-6 text-background shadow-[0_16px_42px_rgba(17,17,17,0.12)] hover:bg-foreground/90 font-medium cursor-pointer"
                onClick={() => onNavigate("waitlist")}
              >
                {messages.hero.primaryCta}
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-border/80 bg-white/80 px-6 text-foreground hover:bg-white cursor-pointer dark:bg-neutral-800/80 dark:hover:bg-neutral-700"
                onClick={() => onNavigate("how-hugged-helps")}
              >
                {messages.hero.secondaryCta}
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              {((messages.hero as any).trust || ["Expert-led", "Homeschool support", "Parent community"]).map((badge: string) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mint-soft text-mint dark:bg-mint-soft/10">
                    <svg className="h-3 w-3 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3 dark:text-neutral-400">
              {messages.hero.badges.map((badge: string) => (
                <span
                  key={badge}
                  className="rounded-full border border-neutral-200 bg-white/70 px-4 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative z-10">
            <div className="relative mx-auto aspect-4/5 max-w-130 rounded-[2.5rem] border border-white/80 bg-white/60 p-4 shadow-[0_45px_100px_rgba(44,43,40,0.12),0_15px_35px_rgba(44,43,40,0.04)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_60px_120px_rgba(44,43,40,0.18),0_20px_50px_rgba(255,111,97,0.08)] dark:border-white/10 dark:bg-neutral-900/60">
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
              <div className="absolute left-6 top-8 rounded-full bg-white/85 dark:bg-neutral-900/85 px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-[0_10px_30px_rgba(17,17,17,0.08)] backdrop-blur-sm">
                emotional safety first
              </div>
              <div className="absolute right-6 top-20 rounded-[1.5rem] bg-white/90 dark:bg-neutral-900/90 p-4 shadow-[0_10px_34px_rgba(17,17,17,0.08)] backdrop-blur-sm border border-white/40 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-full bg-coral-soft text-coral dark:bg-coral-soft/20">
                    <MessageCircleMore className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-neutral-400">
                      Today
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
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
                    className="rounded-[1.5rem] bg-white/90 dark:bg-neutral-900/90 p-3 text-center shadow-[0_12px_32px_rgba(17,17,17,0.08)] border border-white/40 dark:border-white/5"
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
