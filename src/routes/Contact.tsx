import { Mail, MessageSquare, Send } from 'lucide-react';

import { usePageMeta } from '@/lib/seo';
import { Button } from '@/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/Card';
import { Separator } from '@/ui/Separator';

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Let’s collaborate on high-impact web apps. Reach out via email or connect on GitHub and LinkedIn.',
  });

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
          Contact
        </h1>
        <p className="text-lg text-ink-900/70 dark:text-white/70">
          Ready to collaborate or want to chat about a new idea? Reach out via email and I’ll reply
          within two business days.
        </p>
      </header>
      <Card className="p-0">
        <CardHeader className="space-y-2 border-b border-ink-900/10 bg-white/70 px-6 py-5 dark:border-white/10 dark:bg-ink-900/70">
          <CardTitle className="text-xl font-semibold">Let’s build something great</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 px-6 py-6">
          <Button
            asChild
            variant="primary"
            className="inline-flex w-full items-center justify-center gap-2 md:w-auto"
          >
            <a href="mailto:hello@mason.codes">
              <Mail className="size-4" aria-hidden />
              hello@mason.codes
            </a>
          </Button>
          <div className="grid gap-3 text-sm text-ink-900/70 dark:text-white/70">
            <div className="flex items-center gap-3">
              <MessageSquare className="size-4 text-indigo-500" aria-hidden />
              <a
                className="font-medium text-ink-900 underline transition hover:text-indigo-500 dark:text-white dark:hover:text-indigo-300"
                href="https://github.com/mreichba"
                target="_blank"
                rel="noreferrer"
              >
                GitHub (mreichba)
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Send className="size-4 text-indigo-500" aria-hidden />
              <a
                className="font-medium text-ink-900 underline transition hover:text-indigo-500 dark:text-white dark:hover:text-indigo-300"
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
      <Separator />
      <section className="space-y-4 text-sm text-ink-900/60 dark:text-white/60">
        <h2 className="text-base font-semibold uppercase tracking-[0.24em] text-ink-900/50 dark:text-white/50">
          Accessibility promise
        </h2>
        <p>
          Emails and opportunities are welcome in any format. If you have accessibility requirements,
          let me know and I’ll flex the process to meet your needs.
        </p>
      </section>
    </div>
  );
}

