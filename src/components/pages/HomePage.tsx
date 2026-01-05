import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/home-profile-optimized.jpg";
import { useTypingAnimation } from "@/hooks/use-typing-animation";
import Header from "@/components/Header";
import mapConnectBg from "@/assets/map-connect-bg.webp";

// Company logos
import powerLearnLogo from "@/assets/logos/power-learn-project.png";
import afyasokoLogo from "@/assets/logos/afyasoko.png";
import shangaTatuLogo from "@/assets/logos/shanga-tatu.jpg";
import ardoThriveLogo from "@/assets/logos/ardo-thrive.png";
import mTreatLogo from "@/assets/logos/m-treat.png";
import chachaLogo from "@/assets/logos/chacha.png";
import amaniAssistLogo from "@/assets/logos/amani-assist.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const roles = ["Software Engineer", "Founder", "Mentor"];
const roleGradients = [
  "bg-gradient-to-r from-primary via-amber-700 to-amber-900",
  "bg-gradient-to-r from-amber-800 via-primary to-amber-700",
  "bg-gradient-to-r from-amber-900 via-amber-700 to-primary",
];
const roleGlows = [
  "drop-shadow-[0_0_25px_hsl(var(--primary)/0.5)]",
  "drop-shadow-[0_0_25px_hsl(35,80%,35%,0.5)]",
  "drop-shadow-[0_0_25px_hsl(35,70%,25%,0.5)]",
];

const companies = [
  { name: "Power Learn Project", logo: powerLearnLogo },
  { name: "AfyaSoko", logo: afyasokoLogo },
  { name: "Shanga Tatu", logo: shangaTatuLogo },
  { name: "Ardo Thrive Hub", logo: ardoThriveLogo },
  { name: "M-Treat", logo: mTreatLogo },
  { name: "Chacha", logo: chachaLogo },
  { name: "Amani Assist", logo: amaniAssistLogo },
];

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { currentText, currentTextIndex, isFading } = useTypingAnimation({
    texts: roles,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 2500,
  });

  return (
    <div className="relative min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-8 bg-transparent overflow-x-hidden">
      {/* Background Image with Pulse Glow */}
      <div
        className="absolute inset-0 z-0 animate-pulse-glow"
        style={{
          backgroundImage: `url(${mapConnectBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-background/60" />
      {/* Header */}
      <div className="relative z-10 flex flex-col flex-1">
        <Header onNavigate={onNavigate} />

        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-5xl w-full">
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Greeting */}
                <p className="text-muted-foreground font-sans text-xl tracking-wide opacity-0 animate-fade-in-up">
                  Hey there!
                  <br /> I am <span className={"font-bold text-2xl"}>Georgina Kimani!</span>
                </p>

                {/* Roles - Typing Animation with Gradient */}
                <div className="h-18 flex items-center text-2xl sm:text-3xl md:text-4xl font-sans opacity-0 animate-fade-in-up animation-delay-200">
                  <span
                    className={`pb-2 font-medium transition-all duration-500 ${roleGradients[currentTextIndex]} ${roleGlows[currentTextIndex]} bg-clip-text text-transparent ${isFading ? "opacity-50" : "opacity-100"}`}
                  >
                    {currentText}
                    <span className="animate-pulse ml-1 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_15px_hsl(var(--primary)/0.4)]">
                      |
                    </span>
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 opacity-0 animate-fade-in-up animation-delay-400">
                  <Button size="sm" className="group sm:h-11 sm:px-8 sm:text-sm" onClick={() => onNavigate("projects")}>
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="sm:h-11 sm:px-8 sm:text-sm"
                    onClick={() => onNavigate("contact")}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-end gap-8 opacity-0 animate-fade-in-up animation-delay-200">
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

                {/* Companies/Clients Logo Gallery - Marquee */}
                <div className="w-full max-w-sm overflow-hidden group/marquee">
                  <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-widest">
                    Worked With
                  </p>
                  <div className="relative">
                    <div className="flex animate-marquee gap-6 group-hover/marquee:[animation-play-state:paused]">
                      {[...companies, ...companies].map((company, index) => (
                        <div
                          key={`${company.name}-${index}`}
                          className="bg-card/50 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center border border-border/50 flex-shrink-0"
                          title={company.name}
                        >
                          <img src={company.logo} alt={company.name} className="w-12 h-12 object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
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
    </div>
  );
};

export default HomePage;
