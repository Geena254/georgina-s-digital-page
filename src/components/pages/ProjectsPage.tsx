import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Header from "@/components/Header";
import ardoThrivingHubImg from "@/assets/ardo-thriving-hub.png";
import appyDropImg from "@/assets/projects/appydrop.webp";
import amaniAssistImg from "@/assets/projects/amani-assist.webp";
import afyaSokoImg from "@/assets/projects/afyasoko.webp";
import bloombodyImg from "@/assets/projects/bloombody.webp";
import shangaTatuImg from "@/assets/projects/shangatatu.webp";

const projects = [
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
    title: "AfyaSoko Technologies Ltd",
    description:
      "A platform connecting patients to healthcare providers & wellness vendors. Features an e-commerce platform and live consultation sessions.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "MongoDB"],
    role: "Co-Founder & Lead Frontend Engineer",
    year: "May 2025 - Present",
    liveUrl: "https://afyasoko.com",
    thumbnail: afyaSokoImg,
  },
  {
    title: "Bloombody",
    description:
      "An AI-powered body composition tracker that helps users monitor their fitness journey with intelligent analysis and personalized insights.",
    tags: ["React", "TypeScript", "TensorFlow.js", "Node.js", "MongoDB"],
    role: "Fullstack Developer",
    year: "2025",
    liveUrl: "https://bloombody.vercel.app",
    thumbnail: bloombodyImg,
  },
  {
    title: "Ardo Thriving Hub",
    description:
      "A women-led, dynamic, and comprehensive space designed to empower both individuals and businesses to thrive.",
    tags: ["Next.js", "TypeScript", "Node.js", "n8n"],
    role: "Fullstack Developer",
    year: "May 2025",
    liveUrl: "https://ardothrivinghub.org",
    thumbnail: ardoThrivingHubImg,
  },
  {
    title: "AppyDrop Delivery",
    description:
      "A premium drinks delivery platform offering fast 15-45 minute delivery of craft beers, fine wines, cocktails, spirits, and non-alcoholic options.",
    tags: ["Next.js", "TypeScript", "Python", "Django Rest Framework", "Supabase"],
    role: "Fullstack Developer",
    year: "May 2025",
    liveUrl: "https://appydrop.netlify.app",
    thumbnail: appyDropImg,
  },
  {
    title: "Amani Assist",
    description:
      "A modern business website for Amani Assist that showcases their professional support services with a focus on discreet, reliable, and professional assistance.",
    tags: ["Next.js", "TypeScript", "n8n"],
    role: "Fullstack Developer",
    year: "Feb 2025",
    liveUrl: "https://amaniassist.vercel.app",
    githubUrl: "https://github.com/Geena254/amaniassist",
    thumbnail: amaniAssistImg,
  },
  {
    title: "Shanga Tatu",
    description:
      "A dynamic DJ portfolio website elevating the electronic music scene with cutting-edge house and techno beats from Kenya to the world. Features event bookings, mixes, and artistry showcases.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "n8n"],
    role: "Frontend Developer",
    year: "August 2025",
    liveUrl: "https://shangatatu.vercel.app",
    thumbnail: shangaTatuImg,
  },
  {
    title: "M-TREAT Platform",
    description:
      "Telehealth platform enabling remote connection of hospitals, patients and pharmacies as well as consultations between patients and healthcare providers across East Africa.",
    tags: ["Vue.js", "Python", "Docker", "Kubernetes"],
    role: "Lead Frontend Developer",
    year: "Jan 2025 - April 2025",
    liveUrl: "https://mtreat.com",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
  },
  {
    title: "FinTrack Mobile",
    description:
      "Personal finance management app helping users track expenses, set budgets, and achieve financial goals.",
    tags: ["React Native", "GraphQL", "Firebase"],
    role: "Fullstack Developer",
    year: "2023",
    liveUrl: "https://fintrack.app",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

interface ProjectsPageProps {
  onNavigate?: (page: string) => void;
}

const ProjectsPage = ({ onNavigate }: ProjectsPageProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  }, [selectedIndex]);

  const goToPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToNext, goToPrev]);

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
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className="relative overflow-hidden rounded-lg aspect-video bg-secondary w-full cursor-zoom-in group/thumb"
                  >
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-foreground" />
                    </div>
                  </button>
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

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-sm border-border">
          <DialogTitle className="sr-only">{selectedProject?.title} - Full Size Image</DialogTitle>
          <div className="relative">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
              onClick={goToPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {selectedProject && (
              <img
                src={
                  typeof selectedProject.thumbnail === "string" && selectedProject.thumbnail.includes("unsplash")
                    ? selectedProject.thumbnail.replace("w=600&h=400", "w=1200&h=800")
                    : selectedProject.thumbnail
                }
                alt={`${selectedProject.title} - full size`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
            {selectedProject && (
              <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-semibold text-foreground">{selectedProject.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedIndex !== null ? selectedIndex + 1 : 0} / {projects.length} — Use ← → arrows to navigate
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;
