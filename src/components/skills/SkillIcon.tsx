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
  SiFigma,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGooglecloud,
  SiDigitalocean,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiDjango,
  SiFlask,
  SiSpring,
  SiLaravel,
  SiRubyonrails,
  SiAngular,
  SiSvelte,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiStripe,
  SiTwilio,
  SiNginx,
  SiAnsible,
  SiGithubactions,
  SiCircleci,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiJavascript,
  SiC,
  SiFastapi,
  SiN8N,
  SiWhatsapp,
} from "react-icons/si";
import { Database, Globe, CreditCard } from "lucide-react";

type SkillIconProps = {
  skill: string;
  className?: string;
};

type IconEntry = {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const iconMap: Record<string, IconEntry> = {
  // Frontend
  "React": { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
  "Angular": { icon: SiAngular, color: "#DD0031" },
  "Svelte": { icon: SiSvelte, color: "#FF3E00" },
  "Redux": { icon: SiRedux, color: "#764ABC" },
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss3, color: "#1572B6" },
  
  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  "Django DRF": { icon: SiDjango, color: "#092E20" },
  "Flask": { icon: SiFlask, color: "#000000" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "Spring Boot": { icon: SiSpring, color: "#6DB33F" },
  "Laravel": { icon: SiLaravel, color: "#FF2D20" },
  "Ruby on Rails": { icon: SiRubyonrails, color: "#CC0000" },
  
  // Languages
  "Python": { icon: SiPython, color: "#3776AB" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "C": { icon: SiC, color: "#A8B9CC" },
  
  // Databases
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "SQLite": { icon: SiSqlite, color: "#003B57" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Supabase": { icon: SiSupabase, color: "#3FCF8E" },
  
  // Tools
  "GraphQL": { icon: SiGraphql, color: "#E10098" },
  "Git": { icon: SiGit, color: "#F05032" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Nginx": { icon: SiNginx, color: "#009639" },
  "n8n": { icon: SiN8N, color: "#EA4B71" },
  
  // DevOps
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "Terraform": { icon: SiTerraform, color: "#7B42BC" },
  "Jenkins": { icon: SiJenkins, color: "#D24939" },
  "Ansible": { icon: SiAnsible, color: "#EE0000" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "CircleCI": { icon: SiCircleci, color: "#343434" },
  "Prometheus": { icon: SiPrometheus, color: "#E6522C" },
  "Grafana": { icon: SiGrafana, color: "#F46800" },
  "Elasticsearch": { icon: SiElasticsearch, color: "#005571" },
  
  // Cloud
  "AWS": { icon: SiAmazon, color: "#FF9900" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  "DigitalOcean": { icon: SiDigitalocean, color: "#0080FF" },
  "Heroku": { icon: SiHeroku, color: "#430098" },
  "Vercel": { icon: SiVercel, color: "#000000" },
  "Netlify": { icon: SiNetlify, color: "#00C7B7" },
  
  // APIs
  "Stripe": { icon: SiStripe, color: "#635BFF" },
  "Twilio": { icon: SiTwilio, color: "#F22F46" },
  "REST APIs": { icon: Globe, color: "#6366F1" },
  "MPESA": { icon: CreditCard, color: "#00A651" },
  "Whatsapp": { icon: SiWhatsapp, color: "#25D366" },
};

const SkillIcon = ({ skill, className = "w-6 h-6" }: SkillIconProps) => {
  const entry = iconMap[skill];
  
  if (entry) {
    const IconComponent = entry.icon;
    return <IconComponent className={className} style={{ color: entry.color }} />;
  }
  
  // Fallback for skills without specific icons
  return <Database className={className} style={{ color: "#6B7280" }} />;
};

export default SkillIcon;
