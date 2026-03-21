import { Mail, MapPin, Github, Linkedin, Globe, Star, Award, Zap, GraduationCap } from "lucide-react";

const ResumePage = () => {
  return (
    <div id="resume-content" className="bg-white text-gray-900 font-sans max-w-[850px] mx-auto print:max-w-none print:mx-0">
      {/* Header */}
      <div className="text-center pt-8 pb-4 px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          DEDAN OKWARE
        </h1>
        <div className="bg-slate-700 text-white py-2 px-4 text-sm font-medium tracking-wide rounded-sm mb-3">
          Full Stack Software Engineer | Blockchain Developer | Open Source Contributor
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" /> soft.eng.dedan@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Nairobi, Kenya
          </span>
          <span className="flex items-center gap-1">
            <Github className="w-3 h-3" /> github.com/okwareddevnest
          </span>
          <span className="flex items-center gap-1">
            <Linkedin className="w-3 h-3" /> linkedin.com/in/softysec-dedan-okware
          </span>
        </div>
      </div>

      <div className="px-8 pb-8 space-y-5">
        {/* Professional Summary */}
        <ResumeSection title="PROFESSIONAL SUMMARY">
          <p className="text-sm leading-relaxed text-gray-700">
            Results-driven Full Stack Software Engineer with 3+ years of experience delivering high-performance web applications, cross-platform mobile apps with Flutter, blockchain solutions, and enterprise automation systems. Currently enhancing the LMS tech ecosystem and automating Standard Operating Procedures at Power Learn Project Africa, while training and graduating 9,000+ students in Full Stack Development. Proven expertise from architecture design through production deployment, serving 50,000+ monthly users across 40+ countries. Award-winning blockchain developer with WCHL 2nd Place finalists at National (Kenya) and Regional (Africa) rounds. Core competencies: Flutter, Golang, TypeScript, React, Next.js, Node.js, Python, Docker, n8n Automation, AWS, Internet Computer Protocol (ICP), and CI/CD pipelines. Creator of open-source tools trusted by 3,500+ developers globally.
          </p>
        </ResumeSection>

        {/* Core Competencies */}
        <ResumeSection title="CORE COMPETENCIES">
          <div className="grid grid-cols-3 gap-x-6 gap-y-1.5 text-sm text-gray-700">
            {[
              "Full Stack Development", "Mobile Development", "Blockchain/Web3",
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
        <ResumeSection title="KEY ACHIEVEMENTS">
          <div className="space-y-2 text-sm text-gray-700">
            <AchievementItem icon="⭐" text="WCHL Blockchain Championship: Secured 2nd Place at both National (Kenya) and Regional (Africa) rounds with OHMS 2.0 AI agent platform" />
            <AchievementItem icon="🟢" text="Open Source Impact: Created developer tools adopted by 3,500+ users globally (Gitok: 2,000+ | U-Download: 1,500+)" />
            <AchievementItem icon="⚡" text="LMS Automation: Deployed n8n automation server, building 15+ webhook integrations that automated PLP SOPs and reduced manual operations by 60%" />
            <AchievementItem icon="🎓" text="Developer Training: Trained and graduated 9,000+ students across 3 cohorts in 2025 with 85%+ placement rate in technical roles" />
          </div>
        </ResumeSection>

        {/* Professional Experience */}
        <ResumeSection title="PROFESSIONAL EXPERIENCE">
          <div className="space-y-5">
            <ExperienceEntry
              title="Lead Front End Engineer"
              company="Fingo Africa"
              date="Feb 2026 - Present"
              location="Nairobi, Kenya · Hybrid · Full-time"
              bullets={[
                "Leading front-end architecture and development for Fingo Global stablecoin wallets, on/off ramp interfaces, cross-border transfer flows, and KYC/onboarding screens",
                "Building and shipping production Flutter mobile applications and Next.js web experiences for the stablecoin and cross-border payments platform",
                "Defining and enforcing front-end engineering standards, code review practices, and testing frameworks across the engineering team",
                "Collaborating closely with the Stellacoin Product Lead and Engineering Lead to translate product specs into robust, performant UI",
                "Owning the front-end deployment pipeline, CI/CD, and release management for mobile and web applications",
                "Driving user experience quality-working with design to ensure pixel-perfect, accessible, and fast interfaces",
              ]}
            />

            <ExperienceEntry
              title="Software Engineer & Instructor"
              company="Power Learn Project Africa"
              date="Oct 2024 - Present"
              location="Nairobi, Kenya · Consultancy"
              bullets={[
                "Automated PLP Standard Operating Procedures (SOPs) and LMS workflows by deploying self-hosted n8n server, building 15+ webhook integrations that reduced manual operations by 60%",
                "Enhanced and extended the existing LMS tech ecosystem with new features using Golang, Next.js, React.js, and Strapi CMS",
                "Trained and graduated 9,000+ students in Full Stack Development using MERN Stack (MongoDB, Express.js, React.js, Node.js) across 3 cohorts in 2025",
                "Conducted 100+ live coding sessions and performed 500+ code reviews, achieving 95% student project completion rate",
                "Developed comprehensive curriculum materials and 15+ hands-on capstone projects adopted as standard across the academy",
                "Containerized deployment pipelines with Docker, improving release velocity and system reliability across the platform",
              ]}
            />

            <ExperienceEntry
              title="Blockchain Software Engineer"
              company="Bonded"
              date="Apr 2025 - Jul 2025"
              location="London, United Kingdom · Remote · Contract"
              bullets={[
                "Developed blockchain solutions for UK visa application platform, enabling secure document storage and verification for international students",
                "Built internal mobile systems using Flutter to streamline document verification and partner communication for visa applications",
                "Built AI-powered evidence matching algorithms to align and validate relationship documentation between partners across borders",
                "Implemented ICP blockchain smart contracts for tamper-proof storage of visa application evidence and partner verification records",
                "Collaborated with cross-functional teams across 3 time zones, delivering secure immigration tech solutions on schedule",
              ]}
            />

            <ExperienceEntry
              title="Freelance Software Engineer"
              company="Freelance"
              date="Apr 2023 - Mar 2025"
              location="Kenya · Remote"
              bullets={[
                "Delivered 20+ full-stack web applications, cross-platform mobile apps with Flutter, and blockchain solutions for clients globally",
                "Built production-ready APIs and microservices using Node.js, Python, and Golang, serving 50,000+ monthly users",
                "Specialized in React, TypeScript, and Next.js for frontend, with ICP blockchain for decentralized applications",
                "Achieved 100% client satisfaction rate with repeat business from 70% of clients",
              ]}
            />

            <ExperienceEntry
              title="Open Source Developer & Maintainer"
              company="Open Source"
              date="Jan 2023 - Present"
              location="Remote · Global"
              bullets={[
                "Created Gitok: Git productivity CLI tool with 30+ custom commands, adopted by 2,000+ developers across 40+ countries",
                "Built U-Download: Cross-platform YouTube downloader in Rust/Tauri, trusted by 1,500+ users with zero-dependency setup",
                "Maintained 10+ open-source repositories with 150+ GitHub stars combined, processing 500+ issues and pull requests",
                "Published technical articles and documentation, generating 10,000+ page views on developer tools and best practices",
              ]}
            />
          </div>
        </ResumeSection>

        {/* Featured Projects */}
        <ResumeSection title="FEATURED PROJECTS">
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
        </ResumeSection>

        {/* Technical Skills */}
        <ResumeSection title="TECHNICAL SKILLS">
          <div className="space-y-2 text-sm text-gray-700">
            <SkillRow label="Programming Languages" value="Python · Golang · JavaScript · TypeScript · Rust · Motoko · Solidity · HTML5 · CSS3 · SQL" />
            <SkillRow label="Frontend Frameworks & Libraries" value="React · Next.js · Flutter · Vue.js · TailwindCSS · Material-UI · Framer Motion · Redux · WebSockets" />
            <SkillRow label="Backend Technologies" value="Node.js · Express.js · Django · FastAPI · Rust · MongoDB · PostgreSQL · REST APIs · GraphQL · gRPC · Microservices · Redis · MySQL" />
            <SkillRow label="Blockchain Development" value="Internet Computer (ICP) · Ethereum · Motoko · Solidity · Web3.js · Ethers.js · Hardhat · IPFS" />
            <SkillRow label="AI & Machine Learning" value="TensorFlow · PyTorch · Scikit-learn · LangChain · Pandas · NumPy" />
            <SkillRow label="DevOps & Tools" value="Git · Docker · Linux · CI/CD · Azure · AWS · Kubernetes · Zapier · Make (Integromat) · n8n · MCP Servers · MCP Client in Zapier · GitHub Actions · Terraform · Nginx · Vercel" />
          </div>
        </ResumeSection>

        {/* Certifications */}
        <ResumeSection title="CERTIFICATIONS & ACHIEVEMENTS">
          <div className="space-y-1.5 text-sm">
            <CertRow title="WCHL Regional Round (Africa) - 2nd Place" org="Internet Computer Protocol (ICP) Blockchain" date="Sep 2025" />
            <CertRow title="WCHL National Round (Kenya) - 2nd Place" org="Internet Computer Protocol (ICP) Blockchain" date="Aug 2025" />
            <CertRow title="Google Cybersecurity Professional Certificate, Cyber Security" org="Coursera" date="June 2023 - August 2023" />
            <CertRow title="ICP TypeScript Smart Contract 101" org="Dacade.org" date="2024" />
            <CertRow title="ICP Rust Smart Contract 101" org="Dacade.org" date="2024" />
            <CertRow title="Open Source Developer Tools" org="Creator of Gitok (2K+ users) & U-Download (1.5K+ users)" date="2023-Present" />
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="EDUCATION & TRAINING">
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-900">Software Engineering & Computer Science</p>
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
