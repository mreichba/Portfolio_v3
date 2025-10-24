import { usePageMeta } from '@/lib/seo';
import { Badge } from '@/ui/Badge';
import { Separator } from '@/ui/Separator';

const values = [
  {
    title: 'Craft',
    description:
      'I sweat the details, from micro-interactions to CI pipelines. Clean systems age better.',
  },
  {
    title: 'Clarity',
    description:
      'Simple interfaces, well-structured APIs, and considerate communication unlock velocity.',
  },
  {
    title: 'Curiosity',
    description:
      'I love debugging gnarly issues and experimenting with new ideas that move products forward.',
  },
];

export default function About() {
  usePageMeta({
    title: 'About',
    description:
      'Full-stack engineer grounded in React, TypeScript, and Go. Building resilient, accessible products.',
  });

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-14">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
          About
        </h1>
        <p className="text-lg text-ink-900/70 dark:text-white/70">
          I’m Mason Reich, a full-stack engineer who blends product intuition with systems thinking.
          I’ve shipped production apps across healthcare, safety, and developer tooling, always with
          an eye on maintainability and accessibility.
        </p>
        <Badge variant="outline">Remote-first • EST</Badge>
      </header>
      <Separator />
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">
          Values
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-ink-900/10 bg-white/70 p-6 text-sm shadow-sm dark:border-white/10 dark:bg-ink-900/60"
            >
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                {value.title}
              </h3>
              <p className="mt-3 text-ink-900/70 dark:text-white/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">
          Outside of work
        </h2>
        <p className="text-base leading-relaxed text-ink-900/80 dark:text-white/75">
          You can usually find me experimenting with new recipes, tweaking my home lab, or
          exploring local trails. These hobbies keep me curious and grounded, feeding back into the
          products I build.
        </p>
      </section>
    </article>
  );
}

