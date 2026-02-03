import { useIntl } from "react-intl";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  const intl = useIntl();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              {intl.formatMessage({ id: "hello" })}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              Ny Hasina M. VAGNO
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
              {intl.formatMessage({ id: "engineer" })}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {intl.formatMessage({ id: "description" })}{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {intl.formatMessage({ id: "speciality" })}
              </span>
            </p>
            <Button size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              <a href="https://drive.google.com/uc?export=download&id=1y_TSi2fEqBxqHhBzKGbcrPQ1adlAIW3s">
                {intl.formatMessage({ id: "cv" })}
              </a>
            </Button>
          </div>

          <div className="relative flex justify-center order-1 md:order-2">
            <div className="relative z-10">
              <img
                src="banner.png"
                alt="Ny Hasina M. VAGNO"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
              />
            </div>

            <div className="absolute top-0 left-0 md:left-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-[140px] animate-float">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {intl.formatMessage({
                  id: "comment1",
                })}
              </p>
            </div>

            <div className="absolute top-10 right-0 md:right-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-[130px] animate-float-delayed">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {intl.formatMessage({
                  id: "comment2",
                })}
              </p>
            </div>

            <div className="absolute bottom-5 left-0 md:left-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-[135px] animate-float">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {intl.formatMessage({
                  id: "comment3",
                })}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 md:right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-[140px] animate-float-delayed">
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {intl.formatMessage({
                  id: "comment4",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "3+", label: "Années d'expérience" },
            { value: "10+", label: "Projets réalisés" },
            { value: "5+", label: "Clients satisfaits" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">
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
