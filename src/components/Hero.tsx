import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import { motion } from "framer-motion";

const ladder = [
  "Landing Pages",
  "Business Websites",
  "Web Apps",
  "APIs & Databases",
  "Microservices",
  "Cloud Deployment",
];

const promises = [
  "One developer from design to deployment",
  "Production-grade: caching, security, CI/CD",
  "Live products you can click, not mockups",
];

const Hero = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 space-y-7 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1.5 text-sm text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for freelance & full-time projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            I build software that{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              goes live.
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 text-muted-foreground font-semibold">
              From a landing page to a full production system.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I'm <span className="text-foreground font-medium">Narendra Kumar</span>, a full-stack
            software engineer. Whatever you need built — a website for your business, a custom web
            app, or a scalable backend with databases, caching and cloud deployment — I design it,
            build it, ship it, and keep it running.
          </p>

          {/* Service ladder */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {ladder.map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-md border border-border bg-secondary/70 px-3 py-1.5 text-sm font-medium">
                  {item}
                </span>
                {i < ladder.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-primary/70 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button asChild size="lg" className="text-base px-8 shadow-glow">
              <a href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="#services">See What I Offer</a>
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
            <Button asChild variant="ghost" size="icon" className="hover:shadow-glow transition-all">
              <a href="https://github.com/Naren-18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:shadow-glow transition-all">
              <a href="https://www.linkedin.com/in/naren487/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
              <a href="/Narendra Kumar.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm rounded-2xl border border-border bg-card/80 backdrop-blur p-6 shadow-card">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-60 pointer-events-none" />
            <div className="relative flex items-center gap-4 mb-6">
              <img
                src={heroImage}
                alt="Narendra Kumar"
                className="w-20 h-20 rounded-full object-cover border-2 border-primary/40"
              />
              <div>
                <div className="text-lg font-bold">Narendra Kumar</div>
                <div className="text-sm text-muted-foreground">Full-Stack Software Engineer</div>
                <div className="text-xs text-primary mt-1">React · Spring Boot · Cloud</div>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-2 mb-6">
              {[
                { v: "9", l: "Live sites & apps" },
                { v: "End-to-end", l: "Delivery" },
                { v: "24/7", l: "In production" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg bg-secondary/80 p-3 text-center">
                  <div className="text-sm sm:text-base font-bold text-primary leading-tight">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>

            <ul className="relative space-y-2.5">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
