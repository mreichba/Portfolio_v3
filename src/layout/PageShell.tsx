import type { ReactNode } from 'react';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-ink-900 transition-colors dark:text-white">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-aurora-light dark:bg-gradient-to-br dark:from-slate-950 dark:via-indigo-950/80 dark:to-slate-900" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-60 mix-blend-screen dark:opacity-35 bg-aurora-ribbons" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-48 mix-blend-overlay dark:opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(520px circle at 12% 18%, rgba(99,102,241,0.14), transparent 62%), radial-gradient(480px circle at 82% 14%, rgba(56,189,248,0.12), transparent 64%), radial-gradient(620px circle at 52% 82%, rgba(45,212,191,0.1), transparent 68%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] opacity-20 dark:opacity-28"
        style={{
          backgroundImage:
            'radial-gradient(38% 46% at 15% 85%, rgba(236,72,153,0.14), transparent), radial-gradient(48% 48% at 82% 78%, rgba(59,130,246,0.12), transparent)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
        aria-hidden
      />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="container relative flex-1 scroll-mt-28 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:scroll-mt-32"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
