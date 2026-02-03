import { useIntl } from "react-intl";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  const intl = useIntl();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20 bg-gradient-radial overflow-hidden"
    >
      {/* Background Orbs - Reduced size on mobile for performance */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#00D4FF]/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-[#8B5CF6]/10 rounded-full blur-[80px] md:blur-[120px]" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content - Order 2 on mobile to show image first or below header */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-xs md:text-sm text-[#A1A1AA]">
                Disponible pour de nouveaux projets
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {intl.formatMessage({ id: "hello" })}
              </p>
              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight">
                Ny Hasina M. VAGNO
              </h1>
              <p className="text-lg md:text-2xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent font-semibold">
                {intl.formatMessage({ id: "engineer" })}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0">
              Je conçois des solutions logicielles sur-mesure, sécurisées dès la
              conception et optimisées par l'IA.
              <br className="hidden md:block" />
              <span className="mt-2 block">
                Pour les DSI, CTO et fondateurs qui exigent l'excellence
                technique.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 py-6 px-8 text-lg"
              >
                <Download className="w-5 h-5" />
                <a href="https://drive.google.com/uc?export=download&id=1y_TSi2fEqBxqHhBzKGbcrPQ1adlAIW3s">
                  {intl.formatMessage({ id: "cv" })}
                </a>
              </Button>
            </div>
          </div>

          {/* Image & Floating Cards */}
          <div className="relative flex justify-center order-1 md:order-2 py-10">
            <div className="relative z-10">
              <img
                src="banner.png"
                alt="Ny Hasina M. VAGNO"
                className="rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white/5"
              />
            </div>

            {/* Floating Cards - Hidden or scaled on very small screens */}
            <div className="absolute -top-4 -left-4 md:left-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-2 md:p-3 max-w-[110px] md:max-w-[140px] animate-float">
              <p className="text-[10px] md:text-xs font-medium">
                {intl.formatMessage({ id: "comment1" })}
              </p>
            </div>

            <div className="absolute top-10 -right-4 md:right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-2 md:p-3 max-w-[110px] md:max-w-[130px] animate-float-delayed">
              <p className="text-[10px] md:text-xs font-medium">
                {intl.formatMessage({ id: "comment2" })}
              </p>
            </div>

            <div className="absolute bottom-10 -left-4 md:left-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-2 md:p-3 max-w-[110px] md:max-w-[135px] animate-float">
              <p className="text-[10px] md:text-xs font-medium">
                {intl.formatMessage({ id: "comment3" })}
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 md:right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl p-2 md:p-3 max-w-[110px] md:max-w-[140px] animate-float-delayed">
              <p className="text-[10px] md:text-xs font-medium">
                {intl.formatMessage({ id: "comment4" })}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section - Grid instead of flex with huge gap */}
        <div className="mt-16 md:mt-32 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 border-t border-white/10 pt-10">
          {[
            { value: "3+", label: "Années d'expérience" },
            { value: "8+", label: "Projets réalisés" },
            { value: "5+", label: "Clients satisfaits" },
            { value: "24/7", label: "Support Technique" },
            { value: "Agile", label: "Méthodologie" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#00D4FF] mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
