import { Users, Calendar, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

const metrics = [
  { value: "5+", label: "Workshops Organized", icon: Calendar },
  { value: "300+", label: "Students Participated", icon: Users },
  { value: "30%", label: "Competition Increase", icon: TrendingUp },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Leadership <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading and inspiring through community and technology
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Main Leadership Role */}
          <AnimatedSection animation="scale" delay={100}>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Role Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-primary" />
                      <Badge variant="secondary" className="bg-secondary/50">Previous Role</Badge>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Secretary</h3>
                    <p className="text-primary font-medium text-lg mb-4">
                      Yuktha Dev Squad Club
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      As Secretary of the Yuktha Dev Squad Club, I spearheaded
                      technical initiatives, organized workshops, and fostered a
                      collaborative environment for students to explore emerging
                      technologies. My role involved coordinating events, managing
                      club operations, and mentoring fellow students in their
                      technical journey.
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="bg-primary/5 p-8 flex flex-col justify-center border-l border-border/50">
                    <h4 className="text-lg font-semibold mb-6">Impact Metrics</h4>
                    <div className="space-y-6">
                      {metrics.map((metric, index) => (
                        <AnimatedSection key={metric.label} animation="fade-right" delay={200 + index * 100}>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <metric.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-gradient">
                                {metric.value}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {metric.label}
                              </p>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* New Workshop Role */}
          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:border-primary/40 transition-all group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                      <Badge className="bg-primary/20 text-primary border-none">Event Organizer</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Power BI Analytics Workshop</h3>
                    <p className="text-muted-foreground">
                      Organized and conducted a comprehensive workshop on Power BI, teaching students data visualization techniques, dashboard creation, and analytical storytelling to drive data-informed decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
