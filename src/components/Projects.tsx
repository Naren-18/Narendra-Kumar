import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import corfusionImg from "@/assets/corfusion.png";
import techfestImg from "@/assets/techfest.png";
import { motion } from "framer-motion";
import codeVistaImg from "@/assets/code vista global.png";
import valuesoftImg from "@/assets/valuesoft.png";
import FeaturedProject from "@/components/FeaturedProject";

const projects = [
  {
    title: "Corfusion Website",
    description: "A modern, responsive business website for IT staffing and consulting, built with HTML, CSS, and JavaScript. Features company info, services, blog, and contact forms.",
    image: corfusionImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Naren-18/corfusion",
      live: "https://corfusion.com"
    }
  },
  {
    title: "Techfest Website (ESPIRITO 2K23)",
    description: "A vibrant college fest website for event registration, schedule, and information. Built with HTML, CSS, and JavaScript, it features event listings, registration forms, and a modern UI for students and organizers.",
    image: techfestImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Naren-18/Techfest",
      live: "https://techfest-teal-eta.vercel.app/"
    }
  },
  {
    title: "Code Vista Global",
    description: "A study abroad consultancy website serving as a gateway to international education, guiding students through university selection, visa assistance, and end-to-end admission support with a clean, modern interface.",
    image: codeVistaImg,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: {
      github: "https://github.com/Naren-18/Code-Vista-Global",
      live: "https://www.codevistaglobal.com/"
    }
  },
  {
    title: "CoreNova AI LLC",
    description: "IT consulting company website showcasing SAP, Oracle, Machine Learning, Generative AI, and DevOps solutions, helping organizations drive efficiency, innovation, and digital transformation.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: {
      github: "https://github.com/Naren-18/CoreNova-Ai-LLC",
      live: "https://www.corenovaai.com/"
    }
  },
  {
    title: "HungryDuck",
    description: "End-to-end hospitality solutions website for a firm that designs, builds, launches, and maintains world-class hotels, restaurants, nightclubs, and resorts.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    links: {
      github: "https://github.com/Naren-18/HungryDuck",
      live: "https://www.hungryduck.in/"
    }
  },
  {
    title: "Quantum Forge Consulting",
    description: "IT staffing and consulting company website highlighting permanent placement, contract staffing, remote hiring, and IT consulting services that help businesses scale with the right technology and talent.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      github: "https://github.com/Naren-18/Quantum-Forge-Consulting",
      live: "https://www.quantumforgeconsulting.com/"
    }
  },
  {
    title: "Nexa Vertex",
    description: "Consulting and staffing solutions website connecting skilled professionals with top employers, offering career counseling, resume building, interview preparation, and recruitment services.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      github: "https://github.com/Naren-18/Nexa-Vertex",
      live: "https://nexavertex.com/"
    }
  },
  {
    title: "Valuesoft IT Consulting",
    description: "Professional IT consulting company website offering custom software development, cloud computing, AI & data analytics, mobile/web app development, cybersecurity, and IT support services.",
    image: valuesoftImg,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      github: "https://github.com/Naren-18/Valuesoft-IT-consulting",
      live: "https://valuesofttechnologies.com/"
    }
  }
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-gradient-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <FeaturedProject />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 group overflow-hidden h-full flex flex-col p-3">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="flex-grow p-2 pb-0">
                  <CardTitle className="text-lg text-primary mb-1">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0 p-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 text-xs px-2 py-1">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.links.live && project.links.live !== "#" && (
                      <Button asChild size="sm" className="flex-1 text-xs px-2 py-1">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
