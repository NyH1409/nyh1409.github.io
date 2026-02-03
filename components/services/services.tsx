import { useRef } from "react";
import {
  Code2,
  RefreshCw,
  Wrench,
  Check,
  ArrowRight,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntl } from "react-intl";

export const ServicesSection = () => {
  const intl = useIntl();
  const ref = useRef(null);

  const services = [
    {
      key: "Projet sur mesure",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      description:
        "Conception d'applications robustes et évolutives, de l'architecture backend à l'interface utilisateur.",
      benefits: [
        "Architecture scalable",
        "Code maintenable",
        "Documentation complète",
      ],
      useCase: ["SaaS complexe", "APIs RESTful", "Intégration IA"],
    },
    {
      key: "Migration & Refactoring",
      icon: RefreshCw,
      color: "from-purple-500 to-pink-500",
      description:
        "Modernisation de vos systèmes existants pour améliorer les performances et réduire la dette technique.",
      benefits: [
        "Zéro temps d'arrêt",
        "Tests de non-régression",
        "Performance accrue",
      ],
      useCase: [
        "Passage Monolithe vers Microservices",
        "Update Java/Spring",
        "Cloud Native",
      ],
    },
    {
      key: "Quick Fix / Debugging",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      description:
        "Intervention rapide pour résoudre des bugs critiques ou optimiser des goulots d'étranglement.",
      benefits: [
        "Réactivité maximale",
        "Analyse de cause racine",
        "Correctifs durables",
      ],
      useCase: ["Bugs de production", "Optimisation SQL", "Audit de sécurité"],
    },
  ];

  const benefits = [
    { icon: Zap, text: "Livraison rapide" },
    { icon: Shield, text: "Sécurité & Qualité" },
    { icon: Clock, text: "Support technique" },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header de section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Mes Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
            Des solutions techniques pour vos défis business
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col">
                {/* Icon avec dégradé */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.key}
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed italic">
                  &quot;{service.description}&quot;
                </p>

                {/* Benefits & Use Cases - Flex grow pour aligner les boutons en bas */}
                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                      Atouts
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div className="bg-primary/10 p-1 rounded-full">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                      Cas d&apos;usage
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCase.map((useCase, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-3 py-1 rounded-full bg-muted border border-border group-hover:border-primary/20 transition-colors"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Style Glassmorphism */}
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-16 text-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Un besoin technique spécifique ?
          </h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Discutons de votre projet. Je suis disponible pour du freelance, du
            consulting ou des interventions critiques.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-16 py-5 text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all gap-2"
              onClick={() => {
                document
                  .querySelector("#contacts")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lancer la discussion
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Bottom Benefits Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border/50">
            {benefits.map(({ icon: Icon, text }, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-sm font-medium text-muted-foreground group"
              >
                <Icon className="w-5 h-5 text-primary group-hover:animate-pulse" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
