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
      <section className="mx-auto flex max-w-3xl flex-col gap-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
          Project not found
        </h1>
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
    <article className="mx-auto flex max-w-3xl flex-col gap-10 py-12">
      <header className="space-y-4">
        <Badge variant="outline">Case Study</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-lg text-ink-900/70 dark:text-white/70">
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="subtle">
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
            <Button asChild variant="outline">
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
      <Separator />
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">
          Problem
        </h2>
        <p className="text-base leading-relaxed text-ink-900/80 dark:text-white/75">
          {project.problem}
        </p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">
          Approach
        </h2>
        <p className="text-base leading-relaxed text-ink-900/80 dark:text-white/75">
          {project.approach}
        </p>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">
          Results
        </h2>
        <ul className="grid gap-2 text-base leading-relaxed text-ink-900/80 dark:text-white/75">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-2">
              <span aria-hidden className="mt-2 inline-block size-1.5 rounded-full bg-indigo-500" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
