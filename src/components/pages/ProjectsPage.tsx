import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, X, ZoomIn, ChevronLeft, ChevronRight, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ardoThrivingHubImg from "@/assets/ardo-thriving-hub.png";
import appyDropImg from "@/assets/projects/appydrop.webp";
import amaniAssistImg from "@/assets/projects/amani-assist.webp";
import afyaSokoImg from "@/assets/projects/afyasoko.webp";
import bloombodyImg from "@/assets/projects/bloombody.webp";
import shangaTatuImg from "@/assets/projects/shangatatu.webp";
import safePulseImg from "@/assets/projects/safepulse.webp";
import ecoPulseImg from "@/assets/projects/ecopulse.jpg";
import nasaBioExplorerImg from "@/assets/projects/nasa-bioexplorer.png";

const projects = [
  {
    title: "SafePulse AI",
    description:
      "An offline alert system designed to alert close friends & family members as well as community helplines/toll lines.",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "Lisk", "n8n"],
    role: "Founder & Software Engineer",
    year: "Sept 2025 - Present",
    liveUrl: "https://safepulseai.vercel.app",
    thumbnail: safePulseImg,
  },
  {
    title: "NASA BioExplorer",
    description:
      "AI-powered Bio-Agro Resilience Dashboard connecting NASA's bioscience research with Earth Observation data to understand and predict drought and flood resilience in Kenya's crops.",
    tags: ["React", "TypeScript", "NASA API", "AI/ML", "Data Visualization"],
    role: "Hackathon Project",
    year: "Oct 2025",
    liveUrl: "https://astro-bio-vista.lovable.app",
    thumbnail: nasaBioExplorerImg,
    isHackathon: true,
  },
  {
    title: "EcoPulse",
    description:
      "An environmental tracking platform empowering Kenyans to track environmental impact, report violations, and connect with a community dedicated to conservation for a greener future.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    role: "Hackathon Project",
    year: "Nov 2024",
    liveUrl: "https://eco-vibes-ai-play-1.onrender.com",
    thumbnail: ecoPulseImg,
    isHackathon: true,
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

interface Project {
  title: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  liveUrl: string;
  githubUrl?: string;
  thumbnail: string;
  isHackathon?: boolean;
}

const ProjectCard = ({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (index: number) => void;
}) => (
  <article className="group certification-card h-full flex flex-col">
    {/* Thumbnail */}
    <div className="flex-shrink-0">
      <button
        onClick={() => onImageClick(index)}
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
    <div className="flex-1 space-y-3 mt-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.isHackathon && (
            <Badge
              variant="secondary"
              className="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30 text-[10px] px-1.5 py-0"
            >
              <Trophy className="w-3 h-3 mr-1" />
              Hackathon
            </Badge>
          )}
        </div>
        <span className="text-sm text-primary font-medium">{project.role}</span>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-sm">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-sm">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        {project.githubUrl && (
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground h-8 px-2" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground h-8 px-2" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live
            </a>
          </Button>
        )}
      </div>
    </div>
  </article>
);

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
    <div className="min-h-screen py-8 px-4 sm:px-8 md:px-16 lg:px-24 bg-transparent">
      {/* Page Header */}
      <Header onNavigate={onNavigate} />

      <div className="max-w-5xl mx-auto pt-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 opacity-0 animate-fade-in-up animation-delay-100">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">My Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Selected works from my portfolio</p>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden opacity-0 animate-fade-in-up animation-delay-200">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              dragFree: false,
              skipSnaps: false,
              duration: 25,
            }}
          >
            <CarouselContent className="-ml-2 transition-transform duration-300 ease-out">
              {projects.map((project, index) => (
                <CarouselItem
                  key={project.title}
                  className="pl-2 basis-[85%] transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  <ProjectCard project={project} index={index} onImageClick={setSelectedIndex} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 transition-transform duration-200 hover:scale-110 active:scale-95" />
              <CarouselNext className="static translate-y-0 transition-transform duration-200 hover:scale-110 active:scale-95" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:block space-y-8">
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
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.isHackathon && (
                        <Badge
                          variant="secondary"
                          className="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30 text-xs px-2 py-0.5"
                        >
                          <Trophy className="w-3 h-3 mr-1" />
                          Hackathon
                        </Badge>
                      )}
                    </div>
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

      {/* CTA Section */}
      <div className="mt-16 text-center opacity-0 animate-fade-in-up animation-delay-500">
        <p className="text-muted-foreground mb-6">Interested in working together?</p>
        <Button size="lg" onClick={() => onNavigate("contact")} className="group">
          Get In Touch
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectsPage;
