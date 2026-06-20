
import { SectionFrame } from "./shared";

export function FooterSection() {

  return (
    <SectionFrame className="border-t border-slate-200/80 pt-10" id="footer">
      <div className="flex flex-col gap-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Hugged — a calm emotional operating system for motherhood.</p>
       
      </div>
    </SectionFrame>
  );
}
