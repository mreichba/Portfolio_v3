import { Link, useParams } from 'react-router-dom';

import { findProjectBySlug } from '@/content/projects';
import { usePageMeta } from '@/lib/seo';
import { Badge } from '@/ui/Badge';
import { Button } from '@/ui/Button';
import { Separator } from '@/ui/Separator';

export default function ProjectCase() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? findProjectBySlug(slug) : undefined;

  const canonicalUrl =
    project && typeof window !== 'undefined'
      ? `${window.location.origin}/projects/${project.slug}`
      : undefined;

  usePageMeta({
    title: project ? project.title : 'Project case study',
    description: project
      ? project.summary
      : 'Detailed engineering case studies covering context, approach, and results.',
    canonicalUrl,
  });

  if (!project) {
    return (
      <section className="mx-auto flex max-w-3xl flex-col gap-6 rounded-[2.5rem] border border-white/45 bg-gradient-to-br from-white/80 via-white/55 to-white/20 p-12 text-center shadow-[0_45px_95px_-55px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-ink-900/85 dark:via-ink-900/65 dark:to-ink-900/40">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">Project not found</h1>
        <p className="text-lg text-ink-900/70 dark:text-white/70">
          The requested project could not be located. Try browsing all{' '}
          <Link className="text-indigo-500 underline" to="/projects">
            projects
          </Link>
          .
        </p>
      </section>
    );
  }

  return (
    <article className="relative mx-auto flex max-w-4xl flex-col gap-10 overflow-hidden rounded-[2.75rem] border border-white/45 bg-gradient-to-br from-white/85 via-white/55 to-white/20 p-12 shadow-[0_45px_95px_-55px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-ink-900/90 dark:via-ink-900/70 dark:to-ink-900/40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-70 mix-blend-screen dark:opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-4 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl dark:bg-cyan-400/35"
        aria-hidden
      />
      <header className="relative z-10 space-y-6">
        <Badge className="w-fit rounded-full border border-white/60 bg-gradient-to-r from-indigo-500/20 via-fuchsia-400/20 to-cyan-300/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-ink-900/60 dark:border-white/10 dark:from-indigo-400/30 dark:via-fuchsia-400/25 dark:to-cyan-300/25 dark:text-white/60" variant="outline">
          Case Study
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">{project.title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-900/70 dark:text-white/70">{project.summary}</p>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <Badge
              key={item}
              className="rounded-full border border-white/60 bg-gradient-to-r from-white/85 via-indigo-100/40 to-white/55 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-900/70 dark:border-white/10 dark:from-white/15 dark:via-indigo-400/10 dark:to-transparent dark:text-white/70"
              variant="outline"
            >
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.links.demo ? (
            <Button asChild>
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                View live demo
              </a>
            </Button>
          ) : null}
          {project.links.client ? (
            <Button asChild variant="secondary">
              <a href={project.links.client} target="_blank" rel="noreferrer">
                Client repo
              </a>
            </Button>
          ) : null}
          {project.links.server ? (
            <Button asChild variant="ghost">
              <a href={project.links.server} target="_blank" rel="noreferrer">
                Server repo
              </a>
            </Button>
          ) : null}
        </div>
      </header>
      <Separator className="relative z-10 border-white/40 dark:border-white/10" />
      <section className="relative z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">Problem</h2>
        <p className="text-base leading-relaxed text-ink-900/80 dark:text-white/75">{project.problem}</p>
      </section>
      <section className="relative z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">Approach</h2>
        <p className="text-base leading-relaxed text-ink-900/80 dark:text-white/75">{project.approach}</p>
      </section>
      <section className="relative z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">Results</h2>
        <ul className="grid gap-2 text-base leading-relaxed text-ink-900/80 dark:text-white/75">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 inline-block size-1.5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
