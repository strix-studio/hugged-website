import { useTranslations } from "@/lib/locale-context";
import { SectionFrame, scrollIntoSection } from "./shared";

export function FooterSection() {
  const messages = useTranslations();

  return (
    <SectionFrame className="border-t border-slate-200/80 pt-10" id="footer">
      <div className="flex flex-col gap-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Hugged — a calm emotional operating system for motherhood.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-500">
          {messages.footer.links.map((link: { label: string; id: string }) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollIntoSection(link.id)}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
