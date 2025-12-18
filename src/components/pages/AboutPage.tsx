const AboutPage = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "Agile/Scrum"] },
  ];

  return (
    <div className="min-h-screen py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 opacity-0 animate-fade-in-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">The story behind the code</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio Section */}
          <div className="md:col-span-3 space-y-6 opacity-0 animate-fade-in-up animation-delay-100">
            <p className="text-lg leading-relaxed text-foreground">
              I'm a passionate fullstack developer and founder based in Nairobi, Kenya. 
              With over 8 years of experience in web development, I've had the privilege 
              of working with startups, enterprises, and everything in between.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey began with a simple curiosity about how websites work. That 
              curiosity evolved into a career dedicated to creating accessible, performant, 
              and beautiful digital experiences. Today, I lead a team of talented developers 
              while continuing to mentor the next generation of African tech talent.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me speaking at tech conferences, contributing 
              to open-source projects, or enjoying a cup of Kenyan coffee while reading about 
              the latest web technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-4xl font-serif font-semibold text-primary">8+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-semibold text-accent">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-semibold text-gold">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Mentees Guided</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:col-span-2 space-y-8 opacity-0 animate-fade-in-up animation-delay-200">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Skills & Expertise
            </h3>
            
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="badge-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
