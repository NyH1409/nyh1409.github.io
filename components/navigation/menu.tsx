import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { useIntl } from "react-intl";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400&display=swap');
  .nav-a { color: #525252; font-size: 12px; letter-spacing: 0.04em; transition: color 200ms; }
  .nav-a:hover { color: #D4D4D4; }
  .lang-btn { background: none; border: none; cursor: pointer; color: #525252; font-size: 11px; letter-spacing: 0.06em; transition: color 200ms; padding: 0; }
  .lang-btn:hover, .lang-btn.on { color: #D4D4D4; }
  .mobile-a { color: #525252; font-size: 13px; letter-spacing: 0.04em; transition: color 200ms; display: flex; align-items: center; gap: 16px; }
  .mobile-a:hover { color: #D4D4D4; }
`;

interface NavItem {
  id: string;
  label: string;
  link: string;
}

export function NavigationMenuSection({
  setLocale,
}: {
  setLocale: (lc: "en" | "fr") => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const isMobile = useMobile();

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!mounted) return null;

  const navItems: NavItem[] = [
    { id: "home", label: intl.formatMessage({ id: "home" }), link: "/" },
    {
      id: "experience",
      label: intl.formatMessage({ id: "experience" }),
      link: "/experience",
    },
    { id: "cv", label: intl.formatMessage({ id: "cv" }), link: "/resume" },
    {
      id: "actualité",
      label: intl.formatMessage({ id: "feed" }),
      link: "/feed",
    },
  ];

  return (
    <>
      <style>{css}</style>

      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0C0C0C] border-b border-[#1E1E1E] py-3"
            : "bg-transparent py-5",
        )}
        style={sans}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="no-underline" style={mono}>
            <span className="text-[13px] text-[#D4D4D4] tracking-tight">
              nhm.vagno
            </span>
          </a>

          {!isMobile && (
            <>
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-7">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.id}>
                      <a href={item.link} className="nav-a" style={sans}>
                        {item.label}
                      </a>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-[6px]" style={mono}>
                <button
                  onClick={() => setLocale("en")}
                  className={cn("lang-btn", intl.locale === "en" && "on")}
                >
                  EN
                </button>
                <span className="text-[#1E1E1E] select-none text-[11px]">
                  /
                </span>
                <button
                  onClick={() => setLocale("fr")}
                  className={cn("lang-btn", intl.locale === "fr" && "on")}
                  disabled
                >
                  FR
                </button>
              </div>
            </>
          )}

          {isMobile && (
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-[6px]" style={mono}>
                <button
                  onClick={() => setLocale("en")}
                  className={cn("lang-btn", intl.locale === "en" && "on")}
                >
                  EN
                </button>
                <span className="text-[#1E1E1E] select-none text-[11px]">
                  /
                </span>
                <button
                  onClick={() => setLocale("fr")}
                  className={cn("lang-btn", intl.locale === "fr" && "on")}
                  disabled
                >
                  FR
                </button>
              </div>

              {/* Burger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="flex flex-col gap-[5px] w-5"
              >
                <span
                  className="block h-px bg-[#525252] w-full transition-all duration-200"
                  style={{
                    transform: open ? "rotate(45deg) translateY(6px)" : "none",
                  }}
                />
                <span
                  className="block h-px bg-[#525252] w-full transition-all duration-200"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="block h-px bg-[#525252] transition-all duration-200"
                  style={{
                    width: open ? "100%" : "60%",
                    transform: open
                      ? "rotate(-45deg) translateY(-6px)"
                      : "none",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        {/* Mobile drawer */}
        {isMobile && (
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open ? "280px" : "0" }}
          >
            <nav className="px-6 pb-6 pt-5 border-t border-[#1E1E1E] space-y-4">
              {navItems.map((item, i) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="mobile-a"
                >
                  <span className="text-[10px] text-[#2A2A2A]" style={mono}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={sans}>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
