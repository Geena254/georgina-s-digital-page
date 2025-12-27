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
    <nav className="nav-sidebar rounded-r-2xl">
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
  );
};

export default Sidebar;
