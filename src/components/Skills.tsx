import type { ReactNode } from "react";
import { FaJava, FaReact, FaNodeJs, FaAws, FaDocker, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiApachekafka,
  SiGithubactions,
  SiVercel,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";

type Tech = { name: string; icon: ReactNode };

const groups: { label: string; items: Tech[] }[] = [
  {
    label: "Frontend & Mobile",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Flutter", icon: <SiFlutter /> },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpring /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Python / Django", icon: <SiDjango /> },
    ],
  },
  {
    label: "Data & Messaging",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Kafka", icon: <SiApachekafka /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Tech Stack</h2>
          <p className="text-muted-foreground">
            Proven, modern tools — chosen to fit your project, not the other way around.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card divide-y divide-border">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-5">
              <div className="md:w-44 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1.5 text-sm hover:border-primary/50 hover:text-primary transition-colors [&>svg]:h-4 [&>svg]:w-4"
                  >
                    {t.icon}
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
