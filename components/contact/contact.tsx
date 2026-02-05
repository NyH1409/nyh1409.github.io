import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Button } from "../ui/button";
import { useIntl } from "react-intl";

export function ContactSection() {
  const intl = useIntl();

  const navItems = [
    { id: "home", label: intl.formatMessage({ id: "home" }), link: "#home" },
    { id: "works", label: intl.formatMessage({ id: "works" }), link: "#works" },
    {
      id: "portfolio",
      label: intl.formatMessage({ id: "portefolio" }),
      link: "#portfolio",
    },
    {
      id: "contacts",
      label: intl.formatMessage({ id: "contacts" }),
      link: "#contacts",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/",
    },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/nvagno" },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/nyhasina.vagno/",
    },
  ];

  return (
    <footer
      id="contacts"
      className="bg-slate-50 dark:bg-[#09090b] py-16 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-8 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="bg-white dark:bg-zinc-900 p-2 rounded-xl shadow-sm border border-border/50">
                <img
                  className="w-10 h-10 object-contain"
                  src="logo.png"
                  alt="Logo"
                />
              </div>
              <div>
                <h2 className="text-md font-bold tracking-tight text-foreground">
                  Ny Hasina M. VAGNO
                </h2>
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">
                  {intl.formatMessage({ id: "engineer" })}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Conception de solutions logicielles sur-mesure et expertise en IA
              hybride pour transformer vos idées en réalité technique.
            </p>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, i) => (
                <Button
                  key={i}
                  size="icon"
                  variant="outline"
                  className="rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-foreground/70">
              {intl.formatMessage({ id: "links" })}
            </h3>
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-all flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 transition-all duration-300 h-[1.5px] bg-primary mr-0 group-hover:mr-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-foreground/70">
              Contact & Support
            </h3>
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-8">
              {/* Phone */}
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 p-3.5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase mb-1.5 font-bold tracking-widest">
                    {intl.formatMessage({ id: "phone" })}
                  </p>
                  <a
                    href="tel:+262693428016"
                    className="text-sm font-semibold hover:text-primary transition-colors"
                  >
                    +262 693 42 80 16
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 p-3.5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase mb-1.5 font-bold tracking-widest">
                    Direct Email
                  </p>
                  <a
                    href="mailto:nyhasinavagno@gmail.com"
                    className="text-sm font-semibold hover:text-primary transition-colors break-all"
                  >
                    nyhasinavagno@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-5 group sm:col-span-2">
                <div className="flex-shrink-0 p-3.5 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase mb-1.5 font-bold tracking-widest">
                    {intl.formatMessage({ id: "address" })}
                  </p>
                  <p className="text-sm font-semibold leading-relaxed max-w-sm">
                    14 Avenue Dr Jean-Marie Dambreville,
                    <br />
                    <span className="text-muted-foreground font-medium text-xs tracking-tight">
                      97410 Saint-Pierre, La Réunion
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[11px] font-medium tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground font-bold">
              Ny Hasina M. VAGNO
            </span>
            . {intl.formatMessage({ id: "reserved" })}
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-primary cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
