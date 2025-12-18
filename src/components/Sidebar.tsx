import { Home, User, Briefcase, Award, Mail } from "lucide-react";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  return (
    <nav className="nav-sidebar">
      <div className="flex flex-col h-full py-8">
        {/* Logo/Initials */}
        <div className="px-5 mb-12">
          <div className="w-10 h-10 rounded-full bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-serif text-lg font-semibold">
              GK
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col gap-1">
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

        {/* Footer */}
        <div className="px-5 mt-auto">
          <div className="nav-sidebar:hover:opacity-100 opacity-0 transition-opacity duration-300">
            <p className="text-xs text-sidebar-foreground/50 nav-label">
              © 2024 Georgina Kimani
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
