import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageShell } from '@/layout/PageShell';
import { usePageMeta } from '@/lib/seo';
import Home from '@/routes/Home';

const Projects = lazy(() => import('@/routes/Projects'));
const ProjectCase = lazy(() => import('@/routes/ProjectCase'));
const About = lazy(() => import('@/routes/About'));
const Contact = lazy(() => import('@/routes/Contact'));

const LoadingState = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-[40vh] items-center justify-center text-sm text-ink-900/60 dark:text-white/60"
  >
    Loading content…
  </div>
);

function NotFound() {
  usePageMeta({
    title: 'Page not found',
    description: 'The page you are looking for could not be located.',
  });

  return (
    <section className="mx-auto flex max-w-xl flex-col items-start gap-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
        Page not found
      </h1>
      <p className="text-lg text-ink-900/70 dark:text-white/70">
        We couldn’t find the page you were looking for. Try returning home or browsing projects.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <PageShell>
      <Suspense fallback={<LoadingState />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectCase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageShell>
  );
}
