import InlineLink from "@/components/InlineLink";
import { H1 } from "@/components/Headings";

export default function Home() {
  return (
    <>
      <div className="space-y-4">
        <H1>Nathaniel Kilonzo</H1>

        <p>
          I’m a Computer Science student with a focus on systems at Northeastern
          University. I enjoy building backend and distributed systems projects
          that emphasize correctness, performance, and reliability. Through
          coursework and personal projects, I’m developing a strong foundation
          in how real-world systems behave under load and failure. I’m working
          toward a career in infrastructure and large-scale systems engineering.
        </p>

        <p>
          In my free time, I enjoy watching films, cooking, and refining a hi-fi
          audio setup.
        </p>
      </div>
      <hr />
      <div className="flex flex-wrap gap-4 text-xs">
        <InlineLink href="https://github.com/jknate">GitHub</InlineLink>
        <InlineLink href="https://www.linkedin.com/in/nathanielkilonzo/">
          LinkedIn
        </InlineLink>
        <InlineLink href="/resume.pdf">Resume</InlineLink>
        <InlineLink href="https://letterboxd.com/nateonfilm/">Letterboxd</InlineLink>
      </div>
    </>
  );
}
