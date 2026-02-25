
export default function Footer() {
  return (
    <footer className="flex w-full justify-center">
      <div className="w-full">
        <div className="flex px-6 sm:h-[4.5rem] h-[5.75rem] w-full items-end justify-between border-t border-solid border-neutral-500/10 py-4 sm:py-6 dark:border-white/5 box-border">
          <div className="flex w-full justify-end">
            <span className="text-sm text-neutral-500/60 dark:text-silver-dark/40">
              &copy; {new Date().getFullYear()} Nathaniel Kilonzo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
