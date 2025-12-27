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
    <nav className="nav-sidebar rounded-r-2xl">
      <div className="flex flex-col h-1/2 justify-center py-8">
        {/* Navigation Links */}
        <div className="flex flex-col gap-1">
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
      </div>
    </nav>
  );
};

export default Sidebar;
