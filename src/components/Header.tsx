import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu, X, Eye, Download, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";
import { ScrollArea } from "@/components/ui/scroll-area";
import ResumePage from "@/components/ResumePage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  const resumeDialogContent = (
    <DialogContent className={`p-0 transition-all duration-300 ${isFullscreen ? 'max-w-[100vw] w-[100vw] h-[100vh] rounded-none' : 'max-w-4xl w-[95vw] h-[90vh]'}`}>
      <DialogHeader className="px-4 py-2 flex flex-row items-center justify-between print:hidden">
        <DialogTitle>Resume</DialogTitle>
        <div className="flex items-center gap-2 mr-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 mr-2" /> : <Maximize2 className="w-4 h-4 mr-2" />}
            {isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleDownloadPDF}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </DialogHeader>
      <ScrollArea className="h-full">
        <div ref={resumeRef}>
          <ResumePage />
        </div>
      </ScrollArea>
    </DialogContent>
  );

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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="group transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
              >
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Resume
              </Button>
            </DialogTrigger>
            <ResumeDialogContent />
          </Dialog>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate?.("contact")}
            className="group transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setMenuOpen(false)}
                    className="group w-full justify-start"
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Resume
                  </Button>
                </DialogTrigger>
                <ResumeDialogContent />
              </Dialog>
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
