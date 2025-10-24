import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-white/70 py-8 text-sm text-ink-900/50 backdrop-blur-md dark:border-white/10 dark:bg-ink-900/70 dark:text-white/50">
      <div className="container flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p>&copy; {new Date().getFullYear()} portfolio-v3. Crafted with care.</p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link className="hover:text-indigo-500" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-indigo-500" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

