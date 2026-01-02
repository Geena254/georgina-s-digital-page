import { Home, User, Briefcase, Award, Mail, Clock, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "experience",
    label: "Exp",
    icon: Clock,
  },
  {
    id: "projects",
    label: "Projects",
    icon: Briefcase,
  },
  {
    id: "certifications",
    label: "Certs",
    icon: Award,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="nav-sidebar rounded-r-2xl hidden md:block">
        <div className="flex flex-col h-full py-8">
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link ${currentPage === item.id ? "active" : ""}`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span className="nav-label">{item.label === "Certs" ? "Certifications" : item.label}</span>
              </button>
            ))}
          </div>

        </div>
      </nav>

      {/* Mobile/Tablet Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
        {/* Transparent background with subtle blur */}
        <div className="absolute inset-0 backdrop-blur-sm bg-background/80" />
        
        <div className="relative flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative flex flex-col items-center gap-0.5 min-w-[2.5rem] group"
              >
                {/* Active indicator pill */}
                <div 
                  className={`absolute -top-1 w-6 h-1 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-primary opacity-100 scale-100" 
                      : "opacity-0 scale-0"
                  }`} 
                />
                
                {/* Icon container with glow effect */}
                <div 
                  className={`relative p-1.5 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-primary/20 scale-110" 
                      : "bg-background/50 group-hover:bg-background/70"
                  }`}
                >
                  <item.icon 
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive 
                        ? "text-primary" 
                        : "text-foreground/70 group-hover:text-foreground"
                    }`} 
                  />
                  
                  {/* Glow effect for active item */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md -z-10" />
                  )}
                </div>
                
                {/* Label */}
                <span 
                  className={`text-[9px] font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-primary" 
                      : "text-foreground/60 group-hover:text-foreground/80"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
          
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative flex flex-col items-center gap-0.5 min-w-[2.5rem] group"
          >
            <div className="relative p-1.5 rounded-lg transition-all duration-300 bg-background/50 group-hover:bg-background/70">
              <Menu className="w-4 h-4 text-foreground/70 group-hover:text-foreground transition-colors" />
            </div>
            <span className="text-[9px] font-medium text-foreground/60 group-hover:text-foreground/80">
              More
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div 
            className="absolute bottom-20 left-4 right-4 bg-card border border-border rounded-2xl p-6 shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Connect</h3>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Follow me on social media</p>
                <SocialLinks variant="footer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
