import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/locale-context";
import { Reveal, SectionFrame, googleForms } from "./shared";

export function FinalCtaSection() {
  const messages = useTranslations();

  return (
    <SectionFrame id="final-cta" className="py-12 md:py-16 lg:py-24">
      <div
        className="
          relative overflow-hidden rounded-[3rem]
          border border-white/20 dark:border-white/5
          bg-gradient-to-br from-[#ff6f61] via-[#61d4c4] to-[#d4daff]
          dark:from-[#8b2b22] dark:via-[#2b6d61] dark:to-[#3e345e]
          p-8 sm:p-12 lg:p-16
          shadow-[0_40px_100px_rgba(255,111,97,0.2)]
          dark:shadow-[0_40px_100px_rgba(17,17,17,0.5)]
        "
      >
        {/* Subtle blur & glow effects */}
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/25 dark:bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-white/20 dark:bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid gap-8 md:gap-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-[#2c2b28]/85 dark:text-[#f8f4e3]/85">
                Ready for more?
              </p>
              <h2 className="font-heading text-3xl leading-[1.1] font-bold tracking-tight text-[#2c2b28] dark:text-white md:text-5xl lg:text-6xl">
                {messages.finalCta.headline}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#2c2b28]/90 dark:text-[#f8f4e3]/90 md:text-base font-medium">
                {messages.finalCta.description}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-6">
              {/* Social Proof */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2c2b28]/70 dark:text-[#f8f4e3]/70">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#ff6f61] dark:bg-[#ff8579] animate-ping shrink-0" />
                <span>
                  {((messages.finalCta as any).socialProof || "Join parents preparing for a calmer parenting journey.")}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="
                    h-14 rounded-full px-8 shadow-[0_12px_32px_rgba(44,43,40,0.18)]
                    bg-[#2c2b28] text-white
                    hover:bg-[#2c2b28]/95
                    hover:scale-[1.03]
                    transition-all duration-300 font-semibold text-base
                    cursor-pointer

                    dark:bg-[#f8f4e3]
                    dark:text-[#181715]
                    dark:hover:bg-white
                  "
                >
                  <a
                    href={googleForms.waitlist}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {messages.finalCta.primaryCta}
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="
                    h-14 rounded-full px-8
                    border-[#2c2b28]/30
                    text-[#2c2b28]
                    hover:bg-white/30
                    hover:scale-[1.03]
                    transition-all duration-300 font-semibold text-base
                    cursor-pointer

                    dark:border-[#f8f4e3]/30
                    dark:text-[#f8f4e3]
                    dark:hover:bg-white/10
                  "
                >
                  <a
                    href={googleForms.contact}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {messages.finalCta.secondaryCta}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionFrame>
  );
}