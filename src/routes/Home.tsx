import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { projects } from '@/content/projects';
import { usePageMeta } from '@/lib/seo';
import { Button } from '@/ui/Button';
import { Badge } from '@/ui/Badge';

const heroStats = [
  {
    label: 'Stack',
    value: 'React • TypeScript • Go • AWS',
  },
  {
    label: 'Specialty',
    value: 'Design systems & DX for product teams',
  },
  {
    label: 'Recent launch',
    value: 'City-wide alerting platform & learning tools',
  },
];

const heroHighlights = [
  {
    title: 'Lead-to-launch partner',
    copy: 'Guiding discovery, roadmap, and delivery so teams ship meaningful outcomes—not just tickets.',
  },
  {
    title: 'Design systems that scale',
    copy: 'Building accessible component libraries that unlock consistent brand storytelling across products.',
  },
  {
    title: 'Operational excellence',
    copy: 'Investing in observability, CI/CD, and developer experience so releases stay fast and confident.',
  },
];

const MotionSection = motion.section;
const MotionDiv = motion.div;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const easeOut = [0.16, 1, 0.3, 1] as const;

  usePageMeta({
    title: 'Home',
    description:
      'Full-stack engineer crafting polished, resilient web experiences for product-led teams.',
  });

  return (
    <div className="flex flex-col gap-24">
      <MotionSection
        className="relative overflow-hidden rounded-[2.75rem] border border-white/50 bg-gradient-to-br from-white/85 via-white/55 to-white/20 px-6 py-16 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-gradient-to-br dark:from-ink-900/90 dark:via-ink-900/70 dark:to-ink-900/40"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.18, ease: easeOut }}
      >
        <div
          className="pointer-events-none absolute inset-0 -z-20 bg-aurora-ribbons opacity-80 mix-blend-screen dark:opacity-70"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-400/40 via-cyan-300/30 to-transparent blur-3xl dark:from-indigo-500/35 dark:via-cyan-400/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-400/25 via-purple-400/20 to-transparent blur-3xl dark:from-fuchsia-400/30 dark:via-purple-500/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(440px circle at 10% 20%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(480px circle at 85% 25%, rgba(56,189,248,0.18), transparent 60%)',
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-5xl flex-col justify-center gap-14 text-center lg:min-h-[calc(100vh-4rem)] lg:text-left">
          <MotionDiv
            className="flex flex-col items-center gap-6 lg:items-start"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.2, ease: easeOut }}
          >
            <Badge className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-400/20 to-cyan-300/20 px-4 py-1.5 text-sm font-medium text-indigo-600 shadow-sm dark:from-indigo-400/30 dark:via-fuchsia-400/25 dark:to-cyan-300/25 dark:text-indigo-200">
              <Sparkles className="size-4" aria-hidden />
              Partnering with product-led teams
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white">
              Crafting aurora-lit web experiences that blend polish with reliable engineering.
            </h1>
            <p className="max-w-2xl text-lg text-ink-900/70 lg:text-xl dark:text-white/70">
              I’m Mason Reichbauer, a full-stack engineer who pairs visual storytelling with deep platform expertise. From civic
              safety apps to learning tools, I help teams design, build, and scale software that feels as good as it performs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button className="h-12 px-7" asChild variant="primary">
                <a href="#featured-projects">
                  Explore case studies
                  <ArrowRight className="ml-2 size-4" aria-hidden />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/contact">Start a conversation</a>
              </Button>
            </div>
          </MotionDiv>

          <div className="grid gap-6 rounded-3xl border border-white/50 bg-white/65 p-6 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.4)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <MotionDiv
                  key={stat.label}
                  className="rounded-2xl border border-white/60 bg-gradient-to-br from-white/85 via-white/60 to-white/30 p-4 text-left shadow-sm transition dark:border-white/10 dark:bg-gradient-to-br dark:from-white/10 dark:via-white/5 dark:to-transparent"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={shouldReduceMotion ? undefined : { duration: 0.18, ease: easeOut }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-900/50 dark:text-white/50">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink-900 dark:text-white">{stat.value}</p>
                </MotionDiv>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {heroHighlights.map((highlight, index) => (
                <MotionDiv
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/60 bg-aurora-card p-6 text-left shadow-[0_28px_65px_-45px_rgba(79,70,229,0.55)] transition dark:border-white/10 dark:bg-aurora-card-dark"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { duration: 0.18, ease: easeOut, delay: 0.04 * index }
                  }
                >
                  <span className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-transparent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-400/25 dark:via-cyan-300/25" aria-hidden />
                  <h2 className="text-base font-semibold text-ink-900 dark:text-white">{highlight.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/70 dark:text-white/70">{highlight.copy}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <section
        id="featured-projects"
        className="relative overflow-hidden rounded-[2.5rem] border border-white/45 bg-gradient-to-br from-white/80 via-white/50 to-white/20 px-6 py-14 shadow-[0_45px_95px_-55px_rgba(15,23,42,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-ink-900/85 dark:via-ink-900/65 dark:to-ink-900/40 scroll-mt-32"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-70 mix-blend-screen dark:opacity-60"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-400/35"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-8 text-center lg:text-left">
          <div className="flex flex-col gap-3">
            <Badge className="self-center lg:self-start" variant="outline">
              Featured work
            </Badge>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink-900 lg:text-4xl dark:text-white">
              Selected case studies
            </h2>
            <p className="text-lg text-ink-900/70 dark:text-white/70">
              Civic safety, education, and creative tooling—each project pairs thoughtful UX with resilient engineering to move
              mission-driven teams forward.
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-12">
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </div>
  );
}
