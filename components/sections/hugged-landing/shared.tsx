import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export const googleForms = {
  waitlist: "https://forms.gle/replace-with-waitlist-form",
  homeschooling: "https://forms.gle/replace-with-homeschool-form",
  expert: "https://forms.gle/replace-with-expert-form",
  partner: "https://forms.gle/replace-with-partner-form",
  webinar: "https://forms.gle/replace-with-webinar-form",
  contact: "https://forms.gle/replace-with-contact-form",
};

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={pageVariants}
      initial={reducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionFrame({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 px-6 py-12 md:px-8 md:py-16 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function MotionOrb({
  className,
  tone = "coral",
}: {
  className?: string;
  tone?: "coral" | "mint";
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        tone === "coral" ? "bg-coral/25" : "bg-mint/25",
        className
      )}
      animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    />
  );
}

export function scrollIntoSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}
