import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Calendar } from "lucide-react";

const certifications = [
  {
    title: "SPOT Award",
    organization: "Teksystems Global Services",
    date: "May 2024",
    description: "Recognized as the bing the project."
  }
];

const achievements = [
  {
    title: "React Native Workshop",
    organization: "Conducted for Students",
    date: "4-day workshop",
    description: "Conducted a comprehensive 4-day React Native Workshop for students, covering mobile app development fundamentals."
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground">
            Recognition and milestones in my professional journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-secondary border-border hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-primary">{cert.title}</CardTitle>
                    <Badge variant="secondary">
                      <Calendar className="mr-2 h-4 w-4" />
                      {cert.date}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-foreground">{cert.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-secondary border-border hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-primary">{achievement.title}</CardTitle>
                    <Badge variant="secondary">
                      <Calendar className="mr-2 h-4 w-4" />
                      {achievement.date}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium text-foreground">{achievement.organization}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;