import { Award, Sparkles, Trophy, ExternalLink, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const achievements = [
  {
    title: "Infosys Springboard Pragati Program",
    description:
      "Selected for the prestigious Infosys Springboard Pragati Program, focusing on skill development and career readiness for women in technology.",
    icon: Trophy,
    featured: false,
    link: "/cohort-6-completion.pdf",
  },
  {
    title: "AWS Skill Builder Program",
    description:
      "Selected for the Infosys Springboard AWS Elite Learning Cohort (Cohort 3). Granted complimentary access to the premium AWS Skill Builder Tech Program for hands-on learning in Cloud, Cybersecurity, Data Analytics, and AI.",
    icon: Cloud,
    featured: true,
  },
  {
    title: "AI Tools Workshop Conductor",
    description:
      "Conducted a workshop on AI Tools usage, sharing knowledge about practical applications of artificial intelligence with peers.",
    icon: Sparkles,
  }
];

const certifications = [
  { name: "Java Programming", link: "https://drive.google.com/file/d/1cwx_cCRV6kIIEIVK4d139-y7_I8wZ10k/view?usp=sharing" },
  { name: "Data Structures through Java", link: "https://drive.google.com/file/d/1Y-lgoOXuvizt--kh8vkeZbgw20_j4TT_/view?usp=sharing" },
  { name: "Advanced Java", link: "https://drive.google.com/file/d/1m-NeBvBdVQnLHc2_s036XCy55baFAoYd/view?usp=sharing" },
  { name: "Oracle Cloud Certification Badge", link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C9F396176B3D96499E3444479ABCFE4F04A3BFA2DE03FB56F107A169895AD7DB" },
  { name: "JavaScript - guvi.in", link: "https://drive.google.com/file/d/1Pfu8rwoHA43ee-01JM0XmKq1lrZA0pc4/view?usp=sharing" },
  { name: "HTML, CSS - Great Learning Academy", link: "#" },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-card/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                  className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 glow-pink hover:scale-[1.01] transition-transform duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                        <achievement.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-primary/20 text-primary border-none">
                          Featured
                        </Badge>
                        <h3 className="font-semibold text-xl mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {achievement.description}
                        </p>
                        {achievement.link && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                              View Certificate <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
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
                <Card className="bg-card border-border hover:border-primary/50 transition-all hover:scale-[1.02] duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <achievement.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {achievement.description}
                        </p>
                        {achievement.link && (
                          <div className="mt-auto">
                            <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                              <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                                View Certificate <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
        </div>

        {/* Certifications */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between p-4 bg-secondary/40 rounded-xl border border-border/50 hover:border-primary/30 transition-all hover:scale-[1.02] duration-300 group backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm sm:text-base leading-tight">{cert.name}</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary hover:bg-primary/10 transition-colors">
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
