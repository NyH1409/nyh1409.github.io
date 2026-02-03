import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Moon,
  Sun,
  Menu,
  Home,
  BriefcaseBusiness,
  Contact,
  Code,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useIntl } from "react-intl";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils"; // Utilitaire standard shadcn

export function NavigationMenuSection({
  setLocale,
}: {
  setLocale: (lc: "en" | "fr") => void;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const intl = useIntl();
  const isMobile = useMobile();

  // Gestion de l'effet de scroll pour le header
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  const navItems = [
    {
      id: "home",
      label: intl.formatMessage({ id: "home" }),
      icon: <Home size={18} />,
      link: "#home",
    },
    {
      id: "works",
      label: intl.formatMessage({ id: "works" }),
      icon: <BriefcaseBusiness size={18} />,
      link: "#works",
    },
    {
      id: "portfolio",
      label: intl.formatMessage({ id: "portefolio" }),
      icon: <Code size={18} />,
      link: "#portfolio",
    },
    {
      id: "contacts",
      label: intl.formatMessage({ id: "contacts" }),
      icon: <Contact size={18} />,
      link: "#contacts",
    },
  ];

  const Logo = () => (
    <div className="relative flex items-center gap-3">
      <img
        className="w-9 h-9 lg:w-10 lg:h-10 transition-transform hover:rotate-12"
        src="logo.png"
        alt="Logo"
      />
      <strong className="text-lg lg:text-xl font-black tracking-tighter">
        #NYHASINA
      </strong>
    </div>
  );

  const ThemeToggle = () => (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full hover:bg-primary/10 transition-colors"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-slate-700" />
      )}
    </Button>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3 lg:px-8",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/40 py-2"
          : "bg-transparent",
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
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-3">
              <div className="flex bg-muted/50 p-1 rounded-full border border-border/50">
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "px-2 py-1 rounded-full text-sm transition-all",
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
                    "px-2 py-1 rounded-full text-sm transition-all",
                    intl.locale === "fr"
                      ? "bg-background shadow-sm"
                      : "opacity-50 hover:opacity-100",
                  )}
                >
                  🇫🇷
                </button>
              </div>
              <ThemeToggle />
            </div>
          </>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-md border-border/40"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] flex flex-col">
                <SheetTitle className="text-left mb-4">Navigation</SheetTitle>
                <nav className="flex-1 mt-4">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-4 w-full p-4 rounded-xl text-lg font-medium hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                        >
                          <span className="text-primary">{item.icon}</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-auto pt-6 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    {intl.formatMessage({ id: "language" })}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={intl.locale === "en" ? "default" : "outline"}
                      onClick={() => {
                        setLocale("en");
                        setIsMenuOpen(false);
                      }}
                      className="w-full gap-2"
                    >
                      🇺🇸 English
                    </Button>
                    <Button
                      variant={intl.locale === "fr" ? "default" : "outline"}
                      onClick={() => {
                        setLocale("fr");
                        setIsMenuOpen(false);
                      }}
                      className="w-full gap-2"
                    >
                      🇫🇷 Français
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
}
