import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Cloud, Zap, Terminal } from "lucide-react";
import { FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaAws, FaDocker, FaGithub, FaGitAlt, FaAndroid, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiDart, SiMysql, SiPostgresql, SiFirebase, SiSpring, SiFlutter, SiVisualstudiocode, SiEclipseide } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa"; // as a fallback for VS Code

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-400",
    skills: ["Core Java", "JavaScript", "Python", "Dart", "PHP", "SQL"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    skills: ["PostgreSQL", "MySQL", "SQL", "Firebase"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
    skills: ["Spring Boot", "Spring Microservices", "ReactJS", "Flutter", "Django", "Node.js", "Android", "Spring Rest"]
  },
  {
    title: "Development Tools",
    icon: Terminal,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    skills: ["Git", "GitHub", "Visual Studio Code", "Eclipse IDE", "Cursor", "Spring Boot (STS)", "Android Studio"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    skills: ["AWS", "Docker", "Microservices", "REST APIs"]
  },
  {
    title: "Soft Skills",
    icon: Zap,
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    skills: ["Problem Solving", "Team Collaboration", "Agile Development", "Code Review", "Mentoring"]
  }
];

const skillIcons: Record<string, React.ReactNode> = {
  "Core Java": <FaJava className="w-4 h-4 mr-2" />, 
  "JavaScript": <SiJavascript className="w-4 h-4 mr-2" />, 
  "Python": <FaPython className="w-4 h-4 mr-2" />, 
  "Dart": <SiDart className="w-4 h-4 mr-2" />, 
  "PHP": <FaPhp className="w-4 h-4 mr-2" />, 
  "SQL": <FaDatabase className="w-4 h-4 mr-2" />, 
  "PostgreSQL": <SiPostgresql className="w-4 h-4 mr-2" />, 
  "MySQL": <SiMysql className="w-4 h-4 mr-2" />, 
  "Firebase": <SiFirebase className="w-4 h-4 mr-2" />, 
  "Spring Boot": <SiSpring className="w-4 h-4 mr-2" />, 
  "Spring Microservices": <SiSpring className="w-4 h-4 mr-2" />, 
  "ReactJS": <FaReact className="w-4 h-4 mr-2" />, 
  "Flutter": <SiFlutter className="w-4 h-4 mr-2" />, 
  "Django": <MdOutlineDesignServices className="w-4 h-4 mr-2" />, 
  "Node.js": <FaNodeJs className="w-4 h-4 mr-2" />, 
  "Android": <FaAndroid className="w-4 h-4 mr-2" />, 
  "Spring Rest": <SiSpring className="w-4 h-4 mr-2" />, 
  "Git": <FaGitAlt className="w-4 h-4 mr-2" />, 
  "GitHub": <FaGithub className="w-4 h-4 mr-2" />, 
  "Visual Studio Code": <FaCode className="w-4 h-4 mr-2" />, 
  "Eclipse IDE": <SiEclipseide className="w-4 h-4 mr-2" />, 
  "Cursor": <MdOutlineDesignServices className="w-4 h-4 mr-2" />, 
  "Spring Boot (STS)": <SiSpring className="w-4 h-4 mr-2" />, 
  "Android Studio": <FaAndroid className="w-4 h-4 mr-2" />, 
  "AWS": <FaAws className="w-4 h-4 mr-2" />, 
  "Docker": <FaDocker className="w-4 h-4 mr-2" />, 
  "Microservices": <SiSpring className="w-4 h-4 mr-2" />, 
  "REST APIs": <FaNodeJs className="w-4 h-4 mr-2" />
};

const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Technical expertise across the full development stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group bg-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 relative overflow-hidden h-full flex flex-col">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 relative z-10 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-colors"></div>
                    <div className="relative p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className={`h-6 w-6 ${category.iconColor} group-hover:text-primary transition-colors`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Skills Grid - flex-grow to push footer down */}
                <div className="grid grid-cols-2 gap-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill"
                    >
                      <Badge 
                        variant="secondary" 
                        className="w-full justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-xs group-hover:shadow-sm"
                      >
                        {skillIcons[skill] || null}
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                {/* Skill Count - Always at bottom */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">
                    {category.skills.length} skills
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < 4 ? 'bg-primary' : 'bg-muted'
                        } group-hover:bg-primary transition-colors delay-${i * 100}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-secondary">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;