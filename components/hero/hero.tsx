import { useIntl } from "react-intl";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const sans = { fontFamily: "'IBM Plex Sans', sans-serif" } as const;
const mono = { fontFamily: "'IBM Plex Mono', monospace" } as const;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=IBM+Plex+Sans:wght@300;400&display=swap');
  .social-a { color: #A8A8A5; transition: color 200ms; }
  .social-a:hover { color: #1C1C1A; }
  .project-card {
    border: 1px solid #E5E4E0;
    padding: 16px;
    background: #fff;
    transition: border-color 200ms;
  }
  .project-card:hover { border-color: #A8A8A5; }
`;

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface StatItem {
  value: string;
  labelId: string;
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

  const stats: StatItem[] = [
    { value: "3", labelId: "xp_year" },
    { value: "10", labelId: "xp_projects" },
    { value: "5", labelId: "xp_client" },
    { value: "24/7", labelId: "xp_support" },
  ];

  const comments: string[] = [
    intl.formatMessage({ id: "comment1" }),
    intl.formatMessage({ id: "comment2" }),
    intl.formatMessage({ id: "comment3" }),
    intl.formatMessage({ id: "comment4" }),
  ];

  return (
    <>
      <style>{css}</style>

      <main id="home" className="bg-[#F7F7F5]" style={sans}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
          {/* ── Hero grid ────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start mb-16">
            {/* Photo */}
            <div className="flex justify-center md:justify-start order-1">
              <img
                src="banner.png"
                alt="Ny Hasina M. VAGNO"
                className="w-48 md:w-60"
              />
            </div>

            {/* Identity */}
            <div className="order-2 space-y-6">
              <div>
                <p
                  className="text-[11px] text-[#A8A8A5] tracking-[0.08em] uppercase mb-2"
                  style={mono}
                >
                  {intl.formatMessage({ id: "hello" })}
                </p>
                <h1
                  className="text-3xl md:text-4xl font-normal text-[#1C1C1A] leading-snug"
                  style={sans}
                >
                  Ny Hasina M. VAGNO
                </h1>
                <p
                  className="text-[12px] text-[#6B6B68] tracking-[0.05em] mt-1"
                  style={mono}
                >
                  {intl.formatMessage({ id: "engineer" })}
                </p>
              </div>

              <div className="border-t border-[#E5E4E0]" />

              <div className="space-y-3">
                <p className="text-[13px] font-light leading-relaxed text-[#6B6B68]">
                  {intl.formatMessage({ id: "description" })}
                </p>
                <p className="text-[13px] font-light leading-relaxed text-[#6B6B68]">
                  {intl.formatMessage({ id: "speciality" })}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {comments.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] text-[#6B6B68] border border-[#E5E4E0] px-3 py-1 bg-white"
                    style={sans}
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5 text-[15px] pt-1">
                <span
                  className="text-[11px] text-[#A8A8A5] tracking-[0.05em]"
                  style={mono}
                >
                  {intl.formatMessage({ id: "follow" })}
                </span>
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
      </main>
    </>
  );
}
