import { Calendar, MapPin, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

interface ExperiencePageProps {
  onNavigate: (page: string) => void;
}

const experiences = [
  {
    id: 1,
    title: "Senior Fullstack Developer",
    company: "Tech Company",
    location: "Nairobi, Kenya",
    period: "2023 - Present",
    description: "Leading development of web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    highlights: [
      "Led a team of 5 developers on a major product redesign",
      "Improved application performance by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "Startup Inc",
    location: "Nairobi, Kenya",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client-facing applications. Worked closely with design team to implement responsive UI components.",
    highlights: [
      "Built RESTful APIs serving 100k+ daily requests",
      "Developed mobile-responsive dashboards",
      "Integrated third-party payment systems",
    ],
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Agency XYZ",
    location: "Nairobi, Kenya",
    period: "2019 - 2021",
    description: "Started my professional journey building websites and web applications for various clients across different industries.",
    highlights: [
      "Delivered 20+ client projects on time",
      "Learned agile development methodologies",
      "Contributed to open-source projects",
    ],
  },
];

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
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              My professional journey as a developer, building innovative solutions and growing with each project.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-8 md:pl-20 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />

                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
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
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center opacity-0 animate-fade-in-up animation-delay-500">
            <p className="text-muted-foreground mb-6">
              Interested in working together?
            </p>
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
