"use client";

import { ContactSection } from "@/components/contact/contact";
import { HeroSection } from "@/components/hero/hero";
import { NavigationMenuSection } from "@/components/navigation/menu";
import { ServicesSection } from "@/components/services/services";
import { SkillsSection } from "@/components/skills/skills";
import { AboutAndSkillsSection } from "@/components/work/work";
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as Locale);
  };

  return (
    <div>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <NavigationMenuSection setLocale={setLocale} />
        <HeroSection />
      </IntlProvider>
    </div>
  );
}
