import { useRef, useState } from "react";
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
  Play,
  ArrowDown,
  Quote,
  Siren,
  Smartphone,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import medinfoVideo from "@/assets/medinfo.mp4";

const medinfo = {
  links: {
    live: "https://www.medinfo.org.in",
    frontend: "https://github.com/Naren-18/MedInfo-FrontEnd",
    backend: "https://github.com/Naren-18/MedInfo-Backend-Microservices",
  },
};

const howItWorks = [
  {
    icon: FileText,
    title: "Patient sets up a profile",
    text: "Blood group, allergies, medications, emergency contacts and medical reports.",
  },
  {
    icon: QrCode,
    title: "Gets a personal QR code",
    text: "Printed on a card, phone lock screen or helmet sticker.",
  },
  {
    icon: Siren,
    title: "Responder scans in an emergency",
    text: "Critical info, an AI report summary and a medical timeline — no login needed.",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Redis-cached emergency page",
    text: "Cache-Aside on the hottest endpoint, evicted on every profile or AI-summary change.",
  },
  {
    icon: Sparkles,
    title: "AI report summaries",
    text: "PDFs and phone photos analysed by Gemini in a Kafka consumer. Every timeline event is verified against a quote from the report.",
  },
  {
    icon: Database,
    title: "Event-driven microservices",
    text: "Kafka audit pipeline with bounded retry, Dead Letter Topic and idempotent consumers. A separate database for each service.",
  },
  {
    icon: MailCheck,
    title: "Secure accounts",
    text: "JWT auth, email verification with hashed single-use tokens, and no account enumeration.",
  },
  {
    icon: ShieldCheck,
    title: "Production hardened",
    text: "Only the Gateway is exposed, behind Caddy HTTPS. Internal paths are blocked and secrets stay out of git.",
  },
  {
    icon: Smartphone,
    title: "Installable PWA",
    text: "React 19 + TanStack Query frontend that installs like a native app on any phone.",
  },
];

const stats = [
  { value: "6", label: "Microservices" },
  { value: "3", label: "Databases" },
  { value: "~80", label: "Unit tests" },
  { value: "Live", label: "In production" },
];

const techGroups = [
  { label: "Frontend", items: ["React 19", "TypeScript", "TanStack Query", "Tailwind", "PWA"] },
  { label: "Backend", items: ["Java 21", "Spring Boot 3.5", "Spring Cloud", "Eureka", "OpenFeign"] },
  { label: "Data & AI", items: ["PostgreSQL", "Redis", "Kafka", "Gemini AI"] },
  { label: "DevOps", items: ["Docker", "GitHub Actions", "Caddy", "Vercel"] },
];

const services = [
  { name: "Auth", detail: "JWT · Email" },
  { name: "Medical", detail: "Profiles · AI" },
  { name: "Audit", detail: "Kafka consumer" },
];

const VideoPlayer = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    ref.current?.play();
  };

  return (
    <div className="relative rounded-xl border border-border bg-background shadow-card overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/60">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex-1 max-w-xs rounded-md bg-background/80 px-3 py-1 text-xs text-muted-foreground truncate">
          medinfo.org.in
        </div>
      </div>

      <div className="relative aspect-video bg-black">
        <video
          ref={ref}
          src={`${medinfoVideo}#t=0.5`}
          className="h-full w-full object-contain"
          controls={started}
          playsInline
          preload="metadata"
          onPlay={() => setStarted(true)}
        />
        {!started && (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
            aria-label="Play MedInfo intro video"
          >
            <span className="relative flex h-20 w-20 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-glow transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
              </span>
            </span>
            <span className="text-white font-semibold text-lg drop-shadow">Watch the intro</span>
          </button>
        )}
      </div>
    </div>
  );
};

const ArchitectureDiagram = () => (
  <div className="rounded-xl border border-border bg-background/60 p-5 text-xs h-full">
    <div className="text-muted-foreground mb-4 font-semibold uppercase tracking-wider text-[11px]">
      System architecture
    </div>
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-center">
        React PWA <span className="text-muted-foreground">· Vercel</span>
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
          <div key={service.name} className="rounded-md border border-border bg-secondary px-1 py-2 text-center">
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
      className="mb-16 relative rounded-3xl border border-primary/30 bg-card overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />

      {/* Header + video */}
      <div className="relative grid lg:grid-cols-12 gap-8 p-6 md:p-10 items-center">
        <div className="lg:col-span-5 space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-primary text-primary-foreground">Flagship Project</Badge>
            <Badge variant="outline" className="border-green-500/50 text-green-400">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-green-400 inline-block animate-pulse" />
              Live in Production
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-red-500/15 flex items-center justify-center">
              <HeartPulse className="h-7 w-7 text-red-400" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">MedInfo</h3>
              <p className="text-sm text-muted-foreground">Emergency medical information platform</p>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            One QR scan gives first responders a patient's{" "}
            <span className="text-primary font-medium">blood group, allergies, medications and emergency contacts</span>{" "}
            in seconds — plus an AI summary of their medical history.
          </p>

          <div className="relative rounded-xl border border-border bg-background/50 p-4 pl-11">
            <Quote className="absolute left-4 top-4 h-4 w-4 text-primary" />
            <p className="text-sm text-muted-foreground italic">
              I built this after my own ENT surgery. With my hypertension history, if I'd been unconscious,
              no one would have known what I needed.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <Button asChild>
              <a href={medinfo.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Try it Live
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={medinfo.links.frontend} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Frontend
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={medinfo.links.backend} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Backend
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <VideoPlayer />
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px bg-border border-y border-border">
        {stats.map((stat) => (
          <div key={stat.label} className="py-5 text-center bg-card">
            <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="relative p-6 md:p-10">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          How it works
        </h4>
        <div className="grid md:grid-cols-3 gap-4">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="relative rounded-xl border border-border bg-background/50 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-bold text-primary/30">0{i + 1}</span>
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-semibold mb-1">{step.title}</div>
              <div className="text-sm text-muted-foreground">{step.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Under the hood */}
      <div className="relative px-6 md:px-10 pb-6 md:pb-10">
        <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Under the hood
        </h4>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-5">
            {highlights.map((h) => (
              <div key={h.title} className="flex gap-3">
                <div className="shrink-0 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <h.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{h.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed mt-0.5">{h.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5">
            <ArchitectureDiagram />
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techGroups.map((g) => (
            <div key={g.label}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
