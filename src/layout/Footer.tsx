import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/30 bg-gradient-to-b from-white/95 via-indigo-100/35 to-white/75 py-8 text-sm text-ink-900/65 backdrop-blur-xl dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white/65">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-45 mix-blend-screen dark:opacity-35"
        aria-hidden
      />
      <div className="container relative z-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="space-y-1.5">
          <p className="text-base font-semibold text-ink-900 dark:text-white">Mason Reichbauer</p>
          <p className="text-ink-900/70 dark:text-white/70">&copy; {new Date().getFullYear()}—Building thoughtful, aurora-inspired experiences.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-3">
            <li>
              <Link className="transition hover:text-indigo-500 dark:hover:text-cyan-300" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-indigo-500 dark:hover:text-cyan-300" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-indigo-500 dark:hover:text-cyan-300" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
