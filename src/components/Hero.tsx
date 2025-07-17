import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 py-10 md:py-20 relative overflow-hidden">
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
                className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/20 shadow-glow"
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
                Software Engineer & Content Creator
               
              </span>
            </div>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Passionate about crafting scalable web applications using modern technologies like React, Spring Boot, and cloud platforms. 
              
            </p>
            
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
           
            <Button  size="lg" className="shadow-glow text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              View My Resume
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary/10 flex items-center">
              <a href="https://www.instagram.com/devcraftr_/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 h-6 w-6" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 5.668 2 6.077 2 9.333v5.334c0 3.256.013 3.665.072 4.946.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.281.072-1.69.072-4.946V9.333c0-3.256-.013-3.665-.072-4.946-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                </svg>
                Follow @devcraftr_
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-6">
            <Button variant="ghost" size="icon" className="hover:shadow-glow hover:scale-110 transition-all">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:shadow-glow hover:scale-110 transition-all">
              <Linkedin className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Quick Stats */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;