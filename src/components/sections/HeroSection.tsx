import { Button } from "@/components/ui/button";
import { MapPin, Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const roles = [
  "Final Year B.Tech IT Student",
  "Web Developer",
  "Generative AI Learner",
];

export function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="animate-fade-up">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/30 glow-pink p-1">
                <img 
                  src={profilePhoto} 
                  alt="Sanapathi Rishitha Reddy" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="animate-fade-up animation-delay-100">
              <p className="text-primary font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                Sanapathi{" "}
                <span className="text-gradient">Rishitha Reddy</span>
              </h1>
            </div>

            <div className="animate-fade-up animation-delay-200 mb-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      index === 2
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-up animation-delay-300 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Rajahmundry, Andhra Pradesh, India</span>
              </div>
            </div>

            <div className="animate-fade-up animation-delay-400 flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button
                onClick={() => handleNavClick("#projects")}
                className="glow-pink"
              >
                View Projects
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download="Rishitha_Reddy_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleNavClick("#contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up animation-delay-400 flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/rishitha-reddy-sanapathi-4b13a52b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/rishi-a18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:rishithakrishs99@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleNavClick("#about")}
            className="rounded-full"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
