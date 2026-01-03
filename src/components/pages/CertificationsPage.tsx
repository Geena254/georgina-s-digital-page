import { useState } from "react";
import { Award, BadgeCheck, ExternalLink, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const certifications = [
  {
    title: "ALX Ventures Founders Academy",
    issuer: "ALX Africa X Mastercard Foundation",
    date: "2025",
    credentialId: "https://savanna.alxafrica.com/certificates/sJ73MYm8er",
    icon: "🚀",
    skills: ["Startup Development", "Business Model Canvas", "Pitch Deck Creation", "Market Validation", "Fundraising Strategies", "Product-Market Fit"],
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud X ALX Africa",
    date: "Nov 2025 - Jan 2026",
    credentialId: "",
    icon: "☁️",
    skills: ["Google Cloud Platform", "Cloud Architecture", "Kubernetes", "Cloud Functions", "BigQuery", "Cloud Storage"],
  },
  {
    title: "ALX AI For Developers II",
    issuer: "ALX Africa",
    date: "September 2025",
    credentialId: "",
    icon: "🤖",
    skills: ["Advanced Prompt Engineering", "LLM Fine-tuning", "RAG Systems", "AI Agent Development", "Vector Databases", "AI Ethics"],
  },
  {
    title: "ALX AI For Developers I",
    issuer: "ALX Africa",
    date: "June 2025",
    credentialId: "",
    icon: "🧠",
    skills: ["Machine Learning Fundamentals", "Prompt Engineering", "ChatGPT API", "AI Integration", "Natural Language Processing"],
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2022",
    credentialId: "",
    icon: "⚛️",
    skills: ["React.js", "JavaScript ES6+", "HTML5 & CSS3", "Responsive Design", "Version Control", "UX/UI Principles"],
  },
  {
    title: "ALX Software Engineering Programme",
    issuer: "ALX Africa",
    date: "May 2023 - October 2024",
    credentialId: "",
    icon: "💻",
    skills: ["C Programming", "Python", "Data Structures & Algorithms", "Linux/Unix", "System Engineering", "DevOps", "Databases", "API Development"],
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
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const toggleCert = (title: string) => {
    setExpandedCert(expandedCert === title ? null : title);
  };
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
                className={`certification-card group opacity-0 animate-fade-in-up cursor-pointer transition-all duration-300 ${expandedCert === cert.title ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                onClick={() => toggleCert(cert.title)}
              >
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0 cert-icon">{cert.icon}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      {expandedCert === cert.title ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Issued: {cert.date}</span>
                      {cert.credentialId && (
                        <a 
                          href={cert.credentialId.startsWith('http') ? cert.credentialId : undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-3 h-3" />
                          Verify
                        </a>
                      )}
                    </div>
                    
                    {/* Expandable Skills Section */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedCert === cert.title ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm font-medium text-foreground mb-2">Skills Gained:</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
