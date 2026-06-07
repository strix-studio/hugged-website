"use client";

import React from "react";
import type { LocaleMessages, SupportedLocale } from "./i18n";

export type LocaleContextValue = {
  locale: SupportedLocale;
  messages: LocaleMessages;
};

const LocaleContext = React.createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale: SupportedLocale;
  messages: LocaleMessages;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslations() {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error("useTranslations must be used within a LocaleProvider");
  }
  return context.messages;
}

export function useLocale() {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context.locale;
}
