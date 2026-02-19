import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rishitha-reddy-sanapathi-4b13a52b7/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/rishi-a18",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "mailto:rishithakrishs99@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-gradient mb-4">
              Rishitha Reddy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Continuously learning Generative AI & Cloud Computing to build
              innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2026 Sanapathi Rishitha reddy
          </p>
        </div>
      </div>
    </footer>
  );
}
