import { ExternalLink, Github, Plane, BookOpen, Car } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const projects = [
  {
    title: "Flight Management System",
    description:
      "A comprehensive airline management application enabling flight booking, scheduling, and passenger record management with a secure admin panel.",
    icon: Plane,
    technologies: ["Java", "SQL", "Servlets", "JSP", "Apache Tomcat"],
    featured: true,
  },
  {
    title: "Flashcards Game",
    description:
      "An interactive learning game with flashcards to enhance memory and knowledge retention through engaging gameplay mechanics.",
    icon: BookOpen,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Car Rental Website",
    description:
      "A user-friendly car rental platform showcasing available vehicles with a clean, responsive interface for browsing and booking.",
    icon: Car,
    technologies: ["HTML", "CSS"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills through real-world applications
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fade-up" delay={index * 150}>
              <Card
                className={`bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-2 group h-full flex flex-col ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        project.featured
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10"
                      }`}
                    >
                      <project.icon
                        className={`w-6 h-6 ${
                          project.featured ? "" : "text-primary"
                        }`}
                      />
                    </div>
                    {project.featured && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-normal text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
