import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  HeartPulse,
  QrCode,
  Sparkles,
  ShieldCheck,
  Zap,
  Database,
  MailCheck,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";

const medinfo = {
  title: "MedInfo",
  subtitle: "Emergency Medical Information Platform",
  description:
    "In an emergency, first responders scan a QR code to instantly see a patient's blood group, allergies, medications, emergency contacts, an AI summary of their medical reports and a dated medical timeline — no login required. Built from a Spring Boot monolith migrated into an event-driven microservices architecture, and running in production.",
  story:
    "Built after my own ENT surgery with a hypertension history — if I'd been unconscious, no one would have known my medical history.",
  highlights: [
    {
      icon: QrCode,
      title: "Public QR emergency page",
      text: "Redis Cache-Aside on the hottest endpoint; evicted on every profile or AI-summary change.",
    },
    {
      icon: Sparkles,
      title: "AI report summaries & timeline",
      text: "PDF reports (typed or phone photos) analysed by Gemini in a Kafka consumer. Every timeline event is verified against a quote from the report.",
    },
    {
      icon: Zap,
      title: "Event-driven & reliable",
      text: "Kafka audit pipeline with bounded retry, Dead Letter Topic and an idempotent consumer.",
    },
    {
      icon: MailCheck,
      title: "Email-verified accounts",
      text: "JWT auth, hashed single-use tokens, and no account enumeration.",
    },
    {
      icon: ShieldCheck,
      title: "Production hardened",
      text: "Only the Gateway is exposed, behind Caddy HTTPS. Internal paths are blocked and secrets stay out of git.",
    },
    {
      icon: Database,
      title: "Database per service",
      text: "Separate auth, medical and audit databases on Neon PostgreSQL. Config is centralized in a private Git-backed Config Server.",
    },
  ],
  technologies: [
    "Java 21",
    "Spring Boot 3.5",
    "Spring Cloud",
    "Eureka",
    "API Gateway",
    "OpenFeign",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "Gemini AI",
    "Docker",
    "GitHub Actions",
    "React 19",
    "TypeScript",
    "TanStack Query",
    "Tailwind CSS",
    "PWA",
  ],
  stats: [
    { value: "6", label: "Microservices" },
    { value: "3", label: "Databases" },
    { value: "~80", label: "Unit Tests" },
    { value: "Live", label: "In Production" },
  ],
  links: {
    live: "https://www.medinfo.org.in",
    frontend: "https://github.com/Naren-18/MedInfo-FrontEnd",
    backend: "https://github.com/Naren-18/MedInfo-Backend-Microservices",
  },
};

const services = [
  { name: "Auth", detail: "JWT · Email" },
  { name: "Medical", detail: "Profiles · AI" },
  { name: "Audit", detail: "Kafka consumer" },
];

const ArchitectureDiagram = () => (
  <div className="rounded-lg border border-border bg-background/60 p-4 text-xs">
    <div className="text-muted-foreground mb-3 font-medium uppercase tracking-wider text-[10px]">
      Architecture
    </div>
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-center">
        React SPA <span className="text-muted-foreground">· Vercel</span>
      </div>
      <ArrowDown className="h-3 w-3 text-muted-foreground" />
      <div className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-center">
        Caddy HTTPS <span className="text-muted-foreground">· VPS</span>
      </div>
      <ArrowDown className="h-3 w-3 text-muted-foreground" />
      <div className="w-full rounded-md border border-primary/50 bg-primary/10 px-3 py-2 text-center text-primary font-medium">
        API Gateway + Eureka + Config Server
      </div>
      <ArrowDown className="h-3 w-3 text-muted-foreground" />
      <div className="grid w-full grid-cols-3 gap-1.5">
        {services.map((service) => (
          <div
            key={service.name}
            className="rounded-md border border-border bg-secondary px-1 py-2 text-center"
          >
            <div className="font-medium">{service.name}</div>
            <div className="text-[10px] text-muted-foreground">{service.detail}</div>
          </div>
        ))}
      </div>
      <ArrowDown className="h-3 w-3 text-muted-foreground" />
      <div className="grid w-full grid-cols-4 gap-1.5 text-center text-[10px]">
        {["Kafka", "Redis", "Postgres", "Gemini"].map((infra) => (
          <div key={infra} className="rounded-md border border-dashed border-border px-1 py-1.5 text-muted-foreground">
            {infra}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <Card className="bg-card border-primary/40 shadow-glow overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              <Badge variant="outline" className="border-green-500/50 text-green-400">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-green-400 inline-block" />
                Live in Production
              </Badge>
            </div>

            <div className="flex items-center gap-3 mb-1">
              <HeartPulse className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-primary">{medinfo.title}</h3>
            </div>
            <p className="text-lg font-medium mb-4">{medinfo.subtitle}</p>

            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{medinfo.description}</p>
            <p className="text-muted-foreground text-sm italic border-l-2 border-primary/50 pl-3 mb-6">
              {medinfo.story}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {medinfo.highlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-3">
                  <div className="shrink-0 h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{highlight.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{highlight.text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {medinfo.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              <Button asChild size="sm">
                <a href={medinfo.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={medinfo.links.frontend} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Frontend Code
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={medinfo.links.backend} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Backend Code
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <ArchitectureDiagram />
            <div className="grid grid-cols-2 gap-3">
              {medinfo.stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-gradient-secondary">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default FeaturedProject;
