import { Mail, MapPin, Github, Linkedin, Globe, Star, Award, Zap, GraduationCap } from "lucide-react";

const ResumePage = () => {
  return (
    <div id="resume-content" className="bg-white text-gray-900 font-sans max-w-[850px] mx-auto print:max-w-none print:mx-0">
      {/* Header */}
      <div className="text-center pt-8 pb-4 px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          GEORGINA KIMANI
        </h1>
        <div className="bg-slate-700 text-white py-2 px-4 text-sm font-medium tracking-wide rounded-sm mb-3">
          Full Stack Software Engineer | Open Source Contributor
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> njokikimani001@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Nairobi, Kenya
          </span>
          <span className="flex items-center gap-1">
            <Github className="w-3 h-3" /> github.com/Geena254
          </span>
          <span className="flex items-center gap-1">
            <Linkedin className="w-3 h-3" /> linkedin.com/in/georgina-kimani
          </span>
        </div>
      </div>

      <div className="px-8 pb-8 space-y-5">
        {/* Professional Summary */}
        <ResumeSection title="PROFESSIONAL SUMMARY">
          <p className="text-sm leading-relaxed text-gray-700">
            I'm a Full‑Stack Developer | Frontend Engineer with a strong product mindset,
            bridging frontend leadership, backend architecture, AI and UI design to build scalable,
            user-focused digital experiences. I thrive in building end-to-end solutions - from crafting
            intuitive frontends to architecting robust backends. My approach is deeply collaborative, and I
            enjoy aligning technical execution with business goals. My experience extends to quick-thinking
            startups and fast-paced teams where shipping, iterating, and collaborating closely with designers,
            project managers, and stakeholders is key.
          </p>
        </ResumeSection>

        {/* Core Competencies */}
        <ResumeSection title="CORE COMPETENCIES">
          <div className="grid grid-cols-3 gap-x-6 gap-y-1.5 text-sm text-gray-700">
            {[
              "Full Stack Development", "Frontend Development", "Blockchain/Web3",
              "API Development", "Cloud Architecture", "System Design",
              "CI/CD Pipelines", "DevOps & Docker", "App/Software",
              "Technical Leadership", "Database Design", "Microservices",
              "Process Automation"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Key Achievements */}
        {/* <ResumeSection title="KEY ACHIEVEMENTS">
          <div className="space-y-2 text-sm text-gray-700">
            <AchievementItem icon="⭐" text="WCHL Blockchain Championship: Secured 2nd Place at both National (Kenya) and Regional (Africa) rounds with OHMS 2.0 AI agent platform" />
            <AchievementItem icon="🟢" text="Open Source Impact: Created developer tools adopted by 3,500+ users globally (Gitok: 2,000+ | U-Download: 1,500+)" />
            <AchievementItem icon="⚡" text="LMS Automation: Deployed n8n automation server, building 15+ webhook integrations that automated PLP SOPs and reduced manual operations by 60%" />
            <AchievementItem icon="🎓" text="Developer Training: Trained and graduated 9,000+ students across 3 cohorts in 2025 with 85%+ placement rate in technical roles" />
          </div>
        </ResumeSection> */}

        {/* Professional Experience */}
        <ResumeSection title="PROFESSIONAL EXPERIENCE">
          <div className="space-y-5">
            <ExperienceEntry
              title="Support Team & Mentor"
              company="Power Learn Project Africa"
              date="June 2025 - April 2026"
              location="Nairobi, Kenya · Hybrid · Full-time"
              bullets={[
                "Assist in organizing and executing both online and offline events, offering on-ground and virtual support to enhance engagement with learners and prospective participants",
                "Manage and resolve support tickets efficiently through the LMS, contributing to improved platform operations and learner satisfaction",
                "Provide timely and professional support by responding to learner inquiries via email, ensuring clarity and resolution for both current and past cohorts",
                "Collaborating closely with the Academy team to ensure smooth delivery of programs",
              ]}
            />

            <ExperienceEntry
              title="Full‑Stack Developer (Frontend Lead)"
              company="MTREAT"
              date="Jan 2025 - April 2025"
              location="Remote"
              bullets={[
                "Led frontend delivery for a healthtech platform (3 devs) using React/TypeScript and Tailwind, standardized design system and code reviews, improving UI consistency and maintainability.",
                "Implemented secure authentication and onboarding (JWT/OAuth2) with Django REST APIs, reducing drop‑off during signup by 12%.",
                "Optimized performance via code‑splitting, asset compression, and React Query caching, cutting LCP by 25% and increasing session duration by 18%.",
                "Conducted 100+ live coding sessions and performed 500+ code reviews, achieving 95% student project completion rate",
                "Partnered with product and backend developers to launch retention‑driving features(reminders, personalized feeds), contributing to +15% of a 30‑day retention.",
                "Containerized deployment pipelines with Docker, improving release velocity and system reliability across the platform",
              ]}
            />

            <ExperienceEntry
              title="Freelance Software Engineer & UI/UX Designer"
              company="Freelance"
              date="June 2024 - Present"
              location="Kenya · Remote"
              bullets={[
                "Delivered 10+ full-stack web applications, cross-platform mobile apps with React Native, and blockchain solutions for clients globally",
                "Built production-ready APIs and microservices using Node.js, Python, and Express.js, serving 50,000+ monthly users",
                "Specialized in React, TypeScript, and Next.js for frontend, with ICP blockchain for decentralized applications",
                "Achieved 100% client satisfaction rate with repeat business from 70% of clients",
              ]}
            />
          </div>
        </ResumeSection>

        {/* Featured Projects */}
        {/* <ResumeSection title="FEATURED PROJECTS">
          <div className="space-y-3">
            <ProjectEntry
              name="OHMS 2.0 - Autonomous AI Agent Platform"
              description="Award-winning decentralized AI agent platform - WCHL 2nd Place (Africa) & Global Finalist. Enables natural language agent composition with verifiable on-chain execution."
              tech="Rust, TypeScript, React 19, Internet Computer (ICP), AI Agents, LLM Integration, WebAssembly"
            />
            <ProjectEntry
              name="U-Download - Cross-Platform Media Downloader"
              description="High-performance YouTube downloader built in Rust, trusted by 1,500+ users globally. Features multi-connection acceleration, video trimming, and zero external dependencies."
              tech="Rust, Tauri, React, TypeScript, FFmpeg, yt-a2c"
            />
            <ProjectEntry
              name="Gitok - Developer Productivity CLI"
              description="Git productivity toolkit with 30+ custom commands, adopted by 2,000+ developers worldwide. Features auto-updates, interactive cheatsheets, and cross-platform support."
              tech="Shell Script, Bash, Fish Shell, Git, GitHub Actions, CI/CD"
            />
            <ProjectEntry
              name="RSON - Next-Generation Data Serialization"
              description="Modern data serialization format evolving JSON with comments, rich types, and developer-friendly syntax. Full backward compatibility with JSON."
              tech="Rust, Serde, TypeScript, Python, Parser Design, Language Specification"
            />
          </div>
        </ResumeSection> */}

        {/* Technical Skills */}
        <ResumeSection title="TECHNICAL SKILLS">
          <div className="space-y-2 text-sm text-gray-700">
            <SkillRow label="Programming Languages" value="Python · JavaScript · TypeScript · Solidity · HTML5 · CSS3 · SQL" />
            <SkillRow label="Frontend Frameworks & Libraries" value="React · Next.js · Flutter · Vue.js · TailwindCSS · Material-UI · Framer Motion · Redux · WebSockets" />
            <SkillRow label="Backend Technologies" value="Node.js · Express.js · Django · FastAPI · MongoDB · PostgreSQL · REST APIs · GraphQL · gRPC · Microservices · Redis · MySQL" />
            {/* <SkillRow label="Blockchain Development" value="Internet Computer (ICP) · Ethereum · Motoko · Solidity · Web3.js · Ethers.js · Hardhat · IPFS" /> */}
            <SkillRow label="AI & Machine Learning" value="TensorFlow · PyTorch · Scikit-learn · LangChain · Pandas · NumPy" />
            <SkillRow label="DevOps & Tools" value="Git · Docker · Linux · CI/CD · Azure · AWS · Kubernetes · Zapier · n8n · MCP Servers · MCP Client in Zapier · GitHub Actions · Terraform · Nginx · Vercel" />
          </div>
        </ResumeSection>

        {/* Certifications */}
        <ResumeSection title="CERTIFICATIONS & ACHIEVEMENTS">
          <div className="space-y-1.5 text-sm">
            <CertRow title="Software Engineering" org="ALX Africa" date="May 2023 - Dec 2024" />
            <CertRow title="J.P. Morgan Software Engineering Virtual Experience" org="Forage" date="Sept 2024" />
            <CertRow title="AI for Software Engineering I" org="ALX Africa" date="April 2025 - June 2025" />
            <CertRow title="Google Cybersecurity Professional Certificate, Cyber Security" org="Coursera" date="June 2025 - August 2025" />
            <CertRow title="AI for Software Engineering II" org="ALX Africa" date="August 2025 - September 2025" />
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="EDUCATION & TRAINING">
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-900">Software Engineering & Agentic Engineering</p>
            <p>Continuous learning and professional development</p>
            <p className="text-gray-500">Specialized in Blockchain, AI, and Full-Stack Development</p>
          </div>
        </ResumeSection>
      </div>
    </div>
  );
};

// Sub-components

const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-base font-bold text-slate-800 border-b-2 border-slate-300 pb-1 mb-3 tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {title}
    </h2>
    {children}
  </div>
);

const AchievementItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-start gap-2">
    <span className="shrink-0 mt-0.5">{icon}</span>
    <p>{text}</p>
  </div>
);

const ExperienceEntry = ({ title, company, date, location, bullets }: {
  title: string; company: string; date: string; location: string; bullets: string[];
}) => (
  <div>
    <div className="flex justify-between items-start mb-0.5">
      <div>
        <h3 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
      <div className="text-right text-sm shrink-0 ml-4">
        <p className="font-medium text-gray-700">{date}</p>
        <p className="text-gray-500 text-xs">{location}</p>
      </div>
    </div>
    <ul className="list-disc list-outside ml-4 space-y-0.5 text-sm text-gray-700 mt-1.5">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
);

const ProjectEntry = ({ name, description, tech }: { name: string; description: string; tech: string }) => (
  <div>
    <h3 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>{name}</h3>
    <p className="text-sm text-gray-700">{description}</p>
    <p className="text-xs text-gray-500 mt-0.5"><span className="font-medium">Technologies:</span> {tech}</p>
  </div>
);

const SkillRow = ({ label, value }: { label: string; value: string }) => (
  <div>
    <span className="font-semibold text-gray-900">{label}:</span>{" "}
    <span>{value}</span>
  </div>
);

const CertRow = ({ title, org, date }: { title: string; org: string; date: string }) => (
  <div className="flex justify-between items-start">
    <div>
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="text-gray-500 text-xs">{org}</p>
    </div>
    <p className="text-gray-600 text-xs shrink-0 ml-4">{date}</p>
  </div>
);

export default ResumePage;
