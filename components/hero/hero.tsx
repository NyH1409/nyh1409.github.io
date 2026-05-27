import { useIntl } from "react-intl";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400&display=swap');
  .social-a { color: #3A3A3A; transition: color 200ms; }
  .social-a:hover { color: #D4D4D4; }
`;

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function HeroSection() {
  const intl = useIntl();

  const socials: SocialLink[] = [
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

      <section
        id="home"
        className="flex items-center bg-[#0C0C0C]"
        style={sans}
      >
        <div className="max-w-6xl mx-auto w-full px-6 md:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* ── Photo ───────────────────────────────── */}
            <div className="flex justify-center md:justify-start order-1 md:order-1">
              <img
                src="banner.png"
                alt="Ny Hasina M. VAGNO"
                className="w-48 md:w-64 grayscale opacity-80"
              />
            </div>

            {/* ── Text ────────────────────────────────── */}
            <div className="order-2 md:order-2 space-y-8">
              {/* Name + role */}
              <div className="space-y-2">
                <p
                  className="text-[11px] text-[#525252] tracking-[0.08em] uppercase mb-3"
                  style={mono}
                >
                  {intl.formatMessage({ id: "hello" })}
                </p>

                <h1
                  className="text-3xl md:text-4xl font-normal text-[#D4D4D4] leading-tight"
                  style={sans}
                >
                  Ny Hasina M. VAGNO
                </h1>

                <p
                  className="text-[12px] text-[#525252] tracking-[0.06em]"
                  style={mono}
                >
                  {intl.formatMessage({ id: "engineer" })}
                </p>
              </div>

              {/* Separator */}
              <div className="border-t border-[#1E1E1E]" />

              {/* Bio */}
              <div className="space-y-3">
                <p
                  className="text-[13px] font-light leading-relaxed text-[#525252]"
                  style={sans}
                >
                  {intl.formatMessage({ id: "description" })}
                </p>
                <p
                  className="text-[13px] font-light leading-relaxed text-[#525252]"
                  style={sans}
                >
                  {intl.formatMessage({ id: "speciality" })}
                </p>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5 text-[15px]">
                {socials.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-a"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
