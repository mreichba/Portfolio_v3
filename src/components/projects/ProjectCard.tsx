import { ArrowUpRight, ExternalLink, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Project } from '@/types/project';
import { Badge } from '@/ui/Badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/Card';
import { Button } from '@/ui/Button';
import { Separator } from '@/ui/Separator';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative flex h-full flex-col border-0 bg-white/90 shadow-surface ring-1 ring-ink-900/5 transition-transform hover:-translate-y-1 hover:shadow-2xl dark:bg-ink-900/90 dark:ring-white/10">
      {project.cover ? (
        <div className="relative mb-4 overflow-hidden rounded-2xl bg-ink-900/5">
          <img
            src={project.cover}
            alt={`${project.title} cover`}
            className="h-48 w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <Badge key={item} variant="subtle">
              {item}
            </Badge>
          ))}
        </div>
        <Separator className="my-2" />
        <dl className="grid gap-2 text-sm text-ink-900/70 dark:text-white/70">
          <div className="flex items-start gap-2">
            <dt className="mt-1 shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-ink-900/50 dark:text-white/50">
              Role
            </dt>
            <dd>{project.role}</dd>
          </div>
          <div className="flex items-start gap-2">
            <dt className="mt-1 shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-ink-900/50 dark:text-white/50">
              Stack
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {project.stack.map((tool) => (
                <span key={tool} className="rounded-md bg-ink-900/10 px-2 py-0.5 text-xs font-medium dark:bg-white/10">
                  {tool}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="mt-4 flex flex-wrap gap-2">
        <Button asChild>
          <Link to={`/projects/${project.slug}`}>
            View case study
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </Button>
        {project.links.demo ? (
          <Button asChild variant="secondary">
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              Live demo
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </Button>
        ) : null}
        {project.links.client ? (
          <Button asChild variant="ghost">
            <a href={project.links.client} target="_blank" rel="noreferrer">
              Client repo
              <NotebookPen className="size-4" aria-hidden />
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
