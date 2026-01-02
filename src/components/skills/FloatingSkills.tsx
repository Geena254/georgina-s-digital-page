import { useState } from "react";
import { Plus, X } from "lucide-react";
import SkillIcon from "./SkillIcon";

type Skill = {
  name: string;
  category: string;
};

type FloatingSkillsProps = {
  skills: Skill[];
  mainSkillsCount?: number;
};

const FloatingSkills = ({ skills, mainSkillsCount = 5 }: FloatingSkillsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const mainSkills = skills.slice(0, mainSkillsCount);
  const remainingSkills = skills.slice(mainSkillsCount);
  const remainingCount = remainingSkills.length;

  return (
    <div className="relative">
      {/* Main floating skills */}
      <div className="flex flex-col items-center gap-4">
        {mainSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            style={{ 
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div 
              className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center
                         transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-lg
                         hover:-translate-y-1 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <SkillIcon skill={skill.name} className="w-7 h-7 text-foreground transition-colors group-hover:text-primary" />
            </div>
            {/* Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
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
            className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center
                       transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary
                       animate-fade-in-up opacity-0 group relative"
            style={{ animationDelay: `${200 + mainSkillsCount * 100}ms`, animationFillMode: 'forwards' }}
          >
            {isExpanded ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <span className="text-lg font-semibold text-primary">+{remainingCount}</span>
            )}
            {/* Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                            transition-all duration-200 pointer-events-none whitespace-nowrap z-10">
              <div className="bg-foreground text-background px-3 py-1.5 rounded-md text-sm font-medium shadow-lg">
                {isExpanded ? "Show less" : "View all skills"}
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Expanded skills panel */}
      {isExpanded && (
        <div 
          className="absolute left-full ml-6 top-0 bg-card border border-border rounded-xl p-4 shadow-xl
                     animate-fade-in-up min-w-[200px] z-20"
        >
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            All Skills
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {remainingSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-primary/10 
                           transition-all duration-200 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <SkillIcon skill={skill.name} className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingSkills;
