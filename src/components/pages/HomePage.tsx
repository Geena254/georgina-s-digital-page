import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      {/* Header */}
      <div className="mb-8 opacity-0 animate-fade-in-up">
        <h1 className="font-serif text-2xl font-semibold text-foreground">Georgina</h1>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-5xl w-full">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Greeting */}
              <p className="text-muted-foreground font-sans text-lg tracking-wide opacity-0 animate-fade-in-up">
                Hello!
                <br /> Thank you for being here!
              </p>

              {/* Roles */}
              <div className="flex flex-wrap gap-2 sm:gap-4 text-base sm:text-lg md:text-xl text-muted-foreground font-sans opacity-0 animate-fade-in-up animation-delay-200">
                <span className="border-b-2 border-primary pb-1">Founder</span>
                <span className="text-border">•</span>
                <span className="border-b-2 border-accent pb-1">Fullstack Developer</span>
                <span className="text-border">•</span>
                <span className="border-b-2 border-gold pb-1">Mentor</span>
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
