import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazon,
  SiFigma
} from "react-icons/si";
import { Database } from "lucide-react";

type SkillIconProps = {
  skill: string;
  className?: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  "Python": SiPython,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "GraphQL": SiGraphql,
  "Git": SiGit,
  "Docker": SiDocker,
  "AWS": SiAmazon,
  "Figma": SiFigma,
};

const SkillIcon = ({ skill, className = "w-6 h-6" }: SkillIconProps) => {
  const IconComponent = iconMap[skill];
  
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  
  // Fallback for skills without specific icons
  return <Database className={className} />;
};

export default SkillIcon;
