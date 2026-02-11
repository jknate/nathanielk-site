"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    href: "/",
    text: "About",
  },
  {
    href: "/writing",
    text: "Writing",
  },
  {
    href: "/recently",
    text: "Recently",
  },
];

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between">
      <menu className="flex w-fit flex-wrap items-center gap-5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                isActive(pathname, link.href)
                  ? "transition-colors"
                  : "link"
              }
              style={
                isActive(pathname, link.href)
                  ? { color: "var(--color-foreground)" }
                  : undefined
              }
            >
              {link.text}
            </Link>
          </li>
        ))}
      </menu>
    </nav>
  );
}
