import { Award, BadgeCheck, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const certifications = [
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud X ALX Africa",
    date: "Nov 2025 - Jan 2026",
    credentialId: "AWS-SAP-2023-1234",
    icon: "🏆",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-5678",
    icon: "☁️",
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-FE-2022-9012",
    icon: "⚛️",
  },
  {
    title: "ALX AI For Developers",
    issuer: "ALX Africa",
    date: "2022",
    credentialId: "MDB-DEV-2022-3456",
    icon: "🍃",
  },
];

const badges = [
  { name: "GitHub Arctic Code Vault Contributor", color: "bg-accent" },
  { name: "Google Developer Expert", color: "bg-primary" },
  { name: "AWS Community Builder", color: "bg-gold" },
  { name: "Tech Women Speaker", color: "bg-terracotta" },
  { name: "Open Source Contributor", color: "bg-navy" },
  { name: "Certified Scrum Master", color: "bg-accent" },
  { name: "Women in Tech Africa Leader", color: "bg-primary" },
  { name: "DevOps Foundation Certified", color: "bg-gold" },
];

interface CertificationsPageProps {
  onNavigate?: (page: string) => void;
}

const CertificationsPage = ({ onNavigate }: CertificationsPageProps) => {
  return (
    <div className="min-h-screen py-8 px-8 md:px-16 lg:px-24 bg-transparent">
      {/* Page Header */}
      <div className="mb-8 opacity-0 animate-fade-in-up flex items-center justify-between">
        <h1
          onClick={() => onNavigate?.("home")}
          className="font-serif text-2xl font-semibold text-foreground relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer"
        >
          Georgina
        </h1>
        <div className="flex items-center gap-3">
          <SocialLinks variant="header" />

          <div className="w-px h-6 bg-border mx-1" />

          <Button variant="outline" size="sm" onClick={() => onNavigate?.("contact")} className="group">
            Contact Me
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-8">
        {/* Section Header */}
        <div className="mb-16 opacity-0 animate-fade-in-up animation-delay-100">
          <h2 className="section-title">Certifications & Badges</h2>
          <p className="section-subtitle">Professional achievements and recognitions</p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in-up animation-delay-100">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`certification-card group opacity-0 animate-fade-in-up`}
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
                      <button className="flex items-center gap-1 text-primary hover:underline">
                        <ExternalLink className="w-3 h-3" />
                        Verify
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">ID: {cert.credentialId}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        <div>
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

        {/* Additional Info */}
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

export default CertificationsPage;
