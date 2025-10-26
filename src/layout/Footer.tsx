import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/30 bg-gradient-to-b from-white/70 via-white/40 to-white/20 py-10 text-sm text-ink-900/60 backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-b dark:from-ink-900/85 dark:via-ink-900/65 dark:to-ink-900/35 dark:text-white/55">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-60 mix-blend-screen dark:opacity-50"
        aria-hidden
      />
      <div className="container relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-base font-medium text-ink-900 dark:text-white">Mason Reichbauer</p>
          <p>&copy; {new Date().getFullYear()}—Building thoughtful, aurora-inspired experiences.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link className="transition hover:text-indigo-500 dark:hover:text-indigo-300" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-indigo-500 dark:hover:text-indigo-300" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-indigo-500 dark:hover:text-indigo-300" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
