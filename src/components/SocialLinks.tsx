import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { SOCIAL_LINKS } from "@/lib/constants";

type SocialLinksProps = {
  variant?: "header" | "footer";
  className?: string;
};

const SocialLinks = ({ variant = "header", className = "" }: SocialLinksProps) => {
  const links = [
    { href: SOCIAL_LINKS.linkedin, icon: SiLinkedin, label: "LinkedIn" },
    { href: SOCIAL_LINKS.github, icon: SiGithub, label: "GitHub" },
    { href: SOCIAL_LINKS.twitter, icon: SiX, label: "X (Twitter)" },
  ];

  if (variant === "footer") {
    return (
      <div className={`flex gap-3 ${className}`}>
        {links.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
