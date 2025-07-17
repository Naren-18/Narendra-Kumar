import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import teksystemsLogo from "@/assets/teksystems-logo.png";

const company = {
  name: "Teksystems Global Services",
  location: "Hyderabad",
  logo: teksystemsLogo
};

const roles = [
  {
    title: "Software Engineer",
    period: "May 2025 - Present",
    points: [
      "Lead full-stack development for hospitality project using Spring Boot and React",
      "Implement scalable AWS deployment strategies and optimize application performance",
      "Drive Agile development practices with Git version control and continuous integration"
    ]
  },
  {
    title: "Associate Engineer",
    period: "October 2023 - May 2025",
    points: [
      "Developed robust backend services with Spring Boot and integrated React-based user interfaces",
      "Managed application deployment and maintenance using AWS cloud infrastructure",
      "Collaborated effectively in Agile teams utilizing Git workflows and monitoring tools"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building scalable solutions across the full development lifecycle
          </p>
        </div>
        {/* Single Company Card */}
        <div className="bg-gradient-secondary rounded-xl p-8 shadow-md border border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain rounded-lg bg-white p-2" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">{company.name}</h3>
                <div className="flex items-center text-muted-foreground">
                  <span className="mr-2">{company.location}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Roles List */}
          <div className="space-y-8 pl-0 sm:pl-8 border-l-0 sm:border-l-2 border-primary/30">
            {roles.map((role, index) => (
              <div key={index} className="relative">
                {/* Timeline dot for desktop */}
                <div className="hidden sm:block absolute -left-5 top-2 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <span className="text-lg font-semibold text-primary">{role.title}</span>
                  <span className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    {role.period}
                  </span>
                </div>
                <ul className="space-y-2 ml-0 sm:ml-6">
                  {role.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;