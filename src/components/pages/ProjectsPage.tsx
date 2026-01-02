import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const projects = [
  {
    title: "AfyaSoko Technologies Ltd",
    description:
      "A platform connecting patients to healthcare providers & wellness vendors. Features an e-commerce platform and live consultation sessions.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    role: "Co-Founder & Lead Frontend Developer",
    year: "May 2025 - Present",
    liveUrl: "https://afyasoko.com",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
  {
    title: "SafePulse AI",
    description:
      "An offline alert system designed to alert close friends & family members as well as community helplines/toll lines.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Python", "Lisk"],
    role: "Founder & Software Engineer",
    year: "Sept 2025 - Present",
    liveUrl: "https://safepulseai.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Ardo Thriving Hub",
    description:
      "A women-led, dynamic, and comprehensive space designed to empower both individuals and businesses to thrive.",
    tags: ["Next.js", "TypeScript", "Node.js", "n8n"],
    role: "Fullstack Developer",
    year: "May 2025",
    liveUrl: "https://ardothrivinghub.org",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    title: "Amani Assist",
    description: "A modern business website for Amani Assist that showcases their professional services.",
    tags: ["Next.js", "TypeScript", "n8n"],
    role: "Fullstack Developer",
    year: "Feb 2025",
    liveUrl: "https://amaniassist.com",
    githubUrl: "https://github.com/Geena254/amaniassist",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "M-TREAT Platform",
    description:
      "Telehealth platform enabling remote connection of hospitals, patients and pharmacies as well as consultations between patients and healthcare providers across East Africa.",
    tags: ["Vue.js", "Python", "Docker", "Kubernetes"],
    role: "Lead Frontend Developer",
    year: "Jan 2025 - April 2025",
    liveUrl: "https://mtreat.health",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    title: "FinTrack Mobile",
    description:
      "Personal finance management app helping users track expenses, set budgets, and achieve financial goals.",
    tags: ["React Native", "GraphQL", "Firebase"],
    role: "Fullstack Developer",
    year: "2022",
    liveUrl: "https://fintrack.app",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

interface ProjectsPageProps {
  onNavigate?: (page: string) => void;
}

const ProjectsPage = ({ onNavigate }: ProjectsPageProps) => {
  return (
    <div className="min-h-screen py-8 px-8 md:px-16 lg:px-24 bg-transparent">
      {/* Page Header */}
      <Header onNavigate={onNavigate} />

      <div className="max-w-5xl mx-auto pt-8">
        {/* Section Header */}
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-100">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Selected works from my portfolio</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group certification-card opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Thumbnail */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg aspect-video bg-secondary">
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground mt-2 block">{project.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">{project.role}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
