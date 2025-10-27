import { Github, Linkedin, Mail } from 'lucide-react';

import { usePageMeta } from '@/lib/seo';
import { Button } from '@/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/Card';
import { Badge } from '@/ui/Badge';

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Let’s collaborate on high-impact web apps. Reach out via email or connect on GitHub and LinkedIn.',
  });

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-12">
      <header className="space-y-6">
        <Badge className="w-fit rounded-full border border-white/60 bg-gradient-to-r from-indigo-500/15 via-fuchsia-400/15 to-cyan-300/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-ink-900/65 dark:border-white/10 dark:from-indigo-500/35 dark:via-fuchsia-500/25 dark:to-cyan-400/25 dark:text-white/65" variant="outline">
          Collaborate
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
          Let’s build something luminous together
        </h1>
        <p className="text-lg leading-relaxed text-ink-900/70 dark:text-white/75">
          Share a challenge, roadmap, or rough idea—I'm ready to help shape a plan, lead delivery, and ship experiences your
          audience will trust.
        </p>
      </header>
      <Card className="relative overflow-hidden border border-white/60 bg-gradient-to-br from-white/95 via-indigo-100/45 to-white/70 p-0 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.2)] backdrop-blur-2xl dark:border-white/10 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-900/70 dark:shadow-[0_35px_80px_-45px_rgba(15,23,42,0.7)]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-aurora-ribbons opacity-55 mix-blend-screen dark:opacity-45"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-35 dark:opacity-45"
          style={{
            backgroundImage:
              'radial-gradient(420px circle at 10% 20%, rgba(99,102,241,0.24), transparent 60%), radial-gradient(360px circle at 90% 10%, rgba(56,189,248,0.18), transparent 65%)',
          }}
          aria-hidden
        />
        <CardHeader className="relative space-y-2 border-b border-white/60 bg-white/85 px-6 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <CardTitle className="text-xl font-semibold text-ink-900 dark:text-white">
            Let’s build something great
          </CardTitle>
        </CardHeader>
        <CardContent className="relative grid gap-6 px-6 py-6 text-ink-900/70 dark:text-white/75">
          <Button asChild variant="primary" className="inline-flex w-full items-center justify-center gap-3 md:w-max">
            <a href="mailto:hello@mason.codes">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/25 via-fuchsia-400/20 to-cyan-300/20 shadow-[0_10px_25px_-12px_rgba(59,130,246,0.35)] dark:from-indigo-500/50 dark:via-fuchsia-500/35 dark:to-cyan-400/35 dark:shadow-[0_10px_25px_-12px_rgba(59,130,246,0.6)]">
                <Mail className="size-4" aria-hidden />
              </span>
              hello@mason.codes
            </a>
          </Button>
          <div className="grid gap-4 text-sm text-ink-900/65 dark:text-white/70">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-indigo-100/70 shadow-[0_10px_25px_-14px_rgba(148,163,184,0.35)] dark:bg-white/8 dark:shadow-[0_10px_25px_-14px_rgba(148,163,184,0.6)]">
                <Github className="size-4 text-ink-900/80 dark:text-white/80" aria-hidden />
              </span>
              <a
                className="font-medium text-ink-900 underline decoration-indigo-400/40 decoration-2 underline-offset-4 transition hover:text-indigo-500 dark:text-white dark:hover:text-cyan-300"
                href="https://github.com/mreichba"
                target="_blank"
                rel="noreferrer"
              >
                GitHub (mreichba)
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-indigo-100/70 shadow-[0_10px_25px_-14px_rgba(148,163,184,0.35)] dark:bg-white/8 dark:shadow-[0_10px_25px_-14px_rgba(148,163,184,0.6)]">
                <Linkedin className="size-4 text-ink-900/80 dark:text-white/80" aria-hidden />
              </span>
              <a
                className="font-medium text-ink-900 underline decoration-indigo-400/40 decoration-2 underline-offset-4 transition hover:text-indigo-500 dark:text-white dark:hover:text-cyan-300"
                href="https://www.linkedin.com/in/masonreich"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
      <section className="space-y-4 rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-white/70 to-white/55 p-6 text-sm text-ink-900/60 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-ink-900/80 dark:via-ink-900/60 dark:to-ink-900/35 dark:text-white/65 dark:shadow-[0_25px_70px_-50px_rgba(15,23,42,0.55)]">
        <h2 className="text-base font-semibold uppercase tracking-[0.24em] text-ink-900/50 dark:text-white/50">
          Accessibility promise
        </h2>
        <p>
          Emails and opportunities are welcome in any format. If you have accessibility requirements, let me know and I’ll flex
          the process to meet your needs.
        </p>
      </section>
    </div>
  );
}
