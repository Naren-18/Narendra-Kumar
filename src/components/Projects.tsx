import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import go4foodImg from "@/assets/go4food.png";
import corfusionImg from "@/assets/corfusion.png";
import resultAnalysisImg from "@/assets/result analysis.png";
import studentActivityImg from "@/assets/student activity manager.png";
import techfestImg from "@/assets/techfest.png";
import medicareImg from "@/assets/medicare-project.jpg";
import { motion } from "framer-motion";
import codeVistaImg from "@/assets/code vista global.png";
import valuesoftImg from "@/assets/valuesoft.png";

const projects = [
  // {
  //   title: "Code Vista Global",
  //   description: "A modern study abroad consultancy website built with React and TypeScript. Features university selection, visa guidance, and comprehensive student services with a professional, user-friendly interface.",
  //   image: codeVistaImg,
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  //   links: {
  //     github: "https://github.com/Naren-18/Code-Vista-Global",
  //     live: "https://www.codevistaglobal.com/"
  //   }
  // },
  // {
  //   title: "Valuesoft IT Consulting",
  //   description: "Professional IT consulting and software development company website. Features services showcase, client testimonials, and contact forms with modern design and responsive layout.",
  //   image: valuesoftImg, // IT/consulting themed
  //   technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  //   links: {
  //     github: "https://github.com/Naren-18/Valuesoft-IT-consulting",
  //     live: "https://valuesofttechnologies.com/"
  //   }
  // },
  {
    title: "Corfusion Website",
    description: "A modern, responsive business website for IT staffing and consulting, built with HTML, CSS, and JavaScript. Features company info, services, blog, and contact forms.",
    image: corfusionImg, // Placeholder, replace with actual image if available
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Naren-18/corfusion",
      live: "https://corfusion.com"
    }
  },
  {
    title: "Medicare Platform",
    description: "Healthcare web application enabling online medicine search and ordering with secure authentication, real-time inventory management, and seamless checkout experience.",
    image: medicareImg, // Healthcare themed
    technologies: ["React.js", "Spring Boot", "MySQL", "JWT"],
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "MyMoviePlan (Full Stack Movie Management)",
    description: `A full-stack movie management application with CRUD features. Frontend built in React, backend in Spring Boot. Manage movies, add, edit, delete, and view details`,
    image: "https://user-images.githubusercontent.com/25881325/67157291-7e05dc00-f32a-11e9-8d0e-00e6ecda5b7d.png", // Movie themed
    technologies: ["React.js", "Spring Boot", "REST API"],
    links: {
      github: "",
      live: ""
    }
  },
  {
    title: "Resume Builder",
    description: "Django-based web app to generate single or bulk resumes from Excel data, with multiple templates and export options. Automates resume creation for individuals and organizations.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // Resume themed
    technologies: ["Python", "Django", "Bootstrap", "SQLite/PostgreSQL"],
    links: {
      github: "https://github.com/Naren-18/Resume-Builder",
      live: ""
    }
  },
  
  {
    title: "Techfest Website (ESPIRITO 2K23)",
    description: "A vibrant college fest website for event registration, schedule, and information. Built with HTML, CSS, and JavaScript, it features event listings, registration forms, and a modern UI for students and organizers.",
    image: techfestImg, // Placeholder, replace with actual image if available
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Naren-18/Techfest",
      live: "https://techfest-naren-18.vercel.app/"
    }
  },
  
  {
    title: "Go4Food Restaurant Portal",
    description: "Real-time food ordering platform connecting restaurants with customers. Features order management dashboard and structured daily reporting system.",
    image: go4foodImg,
    technologies: ["Python", "Django", "MySQL", "Ajax"],
    links: {
      github: "https://github.com/Naren-18/Go4Food",
      live: "#"
    }
  },
  {
    title: "Academic Result Analytics",
    description: "Data analytics platform for educational institutions to analyze semester results, generate insights, and provide comprehensive reporting for faculty administration.",
    image: resultAnalysisImg,
    technologies: ["Django", "Python", "MySQL", "Bootstrap"],
    links: {
      github: "https://github.com/Naren-18/Result-Analyzer",
      live: "#"
    }
  },
  {
    title: "Student Activity Tracker",
    description: "Mobile application for monitoring student attendance with integrated management dashboard for tracking tardiness patterns and generating detailed reports.",
    image: studentActivityImg,
    technologies: ["React Native", "Firebase", "Node.js"],
    links: {
      github: "https://github.com/Naren-18/Student-Activity-Manager-App",
      live: "#"
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
                    {project.title === "MyMoviePlan (Full Stack Movie Management)" ? (
                      <>
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs px-2 py-1">
                          <a href="https://github.com/Naren-18/MyMoviePlan-FrontEnd" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Frontend Code
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs px-2 py-1">
                          <a href="https://github.com/Naren-18/MyMoviePlan-Backend" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Backend Code
                          </a>
                        </Button>
                      </>
                    ) : project.title === "Medicare Platform" ? (
                      <>
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs px-2 py-1">
                          <a href="https://github.com/Naren-18/Medicare-FrontEnd" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Frontend Code
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs px-2 py-1">
                          <a href="https://github.com/Naren-18/Medicare-Backend" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Backend Code
                          </a>
                        </Button>
                      </>
                    ) : (
                      <Button asChild variant="outline" size="sm" className="flex-1 text-xs px-2 py-1">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
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