"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ComposeNav } from "./hugged-landing/ComposeNav";
import { FooterSection } from "./hugged-landing/FooterSection";
import { Hero } from "./hugged-landing/Hero";
import { HowHuggedHelpsSection } from "./hugged-landing/HowHuggedHelpsSection";
import { FeaturesSection } from "./hugged-landing/FeaturesSection";
import { FAQSection } from "./hugged-landing/FAQSection";
import { scrollIntoSection } from "./hugged-landing/shared";
import { WaitlistSection } from "./hugged-landing/WaitlistSection";
import { FinalCtaSection } from "./hugged-landing/FinalCtaSection";

export function HuggedLanding() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const onNavigate = (id: string) => {
    const element = document.getElementById(id);

    if (lenisRef.current && element) {
      lenisRef.current.scrollTo(element, { offset: -90 });
      return;
    }

    scrollIntoSection(id);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-168 bg-[radial-gradient(circle_at_50%_0%,rgba(255,122,107,0.12),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(99,199,178,0.12),transparent_36%)]" />
      <ComposeNav onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        <HowHuggedHelpsSection />
        <WaitlistSection />
        <FeaturesSection />
        <FAQSection />
        <FinalCtaSection/>

      </main>
      <FooterSection />
    </div>
  );
}
