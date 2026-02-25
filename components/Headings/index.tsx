import type { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-8 mb-3 text-lg text-neutral-800 dark:text-white [font-variation-settings:'opsz'_20,'wght'_550]">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 mb-2 text-base text-neutral-800 dark:text-white [font-variation-settings:'opsz'_16,'wght'_550]">
      {children}
    </h3>
  );
}
