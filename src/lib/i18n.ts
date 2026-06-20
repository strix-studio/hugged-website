export const supportedLocales = ["en", "hi"] as const;
export type SupportedLocale = (typeof supportedLocales)[number];
export const defaultLocale: SupportedLocale = "en";

export type LocaleMessages = typeof import("../locales/en.json");

export function isSupportedLocale(locale: string): locale is SupportedLocale {
    return supportedLocales.includes(locale as SupportedLocale);
}

export async function getDictionary(locale: SupportedLocale): Promise<LocaleMessages> {
    switch (locale) {
        case "en":
            return (await import("../locales/en.json")).default;
        case "hi":
            return (await import("../locales/hi.json")).default;
        default:
            return (await import("../locales/en.json")).default;
    }
}
