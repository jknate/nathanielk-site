import type { ReactNode } from "react";

export default function InlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
