import type { Metadata } from "next";
import { HuggedLanding } from "@/components/sections/hugged-landing";
import { LocaleProvider } from "@/lib/locale-context";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getDictionary(defaultLocale);

  return {
    title: messages.hero.headline,
    description: messages.hero.description,
  };
}

export default async function HomePage() {
  const messages = await getDictionary(defaultLocale);

  return (
    <LocaleProvider locale={defaultLocale} messages={messages}>
      <HuggedLanding />
    </LocaleProvider>
  );
}
