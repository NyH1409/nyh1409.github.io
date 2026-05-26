import { useIntl } from "react-intl";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export function HeroSection() {
  const intl = useIntl();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-8 md:py-15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 items-center py md:py-15 shadow-2xl border-4 border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6 text-center md:text-left order-1 md:order-2">
            <div className="space-y-2">
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {intl.formatMessage({ id: "hello" })}
              </p>

              <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-4xl font-bold tracking-tight">
                Ny Hasina M. VAGNO
              </h1>

              <p className="text-lg md:text-2xl bg-gradient-to-br bg-clip-text font-semibold">
                {intl.formatMessage({ id: "engineer" })}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0 text-justify">
              {intl.formatMessage({ id: "description" })}
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0 text-justify">
              {intl.formatMessage({ id: "speciality" })}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 text-2xl">
              <a
                href="https://github.com/nvagno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/nyy_has/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/nyhasina.vagno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center order-2 md:order-1">
            <div className="relative z-10">
              <img
                src="banner.png"
                alt="Ny Hasina M. VAGNO"
                className="w-full sm:w-64 sm:h-64 md:w-110 md:h-110 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
