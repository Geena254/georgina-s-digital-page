import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <div className="space-y-8">
          {/* Greeting */}
          <p className="text-muted-foreground font-sans text-lg tracking-wide opacity-0 animate-fade-in-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-tight opacity-0 animate-fade-in-up animation-delay-100">
            Georgina<br />
            <span className="text-primary">Kimani</span>
          </h1>

          {/* Roles */}
          <div className="flex flex-wrap gap-4 text-lg md:text-xl text-muted-foreground font-sans opacity-0 animate-fade-in-up animation-delay-200">
            <span className="border-b-2 border-primary pb-1">Founder</span>
            <span className="text-border">•</span>
            <span className="border-b-2 border-accent pb-1">Fullstack Developer</span>
            <span className="text-border">•</span>
            <span className="border-b-2 border-gold pb-1">Mentor</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed font-sans opacity-0 animate-fade-in-up animation-delay-300">
            Crafting digital experiences that bridge innovation and accessibility. 
            Building the future of web, one line of code at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="group"
              onClick={() => onNavigate("projects")}
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-12 right-12 hidden lg:block opacity-0 animate-fade-in-up animation-delay-500">
          <div className="text-9xl font-serif text-border/30 select-none">
            &ldquo;
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
