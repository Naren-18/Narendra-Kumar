import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, FolderGit2 } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="pt-24 md:pt-40 min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 py-10 md:py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-40"></div>
              <img 
                src={heroImage} 
                alt="Narendra Kumar" 
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-glow"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-full p-3">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  Available
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Narendra Kumar
              </span>
            </h1>
            
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-center lg:gap-4">
              <span className="text-2xl lg:text-3xl font-semibold text-muted-foreground flex items-center gap-3">
                Software Engineer
               
              </span>
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I build websites, web apps, and custom software end-to-end — from idea to launch — using modern technologies like React, Spring Boot, and cloud platforms.
            </p>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <a href="#projects">
                <FolderGit2 className="mr-2 h-5 w-5" />
                View My Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <a href="/Narendra Kumar.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                View My Resume
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 ">
            <Button asChild variant="ghost" size="icon" className="hover:shadow-glow hover:scale-110 transition-all">
              <a href="https://github.com/Naren-18" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:shadow-glow hover:scale-110 transition-all">
              <a href="https://www.linkedin.com/in/naren487/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
          
          {/* Quick Stats */}
          
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;