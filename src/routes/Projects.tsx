import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects } from '@/content/projects';
import { usePageMeta } from '@/lib/seo';
import { Badge } from '@/ui/Badge';
import { Separator } from '@/ui/Separator';

export default function Projects() {
  usePageMeta({
    title: 'Projects',
    description:
      'Explore full-stack case studies featuring React, TypeScript, Node, and cloud-native infrastructure.',
  });

  const tags = Array.from(
    new Set(projects.flatMap((project) => project.tags)),
  ).sort();

  return (
    <div className="flex flex-col gap-14">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/45 bg-gradient-to-br from-white/80 via-white/55 to-white/20 p-10 shadow-[0_45px_95px_-55px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-ink-900/85 dark:via-ink-900/65 dark:to-ink-900/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-70 mix-blend-screen dark:opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-12 top-0 h-64 w-64 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-400/35"
          aria-hidden
        />
        <header className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-gradient-to-r from-indigo-500/20 via-fuchsia-400/20 to-cyan-300/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-ink-900/60 dark:border-white/10 dark:from-indigo-400/30 dark:via-fuchsia-400/25 dark:to-cyan-300/25 dark:text-white/60">
            Case Studies
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
              Work that pairs clarity with measurable impact
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-ink-900/70 dark:text-white/70">
              Each project blends research, product design, and systems engineering. Explore how strategy, execution, and
              observability come together to deliver dependable experiences for communities and teams.
            </p>
          </div>
          <Separator className="border-white/40 dark:border-white/10" />
          <div className="flex flex-wrap gap-2" aria-label="Project tags">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="rounded-full border border-white/60 bg-gradient-to-r from-white/85 via-indigo-100/40 to-white/55 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-900/70 dark:border-white/10 dark:from-white/15 dark:via-indigo-400/10 dark:to-transparent dark:text-white/70"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </header>
      </section>
      <ProjectGrid projects={projects} />
    </div>
  );
}
