import { SectionHeading } from "@/components/shared/section-heading";
import { SectionFrame } from "./shared";
import { useTranslations } from "@/lib/locale-context";

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfG0I2FPjErj2A6F0jHf2XCEM1T2eRnQw2ptnd4V68sTFRFrA/viewform?embedded=true";

export function WaitlistSection() {
  const messages = useTranslations();

  return (
    <SectionFrame
      id="waitlist"
      className="bg-[#f8f4e3] dark:bg-[#181715] pt-12 pb-16 md:pt-16 md:pb-24"
    >
      <div
        className="
          rounded-[2.5rem]
          border
          border-border/80
          bg-white/60
          p-6
          shadow-[0_30px_90px_rgba(44,43,40,0.08)]
          backdrop-blur

          md:p-10
          lg:p-12

          dark:border-white/5
          dark:bg-neutral-900/60
        "
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left Column - Benefits & Steps */}
          <div className="space-y-8">
            <SectionHeading
              eyebrow={messages.waitlist.eyebrow}
              title={messages.waitlist.title}
              description={messages.waitlist.description}
            />

            {/* Benefits */}
            <div className="space-y-6">
              {((messages.waitlist as any).benefits || []).map((benefit: { title: string; description: string }) => (
                <div key={benefit.title} className="flex gap-4 items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint dark:bg-mint-soft/10 mt-1 shadow-sm">
                    <svg className="h-3.5 w-3.5 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-foreground tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300 leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs leading-6 text-neutral-500 dark:text-neutral-400">
              {messages.waitlist.note}
            </p>

            {/* Onboarding Timeline Card */}
            <div
              className="
                rounded-[2rem]
                border
                border-border/50
                bg-surface/50
                p-6
                shadow-[0_8px_30px_rgba(0,0,0,0.01)]

                dark:border-white/5
                dark:bg-neutral-900/50
              "
            >
              <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-neutral-500 dark:text-neutral-400 mb-5">
                {((messages.waitlist as any).timeline?.title || "What happens after signup?")}
              </h4>

              <div className="space-y-5">
                {((messages.waitlist as any).timeline?.steps || []).map((step: { step: string; title: string; description: string }) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <span className="grid size-7 place-items-center rounded-full bg-coral-soft text-coral dark:bg-coral-soft/20 text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                      {step.step}
                    </span>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground tracking-tight">
                        {step.title}
                      </h5>
                      <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400 leading-5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Embedded Google Form */}
          <div
            className="
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white
              bg-white
              shadow-[0_30px_70px_rgba(255,111,97,0.1),0_10px_30px_rgba(44,43,40,0.04)]
              transition-all
              duration-500
              ease-out
              hover:scale-[1.01]
              hover:shadow-[0_40px_80px_rgba(255,111,97,0.15),0_15px_40px_rgba(44,43,40,0.06)]

              dark:border-white/10
              dark:bg-neutral-950
            "
          >
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Waitlist Form"
              className="h-[840px] w-full"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}