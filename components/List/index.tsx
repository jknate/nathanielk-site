import type { ReactNode } from "react";

export function Ul({ children }: { children: ReactNode }) {
  return <ul className="my-4 list-disc space-y-2 pl-5">{children}</ul>;
}

export function Ol({ children }: { children: ReactNode }) {
  return <ol className="my-4 list-decimal space-y-2 pl-5">{children}</ol>;
}

export function Li({ children }: { children: ReactNode }) {
  return (
    <li className="text-neutral-700 dark:text-silver-dark">{children}</li>
  );
}
