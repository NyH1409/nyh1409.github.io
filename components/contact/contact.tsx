import { useIntl } from "react-intl";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400&display=swap');
  .footer-a { color: #A8A8A5; font-size: 12px; letter-spacing: 0.03em; text-decoration: none; transition: color 200ms; }
  .footer-a:hover { color: #1C1C1A; }
  .social-sm { color: #D4D4D1; transition: color 200ms; }
  .social-sm:hover { color: #1C1C1A; }
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
    { id: "feed", label: intl.formatMessage({ id: "feed" }), link: "#feed" },
  ];

  const socials = [
    { href: "https://github.com/nvagno", label: "GitHub", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/nyy_has/",
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      href: "https://www.facebook.com/nyhasina.vagno",
      label: "Facebook",
      icon: <FaFacebook />,
    },
  ];

  return (
    <>
      <style>{css}</style>

      <footer
        id="contacts"
        className="bg-[#F7F7F5] border-t border-[#E5E4E0]"
        style={sans}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
          {/* Main row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Identity */}
            <div>
              <p className="text-[13px] text-[#1C1C1A] mb-1" style={mono}>
                nhm.vagno
              </p>
              <p
                className="text-[11px] text-[#A8A8A5] leading-relaxed mb-4"
                style={sans}
              >
                {intl.formatMessage({ id: "engineer" })}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p
                className="text-[10px] text-[#A8A8A5] tracking-[0.08em] uppercase mb-4"
                style={mono}
              >
                {intl.formatMessage({ id: "links" })}
              </p>
              <nav className="flex flex-col gap-3">
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
            </div>

            {/* Follow */}
            <div>
              <p
                className="text-[10px] text-[#A8A8A5] tracking-[0.08em] uppercase mb-4"
                style={mono}
              >
                {intl.formatMessage({ id: "follow" })}
              </p>
              <div className="flex items-center gap-4 text-[16px]">
                {socials.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-sm"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#E5E4E0] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-[#A8A8A5]" style={mono}>
              © {new Date().getFullYear()} Ny Hasina M. VAGNO —{" "}
              {intl.formatMessage({ id: "reserved" })}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
