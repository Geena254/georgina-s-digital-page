import { Award, BadgeCheck, ExternalLink, Eye } from "lucide-react";
import FloatingSkills from "@/components/skills/FloatingSkills";
import Header from "@/components/Header";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const allSkills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "AWS", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

const certifications = [
  {
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAP-2023-1234",
    icon: "🏆",
    verifyUrl: "https://www.credly.com/badges/example-aws",
    viewUrl: "https://www.credly.com/badges/example-aws",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-5678",
    icon: "☁️",
    verifyUrl: "https://www.credential.net/example-gcp",
    viewUrl: "https://www.credential.net/example-gcp",
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
    title: "ALX AI For Developers",
    issuer: "ALX Africa",
    date: "2022",
    credentialId: "MDB-DEV-2022-3456",
    icon: "🍃",
    verifyUrl: "https://www.alxafrica.com/verify/example",
    viewUrl: "https://www.alxafrica.com/verify/example",
  },
];

const badges = [
  { name: "Google Cloud Engineering", color: "bg-primary" },
  { name: "Google Developer Expert", color: "bg-primary" },
  { name: "AWS Community Builder", color: "bg-gold" },
  { name: "Tech Women Speaker", color: "bg-terracotta" },
  { name: "Open Source Contributor", color: "bg-navy" },
  { name: "Certified Scrum Master", color: "bg-accent" },
  { name: "Women in Tech Africa Leader", color: "bg-primary" },
  { name: "DevOps Foundation Certified", color: "bg-gold" },
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
          <div className="md:col-span-2 hidden md:flex justify-center opacity-0 animate-fade-in-up animation-delay-200">
            <FloatingSkills skills={allSkills} mainSkillsCount={5} />
          </div>

          {/* Bio Section */}
          <div className="md:col-span-10 space-y-6 opacity-0 animate-fade-in-up animation-delay-100">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a passionate fullstack developer and founder based in Nairobi, Kenya. With 1.5 years of experience in
              web development, I've had the privilege of working with startups, enterprises, and everything in between.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey began with a simple curiosity about how websites work. That curiosity evolved into a career
              dedicated to creating accessible, performant, and beautiful digital experiences. Today, I lead a team of
              talented developers while continuing to mentor the next generation of African tech talent.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me speaking at tech conferences/summits, contributing to open-source
              projects, or enjoying a cup of Kenyan coffee while reading about the latest web technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-4xl font-serif font-semibold text-primary">1+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-semibold text-accent">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-semibold text-gold">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Mentees Guided</p>
              </div>
            </div>

            {/* Mobile Skills View */}
            <div className="md:hidden pt-8 border-t border-border">
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

          <div className="grid md:grid-cols-2 gap-6">
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
                        <a
                          href={cert.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          View
                        </a>
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </a>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">ID: {cert.credentialId}</p>
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
            — Actively pursuing certifications in AI/ML and Blockchain technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
