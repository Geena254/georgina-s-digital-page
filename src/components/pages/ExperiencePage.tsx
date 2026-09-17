import {
  Calendar,
  MapPin,
  Building,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  HeartPulse,
  Stethoscope,
  Code,
  LucideIcon,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ExperiencePageProps {
  onNavigate: (page: string) => void;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  iconBg: string;
  websiteUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 0,
    title: "Fullstack Developer",
    company: "Gebra Enterprises",
    location: "Nairobi, Kenya",
    period: "2024 - Present",
    description:
      "Started my professional journey building websites and web applications for various clients across different industries.",
    highlights: [
      "Delivered 20+ client projects on time",
      "Learned agile development methodologies",
      "Contributed to open-source projects",
    ],
    icon: Code,
    iconBg: "bg-amber-500/20 text-amber-400",
  },
  {
    id: 1,
    title: "Founder & Software Engineer",
    company: "SafePulse AI",
    location: "Nairobi, Kenya",
    period: "Sept 2025 - Present",
    description:
      "Building an AI-powered safety and emergency response platform to enhance personal security through intelligent threat detection and rapid response systems.",
    highlights: [
      "Architecting AI/ML pipelines for real-time threat detection",
      "Developing mobile-first emergency response features",
      "Leading product strategy and technical roadmap",
    ],
    icon: ShieldCheck,
    iconBg: "bg-blue-500/20 text-blue-400",
  },
  {
    id: 2,
    title: "CTO & Co-Founder",
    company: "Ginilog",
    location: "Nairobi, Kenya",
    period: "Feb 2026 - July 2026",
    description:
      "Co-founded Ginilog, driving technical strategy and product development as Chief Technology Officer.",
    highlights: [
      "Leading technical architecture and engineering team",
      "Defining product roadmap and technology stack",
      "Building scalable infrastructure and systems",
    ],
    icon: Code,
    iconBg: "bg-teal-500/20 text-teal-400",
    websiteUrl: "https://ginilog.com",
  },
  {
    id: 3,
    title: "Mentor & Support Team",
    company: "Power Learn Project",
    location: "Nairobi, Kenya",
    period: "June 2025 - April 2026",
    description:
      "Mentoring aspiring developers through Africa's largest tech skills program, providing guidance on software development best practices and career growth.",
    highlights: [
      "Mentoring 50+ students in web development fundamentals",
      "Providing technical support and code reviews",
      "Creating educational content and learning resources",
    ],
    icon: GraduationCap,
    iconBg: "bg-purple-500/20 text-purple-400",
  },
  {
    id: 4,
    title: "Co-Founder & Lead Frontend Engineer",
    company: "AfyaSoko Technologies Ltd",
    location: "Nairobi, Kenya",
    period: "May 2025 - Dec 2025",
    description:
      "Co-founded a healthcare technology startup focused on connecting patients with medical services and pharmaceutical solutions across Kenya.",
    highlights: [
      "Built the core frontend architecture using React and TypeScript",
      "Designed and implemented intuitive healthcare booking interfaces",
      "Integrated payment gateways for seamless transactions",
    ],
    icon: HeartPulse,
    iconBg: "bg-rose-500/20 text-rose-400",
  },
  {
    id: 5,
    title: "Fullstack Developer",
    company: "M-TREAT Platform",
    location: "Nairobi, Kenya",
    period: "Jan 2025 - April 2025",
    description:
      "Developed and maintained a telemedicine platform connecting patients with healthcare providers for virtual consultations and medical services.",
    highlights: [
      "Built RESTful APIs serving 100k+ daily requests",
      "Developed mobile-responsive patient dashboards",
      "Integrated M-Pesa and card payment systems",
    ],
    icon: Stethoscope,
    iconBg: "bg-emerald-500/20 text-emerald-400",
  },
];

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 h-full flex flex-col">
    {/* Header */}
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex items-start gap-4">
        {/* Company Icon */}
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${exp.iconBg}`}
        >
          <exp.icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
            {exp.title}
          </h3>
          <div className="flex items-center gap-2 text-primary">
            <Building className="w-4 h-4" />
            <span className="font-medium">{exp.company}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{exp.period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{exp.location}</span>
        </div>
      </div>
    </div>

    {/* Description */}
    <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>

    {/* Highlights */}
    <ul className="space-y-2 mb-4">
      {exp.highlights.map((highlight, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-sm text-foreground/80 transition-all duration-200 hover:text-foreground hover:translate-x-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-125" />
          {highlight}
        </li>
      ))}
    </ul>

    {/* Website Link */}
    {exp.websiteUrl && (
      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground h-8 px-2" asChild>
        <a href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 mr-1" />
          Visit Website
        </a>
      </Button>
    )}
  </div>
);

const ExperiencePage = ({ onNavigate }: ExperiencePageProps) => {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-8 bg-transparent">
      {/* Header */}
      <Header onNavigate={onNavigate} />

      {/* Content */}
      <div className="flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">Career Journey</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              My professional journey as a developer, building innovative solutions and growing with each project.
            </p>
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
                {experiences.map((exp) => (
                  <CarouselItem 
                    key={exp.id} 
                    className="pl-2 basis-[85%] transition-all duration-300 ease-out active:scale-[0.98]"
                  >
                    <ExperienceCard exp={exp} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 transition-transform duration-200 hover:scale-110 active:scale-95" />
                <CarouselNext className="static translate-y-0 transition-transform duration-200 hover:scale-110 active:scale-95" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Timeline View */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-20 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />

                  {/* Content Card */}
                  <div className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Company Icon */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${exp.iconBg}`}
                        >
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                        <div className="flex items-center gap-2 sm:justify-end">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:justify-end">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80 transition-all duration-200 hover:text-foreground hover:translate-x-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-125" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Website Link */}
                    {exp.websiteUrl && (
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground h-8 px-2" asChild>
                        <a href={exp.websiteUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Visit Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center opacity-0 animate-fade-in-up animation-delay-500">
            <p className="text-muted-foreground mb-6">Interested in working together?</p>
            <Button size="lg" onClick={() => onNavigate("contact")} className="group">
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
