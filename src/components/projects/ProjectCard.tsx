import { ArrowUpRight, ExternalLink, NotebookPen } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

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

const MotionCard = motion(Card);
const MotionBadge = motion(Badge);
const MotionStackChip = motion.span;

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;
  const navigate = useNavigate();

  const goToCaseStudy = () => {
    navigate(`/projects/${project.slug}`);
  };

  const handleKeyActivate = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      goToCaseStudy();
    }
  };

  const hoverTilt = shouldReduceMotion
    ? undefined
    : {
        rotateX: -2,
        rotateY: 2,
        translateY: -6,
        transition: { duration: 0.18, ease: easeOut },
      };

  const tapTilt = shouldReduceMotion
    ? undefined
    : {
        rotateX: 0,
        rotateY: 0,
        translateY: -2,
        transition: { duration: 0.12, ease: easeOut },
      };

  return (
    <MotionCard
      className="relative flex h-full cursor-pointer flex-col border-0 bg-white/90 shadow-surface ring-1 ring-ink-900/5 transition-shadow hover:shadow-2xl dark:bg-ink-900/90 dark:ring-white/10"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { duration: 0.18, ease: easeOut }}
      whileHover={hoverTilt}
      whileTap={tapTilt}
      role="link"
      tabIndex={0}
      aria-label={`View the ${project.title} case study`}
      onClick={goToCaseStudy}
      onKeyDown={handleKeyActivate}
    >
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
          {project.highlights.map((item, index) => (
            <MotionBadge
              key={item}
              variant="subtle"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.16,
                ease: easeOut,
                delay: shouldReduceMotion ? 0 : index * 0.04,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.05, transition: { duration: 0.12, ease: easeOut } }
              }
            >
              {item}
            </MotionBadge>
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
              {project.stack.map((tool, index) => (
                <MotionStackChip
                  key={tool}
                  className="rounded-md bg-ink-900/10 px-2 py-0.5 text-xs font-medium dark:bg-white/10"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.16,
                    ease: easeOut,
                    delay: shouldReduceMotion ? 0 : 0.1 + index * 0.03,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.05, transition: { duration: 0.12, ease: easeOut } }
                  }
                >
                  {tool}
                </MotionStackChip>
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
          <Button
            asChild
            variant="secondary"
            onClick={(event) => event.stopPropagation()}
          >
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              Live demo
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </Button>
        ) : null}
        {project.links.client ? (
          <Button
            asChild
            variant="ghost"
            onClick={(event) => event.stopPropagation()}
          >
            <a href={project.links.client} target="_blank" rel="noreferrer">
              Client repo
              <NotebookPen className="size-4" aria-hidden />
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </MotionCard>
  );
}
