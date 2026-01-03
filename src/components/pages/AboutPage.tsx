import { Award, BadgeCheck, ExternalLink, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import FloatingSkills from "@/components/skills/FloatingSkills";
import Header from "@/components/Header";
import profilePhoto from "@/assets/about-profile-optimized.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const allSkills = [
  // Main skills (first 5 shown by default)
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Frontend
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Redux", category: "Frontend" },

  // Backend
  { name: "Express.js", category: "Backend" },
  { name: "Django DRF", category: "Backend" },
  { name: "GraphQL", category: "Backend" },

  // Frameworks
  { name: "Next.js", category: "Frameworks" },
  { name: "Express.js", category: "Frameworks" },
  { name: "Django DRF", category: "Frameworks" },

  // Languages
  { name: "Python", category: "Languages" },
  { name: "HTML5", category: "Languages" },
  { name: "CSS3", category: "Languages" },

  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Firebase", category: "Databases" },

  // DevOps
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },

  // Cloud
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Netlify", category: "Cloud" },
  { name: "Heroku", category: "Cloud" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Nginx", category: "Tools" },

  // APIs
  { name: "Stripe", category: "APIs" },
  { name: "Twilio", category: "APIs" },
];

const certifications = [
  {
    title: "ALX Ventures Founders Academy",
    issuer: "ALX Africa X Mastercard Foundation",
    date: "2025",
    credentialId: "",
    icon: "🚀",
    verifyUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
    viewUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud X ALX Africa",
    date: "Nov 2025 - Jan 2026",
    credentialId: "GCP-PD-2023-5678",
    icon: "☁️",
    verifyUrl: "https://www.credential.net/example-gcp",
    viewUrl: "https://www.credential.net/example-gcp",
  },
  {
    title: "ALX AI For Developers II",
    issuer: "ALX Africa",
    date: "September 2025",
    credentialId: "",
    icon: "🤖",
    verifyUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
    viewUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
  },
  {
    title: "ALX AI For Developers I",
    issuer: "ALX Africa",
    date: "June 2025",
    credentialId: "",
    icon: "🧠",
    verifyUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
    viewUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-FE-2022-9012",
    icon: "⚛️",
    verifyUrl: "https://www.coursera.org/account/accomplishments/example",
    viewUrl: "https://www.coursera.org/account/accomplishments/example",
  },
  {
    title: "ALX Software Engineering Programme",
    issuer: "ALX Africa",
    date: "May 2023 - October 2024",
    credentialId: "",
    icon: "💻",
    verifyUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
    viewUrl: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
  },
];

const badges = [
  { name: "Google Cloud Engineering", color: "bg-primary" },
  { name: "Google Cloud Computing Foundations", color: "bg-gold" },
  { name: "The Basics of Google Cloud Compute Skill", color: "bg-accent" },
  { name: "Tech Women Speaker", color: "bg-terracotta" },
  { name: "Open Source Contributor", color: "bg-navy" },
  { name: "Women in Tech Africa Leader", color: "bg-primary" },
  { name: "Deploy Kubernetes on google Cloud Skill", color: "bg-gold" },
  { name: "Implement Load Balancing on Compute Engine Skill", color: "bg-accent" },
];

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  return (
    <div className="min-h-screen py-8 px-8 md:px-16 lg:px-24 bg-transparent">
      {/* Page Header */}
      <Header onNavigate={onNavigate} />

      <div className="max-w-5xl mx-auto pt-8">
        {/* Section Header */}
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-100">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">The story behind the code</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Floating Skills - Left Side */}
          <div className="md:col-span-2 hidden md:flex justify-center">
            <FloatingSkills skills={allSkills} mainSkillsCount={5} />
          </div>

          {/* Bio Section */}
          <div className="md:col-span-10 opacity-0 animate-fade-in-up animation-delay-100">
            <div className="grid md:grid-cols-5 gap-8 items-start">
              {/* Text Content */}
              <div className="md:col-span-3 space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  I’m Georgina Kimani, a Kenyan-based Software Engineer and Founder. From curious beginner to tech
                  leader, I focus on building accessible, high-performance digital experiences.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With a background spanning startups to enterprises, I now lead a development team and mentor rising
                  African tech talent.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Beyond the IDE, I’m an open-source contributor, tech speaker, and lifelong learner ~ usually with a
                  cup of Kenyan coffee in hand.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-3xl font-serif font-semibold text-primary">1+</p>
                    <p className="text-sm text-muted-foreground mt-1">Years</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-semibold text-accent">10+</p>
                    <p className="text-sm text-muted-foreground mt-1">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-semibold text-gold">200+</p>
                    <p className="text-sm text-muted-foreground mt-1">Mentees</p>
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-accent/10 to-gold/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl group-hover:border-primary/40 transition-all duration-500">
                    <img src={profilePhoto} alt="Georgina Kimani" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Skills View */}
            <div className="md:hidden pt-8 mt-8 border-t border-border">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Skills</h3>
              <div className="flex justify-center">
                <FloatingSkills skills={allSkills} mainSkillsCount={5} />
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-semibold">Certifications</h3>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2">
                {certifications.map((cert, index) => (
                  <CarouselItem key={cert.title} className="pl-2 basis-[85%]">
                    <div className="certification-card group h-full">
                      <div className="flex gap-4">
                        <div className="text-4xl flex-shrink-0 cert-icon">{cert.icon}</div>
                        <div className="flex-1 space-y-2">
                          <h4 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Issued: {cert.date}</span>
                          </div>
                          <div className="flex items-center gap-3 pt-1">
                            {cert.viewUrl && (
                              <a
                                href={cert.viewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm"
                              >
                                <Eye className="w-3 h-3" />
                                View
                              </a>
                            )}
                            {cert.verifyUrl && (
                              <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-primary hover:underline text-sm"
                              >
                                <ExternalLink className="w-3 h-3" />
                                Verify
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="certification-card group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0 cert-icon">{cert.icon}</div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Issued: {cert.date}</span>
                      <div className="flex items-center gap-3">
                        {cert.viewUrl && (
                          <a
                            href={cert.viewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Eye className="w-3 h-3" />
                            View
                          </a>
                        )}
                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:underline"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Verify
                          </a>
                        )}
                      </div>
                    </div>
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground font-mono">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in-up animation-delay-300">
            <BadgeCheck className="w-6 h-6 text-accent" />
            <h3 className="font-serif text-2xl font-semibold">Badges & Recognitions</h3>
          </div>

          <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up animation-delay-400">
            {badges.map((badge) => (
              <div key={badge.name} className="badge-item group cursor-pointer">
                <div className={`w-2 h-2 rounded-full badge-dot ${badge.color}`} />
                <span className="group-hover:text-primary transition-colors">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 p-8 bg-paper-aged border border-border opacity-0 animate-fade-in-up animation-delay-500">
          <p className="text-center text-muted-foreground italic font-serif text-lg">
            "Continuous learning is the minimum requirement for success in any field."
          </p>
          <p className="text-center text-sm text-muted-foreground mt-4">
            ~ Actively pursuing certifications in AI/ML and Blockchain technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
