import { useRef } from "react";
import { Server, Cloud, Brain, Database, Layout, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const ref = useRef(null);

  const skillCategories = [
    {
      key: "backend",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        "Java 17",
        "Spring Boot",
        "RESTful APIs",
        "Microservices",
        "JUnit",
        "Testcontainers",
      ],
    },
    {
      key: "cloud",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "AWS Lambda",
        "EventBridge",
        "SQS",
        "Aurora PostgreSQL",
        "Docker",
        "CI/CD",
        "SonarQube",
      ],
    },
    {
      key: "ai",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Python",
        "YOLOv8",
        "Gradient Boosting",
        "Gemini AI",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
      ],
    },
    {
      key: "data",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        "PostgreSQL",
        "Amazon Aurora",
        "GeoSpatial Data",
        "OpenStreetMap",
        "GeoPandas",
      ],
    },
    {
      key: "frontend",
      icon: Layout,
      color: "from-indigo-500 to-blue-500",
      skills: [
        "Next.js",
        "TypeScript",
        "Firebase Auth",
        "ZegoCloud API",
        "Tailwind CSS",
      ],
    },
    {
      key: "tools",
      icon: Wrench,
      color: "from-gray-500 to-slate-500",
      skills: ["GitHub", "GitLab", "Jira", "Postman", "Sentry"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.key}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
