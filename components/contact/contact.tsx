import { useIntl } from "react-intl";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400&display=swap');
  .footer-a { color: #3A3A3A; font-size: 12px; letter-spacing: 0.04em; transition: color 200ms; }
  .footer-a:hover { color: #D4D4D4; }
`;

interface NavItem {
  id: string;
  label: string;
  link: string;
}

export function ContactSection() {
  const intl = useIntl();

  const navItems: NavItem[] = [
    { id: "home", label: intl.formatMessage({ id: "home" }), link: "#home" },
    {
      id: "experience",
      label: intl.formatMessage({ id: "experience" }),
      link: "#experience",
    },
    { id: "cv", label: intl.formatMessage({ id: "cv" }), link: "#cv" },
    {
      id: "actualité",
      label: intl.formatMessage({ id: "feed" }),
      link: "#feed",
    },
  ];

  return (
    <>
      <style>{css}</style>

      <footer
        id="contacts"
        className="bg-[#0C0C0C] border-t border-[#1E1E1E]"
        style={sans}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Wordmark */}
            <span className="text-[13px] text-[#3A3A3A]" style={mono}>
              nhm.vagno
            </span>

            {/* Nav */}
            <nav className="flex flex-wrap gap-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="footer-a"
                  style={sans}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-[11px] text-[#3A3A3A]" style={mono}>
              © {new Date().getFullYear()} —{" "}
              {intl.formatMessage({ id: "reserved" })}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
