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
  apis: "APIs",
};

const categoryOrder = ["frontend", "backend", "languages", "databases", "tools", "apis"];

const FloatingSkills = ({ skills, mainSkillsCount = 5 }: FloatingSkillsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const mainSkills = skills.slice(0, mainSkillsCount);
  const remainingSkills = skills.slice(mainSkillsCount);
  const remainingCount = remainingSkills.length;

  // Group remaining skills by category
  const groupedSkills = remainingSkills.reduce((acc, skill) => {
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

      {/* Expanded skills panel - grouped by category */}
      {isExpanded && (
        <div 
          className="absolute left-0 md:left-full top-full md:top-0 mt-4 md:mt-0 md:ml-6 bg-card border border-border rounded-xl p-4 shadow-xl
                     animate-fade-in-up min-w-[280px] md:min-w-[320px] z-20 max-h-[60vh] overflow-y-auto"
        >
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            All Skills
          </h4>
          <div className="space-y-4">
            {sortedCategories.map((category) => (
              <div key={category}>
                <h5 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  {categoryLabels[category] || category}
                </h5>
                <div className="grid grid-cols-2 gap-2">
                  {groupedSkills[category].map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 
                                 transition-all duration-200 animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'forwards' }}
                    >
                      <SkillIcon skill={skill.name} className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                      <span className="text-xs md:text-sm text-foreground truncate">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingSkills;
