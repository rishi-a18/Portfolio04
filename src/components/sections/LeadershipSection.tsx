import { Users, Calendar, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/AnimatedSection";

const metrics = [
  { value: "5+", label: "Workshops Organized", icon: Calendar },
  { value: "100+", label: "Participants Engaged", icon: Users },
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

        <AnimatedSection animation="scale" delay={100}>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Role Info */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-primary" />
                      <Badge variant="secondary">Current Role</Badge>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Secretary</h3>
                    <p className="text-primary font-medium text-lg mb-4">
                      Yuktha Dev Squad Club
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      As Secretary of the Yuktha Dev Squad Club, I spearhead
                      technical initiatives, organize workshops, and foster a
                      collaborative environment for students to explore emerging
                      technologies. My role involves coordinating events, managing
                      club operations, and mentoring fellow students in their
                      technical journey.
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="bg-primary/5 p-8 flex flex-col justify-center">
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
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
