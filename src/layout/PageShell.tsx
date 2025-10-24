import type { ReactNode } from 'react';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink-900 transition-colors dark:bg-ink-900 dark:text-white">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="container flex-1 py-12"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
