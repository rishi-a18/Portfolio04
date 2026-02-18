import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    title: "Web Development Intern",
    company: "Inversion Consultancy LLP",
    location: "Remote",
    period: "May 2025 - July 2025",
    type: "Internship",
    responsibilities: [
      "Built responsive, user-focused web interfaces using modern HTML, CSS, and JavaScript",
      "Collaborated with team members on real-world client projects",
      "Implemented best practices for web accessibility and performance",
      "Gained hands-on experience with professional development workflows",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience building real-world applications
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} animation="fade-left" delay={100}>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />

                <Card className="bg-card border-border hover:border-primary/50 transition-colors relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-0.5 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <CardContent className="p-6 ml-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
