import InlineLink from "@/components/InlineLink";

const experiences = [
  {
    company: "LinkedIn",
    role: "Software Engineering Intern",
    date: "Summer 2026",
  },
  {
    company: "Microsoft",
    role: "Software Engineering Intern",
    date: "May 2025 - July 2025",
  },
  {
    company: "Northeastern University",
    role: "Teaching Assistant",
    date: "September 2024 - April 2025",
  },
  {
    company: "Microsoft",
    role: "Explore Intern",
    date: "May 2024 - August 2024",
  },
];

export default function Home() {
  return (
    <>
      {/* Bio Section */}
      <section className="grid gap-6 sm:grid-cols-[1fr_2fr] sm:gap-4">
        <div>
          <h3 className="text-lg font-bold" style={{ color: "var(--color-foreground)" }}>
            Nathaniel Kilonzo
          </h3>
          <p className="leading-none" style={{ color: "var(--color-muted-foreground)" }}>
            CS @ Northeastern
          </p>
        </div>
        <div className="space-y-4">
          <p>
            I&apos;m a Computer Science student at Northeastern University focused on systems. 
            I build backend and distributed projects that prioritize correctness, performance, and reliability, with an emphasis on how software behaves under load and failure.
            My goal is to contribute to infrastructure and software that operates at scale.
          </p>
          <p>
            In my free time, I enjoy watching films, cooking, and refining a
            hi-fi audio setup. Feel free to{" "}
            <InlineLink href="https://www.linkedin.com/in/nathanielkilonzo/">
              connect
            </InlineLink>
            .
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <InlineLink href="https://github.com/jknate">GitHub</InlineLink>
            <InlineLink href="https://www.linkedin.com/in/nathanielkilonzo/">
              LinkedIn
            </InlineLink>
            <InlineLink
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </InlineLink>
            <InlineLink href="https://letterboxd.com/nateonfilm/">
              Letterboxd
            </InlineLink>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="grid gap-6 sm:grid-cols-[1fr_2fr] sm:gap-4">
        <div>
          <h4 className="font-bold" style={{ color: "var(--color-foreground)" }}>Experience</h4>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 sm:flex-row-reverse sm:items-baseline sm:justify-between"
            >
              <span
                className="text-sm sm:text-right"
                style={{ color: "color-mix(in srgb, var(--color-muted-foreground) 70%, transparent)" }}
              >
                {exp.date}
              </span>
              <div>
                <span>{exp.role}</span>
                <span className="ml-1" style={{ color: "var(--color-muted-foreground)" }}>
                  {exp.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Projects Section */}
      <section className="grid gap-6 sm:grid-cols-[1fr_2fr] sm:gap-4">
        <div>
          <h4 className="font-bold" style={{ color: "var(--color-foreground)" }}>Featured Projects</h4>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col gap-1 sm:flex-row-reverse sm:items-baseline sm:justify-between">
            <span
              className="text-sm sm:text-right"
              style={{ color: "color-mix(in srgb, var(--color-muted-foreground) 70%, transparent)" }}
            >
              Go, Docker, NGINX
            </span>
            <div>
              <InlineLink href="https://github.com/jknate/distributed-cache">
                Distributed Cache
              </InlineLink>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row-reverse sm:items-baseline sm:justify-between">
            <span
              className="text-sm sm:text-right"
              style={{ color: "color-mix(in srgb, var(--color-muted-foreground) 70%, transparent)" }}
            >
              Spring Boot, React
            </span>
            <div>
              <InlineLink href="https://github.com/jknate/audio-transcribe">
                Audio to Text Converter
              </InlineLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
