import Badge from "../Badge";
import { LinkExternal } from "../Links";

export default function Resume() {
  return (
    <dl className="list-container">
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">
          <div className="flex items-center gap-2">
            Summer 2026
            <Badge>Upcoming</Badge>
          </div>
        </h3>
      </dt>
      <dd className="list-content">
        <div>
          Software Engineering Intern –{" "}
          <LinkExternal href="//linkedin.com">LinkedIn</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Sunnyvale, CA
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          TBD
        </div>
      </dd>

      <dt className="list-title mt-4 border-none pt-0 sm:mt-0">
        <h3 className="text-neutral-500 dark:text-silver-dark">Summer 2025</h3>
      </dt>
      <dd className="list-content border-none pt-0">
        <div>
          Software Engineering Intern –{" "}
          <LinkExternal href="//microsoft.com">Microsoft</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Redmond, WA
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          One Drive/Sharepoint Compute COGs
        </div>
      </dd>

      <dt className="list-title mt-4 border-none pt-0 sm:mt-0">
        <h3 className="text-neutral-500 dark:text-silver-dark">Fall 2024 - Spring 2025</h3>
      </dt>
      <dd className="list-content border-none pt-0">
        <div>
          Teaching Assistant –{" "}
          <LinkExternal href="//northeastern.edu">Northeastern University</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Boston, MA
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Fundamentals of Computer Science I and II
        </div>
      </dd>

      <dt className="list-title mt-4 border-none pt-0 sm:mt-0">
        <h3 className="text-neutral-500 dark:text-silver-dark">Summer 2024</h3>
      </dt>
      <dd className="list-content border-none pt-0">
        <div>
          Explore Intern –{" "}
          <LinkExternal href="//microsoft.com">Microsoft</LinkExternal>
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Redmond, WA
        </div>
        <div className="pt-1 text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
          Viva Engage Answers
        </div>
      </dd>
    </dl>
  );
}
