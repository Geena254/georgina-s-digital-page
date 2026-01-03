import { useState } from "react";
import { X } from "lucide-react";
import SkillIcon from "./SkillIcon";

type Skill = {
  name: string;
  category: string;
};

type FloatingSkillsProps = {
  skills: Skill[];
  mainSkillsCount?: number;
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  languages: "Languages",
  databases: "Databases",
  tools: "Tools",
  devops: "DevOps",
  cloud: "Cloud",
  frameworks: "Frameworks",
  apis: "APIs",
};

const categoryOrder = ["frontend", "backend", "frameworks", "languages", "databases", "devops", "cloud", "tools", "apis"];

const FloatingSkills = ({ skills, mainSkillsCount = 5 }: FloatingSkillsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const mainSkills = skills.slice(0, mainSkillsCount);
  const remainingCount = skills.length - mainSkillsCount;

  // Group ALL skills by category for the modal
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category.toLowerCase();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort categories by defined order
  const sortedCategories = categoryOrder.filter(cat => groupedSkills[cat]?.length > 0);

  return (
    <div className="relative">
      {/* Main floating skills - horizontal on mobile, vertical on desktop */}
      <div className="flex flex-row md:flex-col items-center gap-3 md:gap-4">
        {mainSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            style={{ 
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div 
              className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-card border border-border flex items-center justify-center
                         transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg
                         hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <SkillIcon skill={skill.name} className="w-5 h-5 md:w-7 md:h-7 text-foreground transition-colors group-hover:text-primary" />
            </div>
            {/* Tooltip - hidden on mobile */}
            <div className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
              <div className="bg-foreground text-background px-3 py-1.5 rounded-md text-sm font-medium shadow-lg">
                {skill.name}
              </div>
            </div>
          </div>
        ))}

        {/* Expand button */}
        {remainingCount > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center
                       transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary
                       animate-fade-in-up opacity-0 group relative"
            style={{ animationDelay: `${200 + mainSkillsCount * 100}ms`, animationFillMode: 'forwards' }}
          >
            {isExpanded ? (
              <X className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            ) : (
              <span className="text-sm md:text-lg font-semibold text-primary">+{remainingCount}</span>
            )}
            {/* Tooltip - hidden on mobile */}
            <div className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
              <div className="bg-foreground text-background px-3 py-1.5 rounded-md text-sm font-medium shadow-lg">
                {isExpanded ? "Show less" : "View all skills"}
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Fullscreen popup overlay - using portal-like fixed positioning */}
      {isExpanded && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
          {/* Background overlay with blur */}
          <div 
            className="absolute inset-0 bg-background/90 backdrop-blur-xl transition-all duration-500"
            onClick={() => setIsExpanded(false)}
          />

          {/* Centered popup modal */}
          <div 
            className="relative bg-card/95 border border-border rounded-2xl p-6 md:p-8 shadow-2xl
                       w-full max-w-3xl max-h-[80vh] overflow-y-auto scroll-smooth
                       animate-[scale-in_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold uppercase tracking-wider text-primary">
                All Skills
              </h4>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <X className="w-6 h-6 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
            <div className="space-y-6">
              {sortedCategories.map((category, catIndex) => (
                <div 
                  key={category}
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: `${catIndex * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <h5 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3 border-b border-border/50 pb-2">
                    {categoryLabels[category] || category}
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {groupedSkills[category].map((skill, index) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/80 border border-border/50 hover:bg-primary/10 hover:border-primary/30
                                   transition-all duration-200 animate-fade-in opacity-0"
                        style={{ animationDelay: `${catIndex * 100 + index * 30}ms`, animationFillMode: 'forwards' }}
                      >
                        <SkillIcon skill={skill.name} className="w-5 h-5 text-foreground" />
                        <span className="text-sm text-foreground truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingSkills;
