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
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-paper/80 backdrop-blur-md dark:border-white/10 dark:bg-ink-900/80">
      <div className="container flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight transition-colors hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-200">
            MR
          </span>
          <span>Mason Reichbauer</span>
        </NavLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                  isActive
                    ? 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200'
                    : 'text-ink-900/70 dark:text-white/70',
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
            <div className="container border-t border-ink-900/10 py-3 dark:border-white/10">
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-lg px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400',
                          isActive
                            ? 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200'
                            : 'text-ink-900/80 hover:bg-ink-900/5 dark:text-white/80 dark:hover:bg-white/10',
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
