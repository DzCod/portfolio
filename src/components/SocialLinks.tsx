interface SocialLinksProps {
  githubLabel?: string;
  linkedinLabel?: string;
  iconOnly?: boolean;
  className?: string;
  linkClassName?: string;
}

const githubUrl = "https://github.com/Systemix-dev";
const linkedinUrl = "https://www.linkedin.com/in/zighed-mohamed-nassim-577267445/";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.13c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.64 0-1.25.45-2.26 1.18-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17A10.9 10.9 0 0 1 12 5.99c.97 0 1.94.13 2.85.38 2.17-1.48 3.13-1.17 3.13-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.81 1.18 3.06 0 4.38-2.68 5.35-5.23 5.63.41.36.78 1.06.78 2.13v3.16c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M5.4 7.1A2.1 2.1 0 1 0 5.4 3a2.1 2.1 0 0 0 0 4.1ZM3.6 21h3.6V8.9H3.6V21Zm5.8 0h3.6v-6c0-1.58.3-3.11 2.26-3.11 1.93 0 1.95 1.81 1.95 3.21V21h3.6v-6.83c0-3.36-.72-5.94-4.65-5.94-1.89 0-3.15 1.03-3.67 2.01h-.05v-1.34H9.4V21Z" />
    </svg>
  );
}

export function SocialLinks({
  githubLabel = "GitHub",
  linkedinLabel = "LinkedIn",
  iconOnly = false,
  className = "",
  linkClassName = "",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={githubLabel}
        className={linkClassName}
      >
        <GitHubIcon />
        {!iconOnly && <span>{githubLabel}</span>}
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkedinLabel}
        className={linkClassName}
      >
        <LinkedInIcon />
        {!iconOnly && <span>{linkedinLabel}</span>}
      </a>
    </div>
  );
}
