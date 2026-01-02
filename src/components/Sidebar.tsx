import { Home, User, Briefcase, Award, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

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

          {/* Theme Toggle */}
          <div className="mt-auto pt-4 border-t border-sidebar-border">
            <button
              onClick={toggleTheme}
              className="nav-link group"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <div className="relative w-5 h-5 flex-shrink-0">
                <Sun className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                <Moon className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
              <span className="nav-label">{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
        {/* Transparent background with subtle blur */}
        <div className="absolute inset-0 backdrop-blur-sm" />
        
        <div className="relative flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative flex flex-col items-center gap-0.5 min-w-[3.5rem] group"
              >
                {/* Active indicator pill */}
                <div 
                  className={`absolute -top-1 w-8 h-1 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-primary opacity-100 scale-100" 
                      : "opacity-0 scale-0"
                  }`} 
                />
                
                {/* Icon container with glow effect */}
                <div 
                  className={`relative p-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-primary/20 scale-110" 
                      : "bg-background/50 group-hover:bg-background/70"
                  }`}
                >
                  <item.icon 
                    className={`w-5 h-5 transition-all duration-300 ${
                      isActive 
                        ? "text-primary" 
                        : "text-foreground/70 group-hover:text-foreground"
                    }`} 
                  />
                  
                  {/* Glow effect for active item */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md -z-10" />
                  )}
                </div>
                
                {/* Label */}
                <span 
                  className={`text-[10px] font-medium transition-all duration-300 ${
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
          
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="relative flex flex-col items-center gap-0.5 min-w-[3.5rem] group"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="relative p-2 rounded-xl transition-all duration-300 bg-background/50 group-hover:bg-background/70">
              <div className="relative w-5 h-5">
                <Sun 
                  className={`w-5 h-5 absolute text-foreground/70 group-hover:text-foreground transition-all duration-300 ${
                    isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <Moon 
                  className={`w-5 h-5 absolute text-foreground/70 group-hover:text-foreground transition-all duration-300 ${
                    isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`} 
                />
              </div>
            </div>
            <span className="text-[10px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-all duration-300">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
