import { H1 } from "@/components/Headings";

export default function Experience() {
  return (
    <>
      <H1>Experience</H1>
      <div className="space-y-8">
        {/* Add your experience entries here */}
        <section>
          <h2 className="mb-2 text-lg font-semibold">LinkedIn</h2>
          <div className="mb-2 text-sm text-neutral-600">
            Software Engineering Intern | Incoming Summer 2026
          </div>
          <p className="text-neutral-700"></p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold">Microsoft</h2>
          <div className="mb-2 text-sm text-neutral-600">
            Software Engineering Intern | May 2025 - July 2025
          </div>
          <p className="text-neutral-700">
            I spent my summer working on AI-driven content optimization for
            SharePoint and OneDrive. The main focus was building pipelines that
            automatically generate thumbnail and title variations to help boost
            user engagement with media content. I also developed a PyTorch deep
            neural network to predict video playback likelihood, which performed
            better than the existing baseline in our tests. To support future
            model improvements, I added a feature analysis module that captures
            important properties during the upload process.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold">
            Northeastern University
          </h2>
          <div className="mb-2 text-sm text-neutral-600">
            Teaching Assistant | September 2024 - April 2025
          </div>
          <p className="text-neutral-700">
            I worked as a TA for Fundamentals of Computer Science 1 and 2,
            helping intro students get comfortable with programming. I led
            weekly lab sessions for 35 students, held office hours to work
            through concepts one-on-one, and graded assignments to provide
            feedback on their progress.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-lg font-semibold">Microsoft</h2>
          <div className="mb-2 text-sm text-neutral-600">
            Explore Intern | May 2024 - August 2024
          </div>
          <p className="text-neutral-700">
            My first internship at Microsoft was through the Explore program on
            the Viva Engage Team, where I got to experience both software
            engineering and product management. On the engineering side, I built
            a GraphQL API for bulk message deletion to help users better manage
            their drafts. I also explored using LLMs to extract Q&A content from
            files, which improved extraction accuracy by over 50%. Throughout
            the summer, I contributed backend fixes and optimizations in Java to
            improve system stability.
          </p>
        </section>
      </div>
    </>
  );
}
