import { ArrowRight, Sparkles } from 'lucide-react';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects } from '@/content/projects';
import { usePageMeta } from '@/lib/seo';
import { Button } from '@/ui/Button';
import { Badge } from '@/ui/Badge';

export default function Home() {
  usePageMeta({
    title: 'Home',
    description:
      'Full-stack engineer designing and shipping reliable web apps with React, Go, and thoughtful DX.',
  });

  return (
    <div className="space-y-24">
      <section className="bg-subtle-radial shadow-surface relative overflow-hidden rounded-3xl px-6 py-16">
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <Badge className="mx-auto w-fit" variant="outline">
            <Sparkles className="mr-2 size-3.5" aria-hidden />
            Available for select collaborations
          </Badge>
          <h1 className="text-ink-900 text-4xl font-semibold tracking-tight text-balance sm:text-5xl dark:text-white">
            I design &amp; ship reliable web apps.
          </h1>
          <p className="text-ink-900/70 mx-auto max-w-2xl text-lg text-pretty dark:text-white/70">
            Full-stack engineer focused on React, Go, and cloud-native tooling. I care about polish,
            accessibility, and building durable systems that scale with your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="px-6 py-3" asChild variant="primary">
              <a href="#featured-projects">
                View projects
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="/contact">Get in touch</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-ink-900 text-3xl font-semibold tracking-tight dark:text-white">
            Featured projects
          </h2>
          <p className="text-ink-900/70 max-w-2xl dark:text-white/70">
            JSON-powered portfolio cards with live links and stack highlights. Swap in new data
            without touching components.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
