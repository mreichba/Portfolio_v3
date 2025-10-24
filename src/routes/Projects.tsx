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
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
          Projects
        </h1>
        <p className="max-w-3xl text-lg text-ink-900/70 dark:text-white/70">
          Deep dives into the products and systems I&apos;ve shipped. Every case study highlights the
          problem, approach, stack, and measurable outcomes.
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Project tags">
          {tags.map((tag) => (
            <Badge key={tag} variant="subtle">
              #{tag}
            </Badge>
          ))}
        </div>
      </header>
      <Separator />
      <ProjectGrid projects={projects} />
    </div>
  );
}
