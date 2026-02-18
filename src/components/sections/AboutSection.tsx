import { GraduationCap, Target, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and driven by curiosity
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Career Objective */}
          <AnimatedSection animation="fade-left" delay={100}>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Career Objective</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Seeking an entry-level Software Developer role to apply my
                      Java, web development, and database skills to real-world
                      challenges. Eager to grow in a dynamic environment while
                      exploring emerging technologies like Cloud Computing and
                      Generative AI.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-right" delay={200}>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="font-medium">B.Tech in Information Technology</p>
                    <p className="text-muted-foreground text-sm">
                      JNTU-GV College of Engineering, Vizianagaram
                    </p>
                    <p className="text-muted-foreground text-sm">2022 - 2026</p>
                    <div className="mt-2 inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                      <Sparkles className="w-3 h-3" />
                      GPA: 7.95
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Personal Story */}
        <AnimatedSection delay={300}>
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-semibold text-lg mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a final-year B.Tech IT student, I've built a solid foundation
                  in Java, web development, and databases. What excites me most is
                  the intersection of traditional software development with
                  emerging technologies. I'm actively transitioning into{" "}
                  <span className="text-primary font-medium">Generative AI</span>{" "}
                  and{" "}
                  <span className="text-primary font-medium">Cloud Computing</span>
                  , believing these technologies will shape the future of software
                  development. Every project I take on is an opportunity to learn,
                  grow, and create something meaningful.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
