import {
  GithubIcon,
  LinkedInIcon,
  FileTextIcon,
  LetterboxdIcon,
} from "../Icons";

export default function SocialLinks() {
  return (
    <div className="mb-8 flex items-center gap-4">
      <a
        href="https://github.com/jknate"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
        aria-label="GitHub"
      >
        <GithubIcon size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/nathanielkilonzo/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
        aria-label="LinkedIn"
      >
        <LinkedInIcon size={20} />
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
        aria-label="Resume"
      >
        <FileTextIcon size={20} />
      </a>
      <a
        href="https://letterboxd.com/nateonfilm/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
        aria-label="Letterboxd"
      >
        <LetterboxdIcon size={20} />
      </a>
    </div>
  );
}
