import { Moon, Sun } from 'lucide-react';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

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

  const nextTheme = useMemo(() => (theme === 'dark' ? 'light' : 'dark'), [theme]);

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
          <span>portfolio-v3</span>
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
          <Button className="hidden md:inline-flex" asChild size="sm" variant="secondary">
            <NavLink to="/projects">View projects</NavLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
