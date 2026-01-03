import { useState } from "react";
import { ArrowRight, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    // Create a link to download the resume
    // For now, this will trigger a download - you can replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Georgina_Resume.pdf';
    link.click();
  };

  return (
    <div className="mb-8 opacity-0 animate-fade-in-up">
      <div className="flex items-center justify-between sm:bg-card/30 sm:backdrop-blur-md sm:border sm:border-border/50 sm:rounded-xl sm:px-6 sm:py-3 sm:shadow-lg">
        <h1
          onClick={() => onNavigate?.("home")}
          className="font-serif text-2xl font-semibold text-foreground relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer"
        >
          Georgina
        </h1>
        
        {/* Desktop: Social links and buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <SocialLinks variant="header" />
          
          <div className="w-px h-6 bg-border mx-1" />
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDownloadResume}
            className="group"
          >
            <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Resume
          </Button>
          
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
          className="sm:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
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
        <div className="sm:hidden mt-4 p-4 bg-card/90 backdrop-blur-md border border-border rounded-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
              <SocialLinks variant="footer" />
            </div>
            <div className="flex flex-col gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  handleDownloadResume();
                  setMenuOpen(false);
                }}
                className="group w-full justify-start"
              >
                <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
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
        </div>
      )}
    </div>
  );
};

export default Header;