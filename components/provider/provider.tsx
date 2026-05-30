"use client";

import { ContactSection } from "@/components/contact/contact";
import { NavigationMenuSection } from "@/components/navigation/menu";
import en_message from "@/public/dictionnaries/en.json";
import fr_message from "@/public/dictionnaries/fr.json";
import { useState } from "react";
import { IntlProvider } from "react-intl";

type Messages = {};
type Locale = "en" | "fr";

const messages: Record<Locale, Messages> = {
  en: en_message,
  fr: fr_message,
};

export default function TranslationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <div>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <NavigationMenuSection setLocale={setLocale} />
        {children}
        <ContactSection />
      </IntlProvider>
    </div>
  );
}
