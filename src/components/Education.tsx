import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground">
            Academic foundation in computer science and engineering
          </p>
        </div>
        
        <Card className="bg-card border-border hover:shadow-card transition-all duration-300 max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl sm:text-2xl text-primary">
                  Bachelor of Computer Science and Engineering
                </CardTitle>
                <p className="text-lg sm:text-xl font-semibold text-foreground mt-1">
                  Malla Reddy College of Engineering and Technology, Hyderabad
                </p>
              </div>
              <Badge variant="secondary" className="ml-0 sm:ml-auto w-fit">
                <Calendar className="mr-2 h-4 w-4" />
                2019 - 2023
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium">CGPA:</span>
                <Badge variant="outline" className="text-primary border-primary">
                  8.46
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive education in computer science fundamentals, software engineering principles, 
                data structures and algorithms, database management, and modern programming paradigms. 
                Strong foundation in both theoretical concepts and practical application development.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;