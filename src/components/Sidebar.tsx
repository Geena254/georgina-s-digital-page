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
    label: "Certifications",
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
                <span className="nav-label">{item.label}</span>
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
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-sidebar border-t border-sidebar-border safe-area-bottom">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === item.id 
                  ? "text-sidebar-primary bg-sidebar-accent" 
                  : "text-sidebar-foreground/70 hover:text-sidebar-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-foreground transition-all duration-200"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="relative w-5 h-5">
              <Sun className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
              <Moon className={`w-5 h-5 absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
            </div>
            <span className="text-xs font-medium">{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
