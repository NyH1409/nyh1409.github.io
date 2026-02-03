import { useRef } from "react";
import { Server, Cloud, Brain, Database, Layout, Wrench } from "lucide-react";
import { useIntl } from "react-intl";

export const AboutAndSkillsSection = () => {
  const intl = useIntl();
  const ref = useRef(null);

  const skillCategories = [
    {
      key: "Backend",
      icon: Server,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: ["Java 17", "Spring Boot", "RESTful APIs", "Microservices"],
    },
    {
      key: "Cloud & DevOps",
      icon: Cloud,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: ["AWS Lambda", "EventBridge", "Docker", "CI/CD"],
    },
    {
      key: "AI & Data",
      icon: Brain,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: ["Python", "YOLOv8", "PostgreSQL", "GeoSpatial"],
    },
    {
      key: "Frontend",
      icon: Layout,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      key: "Tools",
      icon: Wrench,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      skills: ["GitLab", "Jira", "Postman", "Sentry", "Mattermost"],
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Bio & Identity */}
          <div className="space-y-8">
            <div>
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-2">
                Expertise & Bio
              </h2>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Qui suis-je ?
              </h1>
            </div>

            <p className="text-md text-muted-foreground leading-relaxed max-w-xl">
              Je possède trois ans d’expérience professionnelle en développement
              Java, en architecture microservices et en déploiements cloud.
              <span className="block mt-4">
                Mon expertise s'étend aux systèmes d'IA géospatiale, ayant
                contribué au développement d'une plateforme deep-tech française
                pour la transformation d'imageries aériennes en insights
                stratégiques.
              </span>
            </p>

            {/* Visual Code Card (Visible on Desktop) */}
            <div className="hidden md:block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-card border border-border rounded-xl p-6 font-mono text-sm shadow-2xl">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="space-y-1">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-400">engineer</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">name:</span>{" "}
                    <span className="text-green-400">"Ny Hasina"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">focus:</span>{" "}
                    <span className="text-green-400">"Scalability & AI"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-400">status:</span>{" "}
                    <span className="text-green-400">
                      "Building the future"
                    </span>
                  </p>
                  <p>{"};"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg ${category.bgColor}`}>
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-foreground">{category.key}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground border border-transparent group-hover:border-primary/10 transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
