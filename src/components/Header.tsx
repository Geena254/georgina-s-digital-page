import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mb-8 opacity-0 animate-fade-in-up">
      <div className="flex items-center justify-between">
        <h1
          onClick={() => onNavigate?.("home")}
          className="font-serif text-2xl font-semibold text-foreground relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer"
        >
          Georgina
        </h1>
        
        {/* Desktop: Social links and contact button */}
        <div className="hidden sm:flex items-center gap-3">
          <SocialLinks variant="header" />
          
          <div className="w-px h-6 bg-border mx-1" />
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate?.("contact")}
            className="group"
          >
            Contact Me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile: Hamburger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="sm:hidden mt-4 p-4 bg-card border border-border rounded-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
              <SocialLinks variant="footer" />
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                onNavigate?.("contact");
                setMenuOpen(false);
              }}
              className="group w-full"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;