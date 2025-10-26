import type { ReactNode } from 'react';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden text-ink-900 transition-colors dark:text-white">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-aurora-light dark:bg-aurora-dark" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-80 mix-blend-screen dark:opacity-70 dark:mix-blend-lighten bg-aurora-ribbons" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 mix-blend-soft-light dark:opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 12% 18%, rgba(99,102,241,0.22), transparent 55%), radial-gradient(520px circle at 85% 10%, rgba(56,189,248,0.18), transparent 52%), radial-gradient(640px circle at 48% 82%, rgba(14,165,233,0.15), transparent 60%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-[5] opacity-60 mix-blend-screen dark:mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(35% 45% at 12% 88%, rgba(236,72,153,0.24), transparent), radial-gradient(45% 45% at 88% 78%, rgba(56,189,248,0.18), transparent)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
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
