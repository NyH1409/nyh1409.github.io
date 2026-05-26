import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useIntl } from "react-intl";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils"; // Utilitaire standard shadcn

export function NavigationMenuSection({
  setLocale,
}: {
  setLocale: (lc: "en" | "fr") => void;
}) {
  const [mounted, setMounted] = useState(false);
  const intl = useIntl();
  const isMobile = useMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    {
      id: "home",
      label: intl.formatMessage({ id: "home" }),
      link: "#home",
    },
    {
      id: "experience",
      label: intl.formatMessage({ id: "experience" }),
      link: "#experience",
    },
    {
      id: "cv",
      label: intl.formatMessage({ id: "cv" }),
      link: "#cv",
    },
    {
      id: "actualité",
      label: intl.formatMessage({ id: "feed" }),
      link: "#feed",
    },
  ];

  const Logo = () => (
    <div className="relative flex items-center gap-3 text-white font-bold">
      Ny Hasina VAGNO
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-6 lg:px-8 bg-black",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="flex gap-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <a
                      href={item.link}
                      className="px-4 py-2 text-sm font-medium text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <div className="flex">
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "px-2 py-1 text-sm transition-all",
                    intl.locale === "en"
                      ? "bg-background shadow-sm"
                      : "opacity-50 hover:opacity-100",
                  )}
                >
                  🇺🇸
                </button>
                <button
                  onClick={() => setLocale("fr")}
                  className={cn(
                    "px-2 py-1 text-sm transition-all",
                    intl.locale === "fr"
                      ? "bg-background shadow-sm"
                      : "opacity-50 hover:opacity-100",
                  )}
                >
                  🇫🇷
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
