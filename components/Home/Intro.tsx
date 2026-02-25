import type { ReactNode } from "react";
import Link from "next/link";

export default function Intro({ children }: { children: ReactNode }) {
  return (
    <dl className="list-container">
      <dt className="list-title border-none pb-4 pt-0 leading-relaxed sm:pb-0">
        <h1 className="flex items-center gap-1 text-neutral-800 dark:text-white">
          <Link href="/" className="[font-variation-settings:'wght'_550]">
            Nathaniel Kilonzo
          </Link>
        </h1>
        <h2 className="text-neutral-500 dark:text-silver-dark">
          Software Engineer
        </h2>
      </dt>
      <dd className="list-content border-none pt-0">{children}</dd>
    </dl>
  );
}
