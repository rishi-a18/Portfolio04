import { Award, Sparkles, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

const achievements = [
  {
    title: "Infosys Springboard Pragati Program",
    description:
      "Selected for the prestigious Infosys Springboard Pragati Program, focusing on skill development and career readiness for women in technology.",
    icon: Trophy,
    featured: true,
  },
  {
    title: "AI Tools Workshop Conductor",
    description:
      "Conducted a workshop on AI Tools usage, sharing knowledge about practical applications of artificial intelligence with peers.",
    icon: Sparkles,
  },
];

const certifications = [
  "Python Programming",
  "Web Development Fundamentals",
  "Database Management",
  "Data Structures & Algorithms",
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Achievements & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition and credentials that showcase my commitment to growth
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Achievement */}
        <AnimatedSection animation="scale" delay={100}>
          <div className="max-w-4xl mx-auto mb-8">
            {achievements
              .filter((a) => a.featured)
              .map((achievement) => (
                <Card
                  key={achievement.title}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 glow-pink"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                        <achievement.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-primary/20 text-primary border-none">
                          Featured
                        </Badge>
                        <h3 className="font-semibold text-xl mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </AnimatedSection>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {achievements
            .filter((a) => !a.featured)
            .map((achievement, index) => (
              <AnimatedSection key={achievement.title} animation="fade-up" delay={200 + index * 100}>
                <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <achievement.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={300}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">
              Certifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                >
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
