import Link from "next/link";
import Footer from "../Footer";

export function Main({ children, slim = false, showBack = false }) {
  return (
    <>
      {showBack && (
        <div className="fixed top-6 left-6 z-50">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 dark:text-silver-dark dark:hover:text-white transition-colors [font-variation-settings:'opsz'_14,'wght'_500]"
          >
            ← Home
          </Link>
        </div>
      )}
      <main className="m:px-0 flex justify-center px-6 pb-8 pt-8 sm:pb-32 sm:pt-32 sm:min-h-[calc(100vh-4.5rem)] min-h-[calc(100vh-5.75rem)]">
        <article className={`w-full ${slim ? "max-w-xl" : "max-w-main"}`}>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}

export function Container({ children }) {
  return (
    <>
      <main className="m:px-0 flex justify-center px-6 pt-8 sm:pt-32">
        <article className="w-full max-w-main grow">{children}</article>
      </main>
    </>
  );
}
