import { Code, Globe, Database, Wrench, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "Servlets", "JSP"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: ["Apache Tomcat", "JDBC", "Eclipse IDE"],
  },
  {
    title: "Core CS Concepts",
    icon: BookOpen,
    skills: ["DSA", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Currently Learning",
    icon: Sparkles,
    skills: ["Cloud Computing", "Generative AI"],
    isLearning: true,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set spanning programming, web development, and emerging technologies
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} animation="scale" delay={index * 100}>
              <Card
                className={`bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 h-full ${
                  category.isLearning ? "border-primary/30 glow-pink" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        category.isLearning
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10"
                      }`}
                    >
                      <category.icon
                        className={`w-5 h-5 ${
                          category.isLearning ? "" : "text-primary"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.title}</h3>
                      {category.isLearning && (
                        <Badge variant="secondary" className="text-xs mt-1">
                          In Progress
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant={category.isLearning ? "default" : "secondary"}
                        className="font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
