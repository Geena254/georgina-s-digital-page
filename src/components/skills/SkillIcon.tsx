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
import { Database, Smartphone, Globe, CreditCard } from "lucide-react";

type SkillIconProps = {
  skill: string;
  className?: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Frontend
  "React": SiReact,
  "React Native": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Vue.js": SiVuedotjs,
  "Angular": SiAngular,
  "Svelte": SiSvelte,
  "Redux": SiRedux,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  
  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Django DRF": SiDjango,
  "Flask": SiFlask,
  "FastAPI": SiFastapi,
  "Spring Boot": SiSpring,
  "Laravel": SiLaravel,
  "Ruby on Rails": SiRubyonrails,
  
  // Languages
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "C": SiC,
  
  // Databases
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "SQLite": SiSqlite,
  "Redis": SiRedis,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  
  // Tools
  "GraphQL": SiGraphql,
  "Git": SiGit,
  "Docker": SiDocker,
  "Figma": SiFigma,
  "Nginx": SiNginx,
  "n8n": SiN8N,
  
  // DevOps
  "Kubernetes": SiKubernetes,
  "Terraform": SiTerraform,
  "Jenkins": SiJenkins,
  "Ansible": SiAnsible,
  "GitHub Actions": SiGithubactions,
  "CircleCI": SiCircleci,
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,
  "Elasticsearch": SiElasticsearch,
  
  // Cloud
  "AWS": SiAmazon,
  "Google Cloud": SiGooglecloud,
  "DigitalOcean": SiDigitalocean,
  "Heroku": SiHeroku,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
  
  // APIs
  "Stripe": SiStripe,
  "Twilio": SiTwilio,
  "REST APIs": Globe,
  "MPESA": CreditCard,
  "Whatsapp": SiWhatsapp,
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
