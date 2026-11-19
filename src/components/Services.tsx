import { Button } from "@/components/ui/button";
import {
  LayoutTemplate,
  Globe,
  AppWindow,
  Database,
  Network,
  CloudUpload,
  ArrowRight,
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    pitch: "Fast, conversion-focused pages for a product launch, campaign or startup.",
    items: ["Responsive on every device", "SEO & performance tuned", "Contact / lead forms"],
    example: "Corfusion, Techfest, Nexa Vertex",
    level: "Simple",
  },
  {
    icon: Globe,
    title: "Business Websites",
    pitch: "Multi-page sites that represent your company and bring in customers.",
    items: ["Modern React + Tailwind UI", "Custom domain & hosting setup", "Easy to update later"],
    example: "CoreNova AI, HungryDuck, Code Vista Global",
    level: "Simple",
  },
  {
    icon: AppWindow,
    title: "Custom Web Applications",
    pitch: "Dashboards, portals and tools tailored to how your business actually works.",
    items: ["User accounts & role-based access", "Admin panels & reports", "Installable PWA support"],
    example: "MedInfo patient & emergency portal",
    level: "Advanced",
  },
  {
    icon: Database,
    title: "Backend, APIs & Databases",
    pitch: "Secure, well-designed backends that keep your data safe and your app fast.",
    items: ["REST APIs with Spring Boot / Node", "PostgreSQL / MySQL schema design", "JWT auth & email verification"],
    example: "MedInfo auth & medical services",
    level: "Advanced",
  },
  {
    icon: Network,
    title: "Scalable Systems",
    pitch: "Architecture that holds up when real users arrive — not just a demo.",
    items: ["Redis caching", "Kafka event-driven microservices", "AI integration (Gemini / LLMs)"],
    example: "MedInfo: 6 microservices",
    level: "Complex",
  },
  {
    icon: CloudUpload,
    title: "Deployment & DevOps",
    pitch: "I don't hand you a zip file. I put it live and keep it running.",
    items: ["Docker & VPS / AWS / Vercel", "CI/CD with GitHub Actions", "HTTPS, domains & monitoring"],
    example: "MedInfo on VPS + Vercel",
    level: "Complex",
  },
];

const levelStyle: Record<string, string> = {
  Simple: "text-green-400 border-green-500/40 bg-green-500/10",
  Advanced: "text-blue-400 border-blue-500/40 bg-blue-500/10",
  Complex: "text-purple-400 border-purple-500/40 bg-purple-500/10",
};

const process = [
  { icon: MessageSquare, title: "Discuss", text: "We talk through your idea, users and budget." },
  { icon: PenTool, title: "Plan & Design", text: "Clear scope, architecture and UI before code." },
  { icon: Code2, title: "Build", text: "Regular demos so you see progress every week." },
  { icon: Rocket, title: "Deploy", text: "Live on your domain with HTTPS and CI/CD." },
  { icon: LifeBuoy, title: "Support", text: "Fixes, improvements and new features after launch." },
];

const Services = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <div className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Any software you need, <span className="text-primary">built end-to-end</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start small with a landing page, or go all the way to a complex system with databases,
            caching, microservices and cloud deployment. You work with one engineer who owns the
            whole thing.
          </p>
        </motion.div>

        {/* Complexity scale */}
        <div className="hidden md:flex items-center gap-3 mb-6 text-xs text-muted-foreground">
          <span>Simple</span>
          <div className="h-1 flex-1 rounded-full bg-gradient-to-r from-green-500/60 via-blue-500/60 to-purple-500/60" />
          <span>Complex</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <span className={`text-[11px] font-medium rounded-full border px-2.5 py-0.5 ${levelStyle[s.level]}`}>
                  {s.level}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.pitch}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {s.items.map((item) => (
                  <li key={item} className="text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-muted-foreground border-t border-border pt-3">
                <span className="text-foreground/80 font-medium">Built before:</span> {s.example}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-border bg-gradient-secondary p-6 md:p-10"
        >
          <h3 className="text-2xl font-bold mb-2 text-center">How we'll work together</h3>
          <p className="text-muted-foreground text-center mb-10">
            A simple, transparent process from first call to launch day — and after.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-px bg-border" />
            {process.map((p, i) => (
              <div key={p.title} className="relative text-center">
                <div className="relative mx-auto mb-4 h-12 w-12 rounded-full border border-primary/50 bg-background flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-primary" />
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="font-semibold mb-1">{p.title}</div>
                <div className="text-sm text-muted-foreground">{p.text}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild size="lg" className="px-8">
              <a href="#contact">
                Tell me about your project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
