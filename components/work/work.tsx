import { useRef } from "react";
import { Lightbulb, BookOpen, Target, Code } from "lucide-react";

export const WorkSection = () => {
  const ref = useRef(null);
  const values = [
    {
      key: "innovation",
      icon: Lightbulb,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Toujours à la recherche des dernières technologies",
    },
    {
      key: "learning",
      icon: BookOpen,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "En constante évolution et amélioration",
    },
    {
      key: "solution",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: "Focus sur les résultats concrets",
    },
    {
      key: "clean",
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Qualité et maintenabilité avant tout",
    },
  ];

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider"></span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"></h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">Qui suis-je?</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiant en ingénierie informatique, je possède trois ans
              d’expérience professionnelle en développement Java, en
              architecture microservices, en déploiements cloud sur AWS et en
              systèmes d’IA géospatiale, avec une contribution notable au
              développement d’une plateforme deep-tech française exploitant une
              IA hybride pour transformer des imageries aériennes ultra-haute
              résolution en insights géospatiaux destinés aux compagnies
              d’assurance, aux collectivités locales et aux gestionnaires
              d’actifs.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map(
                ({ key, icon: Icon, color, bgColor, description }, index) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center mb-3`}
                    >
                      <Icon className={`w-5 h-5 ${color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {key}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-card rounded-3xl border border-border overflow-hidden">
                {/* Code-like Visual */}
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">class</span>
                      <span className="text-yellow-400">Developer</span>
                      <span className="text-foreground">{"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">constructor</span>
                      <span className="text-foreground">() {"{"}</span>
                    </div>
                    <div className="pl-8 space-y-1">
                      <div>
                        <span className="text-foreground">this.</span>
                        <span className="text-cyan-400">name</span>
                        <span className="text-foreground"> = </span>
                        <span className="text-green-400">
                          &quot;Ny Hasina&quot;
                        </span>
                      </div>
                      <div>
                        <span className="text-foreground">this.</span>
                        <span className="text-cyan-400">role</span>
                        <span className="text-foreground"> = </span>
                        <span className="text-green-400">
                          &quot;Full-Stack & AI Engineer&quot;
                        </span>
                      </div>
                      <div>
                        <span className="text-foreground">this.</span>
                        <span className="text-cyan-400">passion</span>
                        <span className="text-foreground"> = </span>
                        <span className="text-green-400">
                          &quot;Building amazing things&quot;
                        </span>
                      </div>
                    </div>
                    <div className="pl-4 text-foreground">{"}"}</div>
                    <div className="text-foreground">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
