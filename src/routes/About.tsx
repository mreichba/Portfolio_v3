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
    <article className="relative mx-auto flex max-w-4xl flex-col gap-12 overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-white/95 via-indigo-100/45 to-white/70 p-10 shadow-[0_45px_95px_-55px_rgba(15,23,42,0.2)] backdrop-blur-2xl dark:border-white/10 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-900/70 dark:shadow-[0_45px_95px_-55px_rgba(15,23,42,0.7)]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-55 mix-blend-screen dark:opacity-35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-400/35"
        aria-hidden
      />
      <header className="relative z-10 space-y-6">
        <Badge className="w-fit rounded-full border border-white/60 bg-gradient-to-r from-indigo-500/15 via-fuchsia-400/15 to-cyan-300/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-ink-900/65 dark:border-white/10 dark:from-indigo-500/35 dark:via-fuchsia-500/25 dark:to-cyan-400/25 dark:text-white/65" variant="outline">
          Profile
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
          Mason Reichbauer
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-ink-900/70 dark:text-white/75">
          I’m a full-stack engineer who blends product intuition with systems thinking. Over the past few years I’ve shipped
          production software across civic safety, healthcare, and developer tooling—always anchoring design, accessibility, and
          reliability so teams can scale with confidence.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-ink-900/60 dark:text-white/60">
          <span className="rounded-full border border-white/60 bg-white/85 px-4 py-1 dark:border-white/10 dark:bg-white/5">
            Remote-first • EST
          </span>
          <span className="rounded-full border border-white/60 bg-white/85 px-4 py-1 dark:border-white/10 dark:bg-white/5">
            Former lead at Live Alert, Matrix Quiz, FSR
          </span>
        </div>
      </header>
      <Separator className="relative z-10 border-white/40 dark:border-white/10" />
      <section className="relative z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-aurora-card p-6 text-sm shadow-[0_28px_65px_-45px_rgba(79,70,229,0.35)] dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/85 dark:via-indigo-950/70 dark:to-slate-900/60 dark:shadow-[0_28px_65px_-45px_rgba(79,70,229,0.65)]"
            >
              <span
                className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/25 via-cyan-400/18 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-500/40 dark:via-cyan-400/20"
                aria-hidden
              />
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-900/70 dark:text-white/75">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative z-10 space-y-6">
        <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">Outside of work</h2>
        <p className="text-base leading-relaxed text-ink-900/75 dark:text-white/75">
          You can usually find me experimenting with new recipes, tuning my home lab, or exploring local trails. Staying curious
          away from the keyboard is what fuels the craft and creativity I bring into every build.
        </p>
      </section>
    </article>
  );
}
