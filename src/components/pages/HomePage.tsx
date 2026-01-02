import { ArrowRight } from "lucide-react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useTypingAnimation } from "@/hooks/use-typing-animation";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const roles = ["Founder", "Fullstack Developer", "Mentor"];
const roleGradients = [
  "bg-gradient-to-r from-primary via-accent to-gold",
  "bg-gradient-to-r from-accent via-gold to-primary",
  "bg-gradient-to-r from-gold via-primary to-accent",
];
const roleGlows = [
  "drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]",
  "drop-shadow-[0_0_25px_hsl(var(--accent)/0.5)]",
  "drop-shadow-[0_0_25px_hsl(var(--gold)/0.5)]",
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { currentText, currentTextIndex, isFading } = useTypingAnimation({
    texts: roles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 2500,
  });

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-8 bg-transparent">
      {/* Header */}
      <div className="mb-8 opacity-0 animate-fade-in-up flex items-center justify-between">
        <h1
          onClick={() => onNavigate("home")}
          className="font-serif text-2xl font-semibold text-foreground relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer"
        >
          Georgina
        </h1>
        <div className="flex items-center gap-3">
          {/* Social Links */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
          >
            <SiLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
          >
            <SiX className="w-4 h-4" />
          </a>
          
          <div className="w-px h-6 bg-border mx-1" />
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate("contact")}
            className="group"
          >
            Contact Me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Greeting */}
              <p className="text-muted-foreground font-sans text-3xl tracking-wide opacity-0 animate-fade-in-up">
                Hello!
                <br /> Thank you for being here!
              </p>

              {/* Roles - Typing Animation with Gradient */}
              <div className="h-16 flex items-center text-2xl sm:text-3xl md:text-4xl font-sans opacity-0 animate-fade-in-up animation-delay-200">
                <span
                  className={`pb-2 font-medium transition-all duration-500 ${roleGradients[currentTextIndex]} ${roleGlows[currentTextIndex]} bg-clip-text text-transparent ${isFading ? "opacity-50" : "opacity-100"}`}
                >
                  {currentText}
                  <span className="animate-pulse ml-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_15px_hsl(var(--primary)/0.4)]">
                    |
                  </span>
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-sans opacity-0 animate-fade-in-up animation-delay-300">
                Crafting digital experiences that bridge innovation and accessibility. Building the future of web, one
                line of code at a time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up animation-delay-400">
                <Button size="lg" className="group" onClick={() => onNavigate("projects")}>
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => onNavigate("contact")}>
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end opacity-0 animate-fade-in-up animation-delay-200">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-gold/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105">
                  <img
                    src={profilePhoto}
                    alt="Georgina Kimani - Fullstack Developer and Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div
                  className="absolute -inset-2 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow"
                  style={{ animationDuration: "20s" }}
                />
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-12 right-12 hidden lg:block opacity-0 animate-fade-in-up animation-delay-500">
            <div className="text-9xl font-serif text-border/30 select-none">&ldquo;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
