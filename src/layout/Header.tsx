import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useTheme } from '@/providers/ThemeProvider';
import { Button } from '@/ui/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/Tooltip';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const nextTheme = useMemo(() => (theme === 'dark' ? 'light' : 'dark'), [theme]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 isolate overflow-hidden border-b border-white/30 bg-gradient-to-b from-white/85 via-white/55 to-white/15 backdrop-blur-2xl transition dark:border-white/10 dark:from-ink-900/95 dark:via-ink-900/75 dark:to-ink-900/35">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 mix-blend-screen dark:opacity-70 bg-aurora-flares"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px -z-10 bg-gradient-to-r from-indigo-400/50 via-transparent to-cyan-300/50 dark:from-indigo-300/60 dark:to-cyan-200/60"
        aria-hidden
      />
      <div className="container flex h-20 items-center justify-between">
        <NavLink
          to="/"
          className="group flex items-center gap-3 text-base font-semibold tracking-tight transition-colors hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 via-cyan-400/20 to-transparent text-indigo-600 shadow-inner shadow-[inset_0_0_30px_rgba(79,70,229,0.25)] dark:from-indigo-400/30 dark:via-cyan-300/30 dark:text-indigo-200">
            MR
          </span>
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent transition group-hover:opacity-90 dark:from-indigo-300 dark:via-fuchsia-300 dark:to-cyan-200">
            Mason Reichbauer
          </span>
        </NavLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-xl px-3 py-2 text-sm font-medium transition-colors hover:bg-white/50 hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:hover:bg-white/10',
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500/25 via-cyan-400/20 to-transparent text-indigo-600 shadow-[0_20px_50px_-30px_rgba(59,130,246,0.75)] dark:from-indigo-400/30 dark:via-cyan-300/25 dark:to-transparent dark:text-indigo-200'
                    : 'text-ink-900/75 dark:text-white/70',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                aria-label={`Switch to ${nextTheme} theme`}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <Sun className="size-5" aria-hidden />
                ) : (
                  <Moon className="size-5" aria-hidden />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle {nextTheme} mode</TooltipContent>
          </Tooltip>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {isMobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="md:hidden"
            initial={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    height: 0,
                  }
            }
            animate={
              shouldReduceMotion
                ? { height: 'auto' }
                : {
                    opacity: 1,
                    height: 'auto',
                    transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
                  }
            }
            exit={
              shouldReduceMotion
                ? { height: 0 }
                : {
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.14, ease: [0.16, 1, 0.3, 1] },
                  }
            }
          >
            <div className="container border-t border-white/40 bg-white/70 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/70">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                          isActive
                            ? 'bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-transparent text-indigo-600 shadow-[0_20px_50px_-30px_rgba(59,130,246,0.65)] dark:from-indigo-400/35 dark:via-cyan-300/25 dark:to-transparent dark:text-indigo-200'
                            : 'text-ink-900/80 hover:bg-indigo-500/5 dark:text-white/80 dark:hover:bg-white/10',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
