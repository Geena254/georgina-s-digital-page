import FloatingSkills from "@/components/skills/FloatingSkills";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

const allSkills = [
  // Main 5 skills
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Tailwind CSS", category: "Frontend" },
  // Additional skills
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

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  return (
    <div className="min-h-screen py-8 px-8 md:px-16 lg:px-24 bg-transparent">
      {/* Page Header */}
      <div className="mb-8 opacity-0 animate-fade-in-up">
        <h1
          onClick={() => onNavigate?.("home")}
          className="font-serif text-2xl font-semibold text-foreground relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left cursor-pointer"
        >
          Georgina
        </h1>
      </div>

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
      </div>
    </div>
  );
};

export default AboutPage;
