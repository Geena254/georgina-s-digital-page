import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const projects = [
  {
    title: "AfyaSoko Technologies Ltd",
    description:
      "A platform connecting African developers with global opportunities. Features job listings, mentorship programs, and community forums.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    role: "Co-Founder & Lead Frontend Developer",
    year: "May 2025 - Present",
  },
  {
    title: "SafePulse AI",
    description:
      "An e-learning platform serving 10,000+ students with interactive courses, live sessions, and progress tracking.",
    tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC"],
    role: "Founder & Software Engineer",
    year: "2023",
  },
  {
    title: "FinTrack Mobile",
    description:
      "Personal finance management app helping users track expenses, set budgets, and achieve financial goals.",
    tags: ["React Native", "GraphQL", "Firebase"],
    role: "Fullstack Developer",
    year: "2022",
  },
  {
    title: "M-TREAT Platform",
    description:
      "Telehealth platform enabling remote connection of hospitals, patients and pharmacies as well as consultations between patients and healthcare providers across East Africa.",
    tags: ["Vue.js", "Python", "Docker", "Kubernetes"],
    role: "Lead Frontend Developer",
    year: "Jan 2025 - April 2025",
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
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Year */}
                <div className="md:w-24 flex-shrink-0">
                  <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
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
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
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
