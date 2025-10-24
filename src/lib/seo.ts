import { useEffect } from 'react';
import invariant from 'tiny-invariant';

const SITE_NAME = 'portfolio-v3';
const DEFAULT_DESCRIPTION =
  'Full-stack engineer showcasing React, Go, and cloud-native projects.';

export interface PageMeta {
  title: string;
  description?: string;
  canonicalUrl?: string;
}

function upsertMeta(name: string, content: string) {
  if (typeof document === 'undefined') return;

  const element =
    document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ??
    (() => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
      return meta;
    })();

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  if (typeof document === 'undefined') return;

  const element =
    document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`) ??
    (() => {
      const link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
      return link;
    })();

  element.setAttribute('href', href);
}

export function usePageMeta(meta: PageMeta) {
  invariant(meta.title, 'Page meta requires a title');

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const pageTitle =
      meta.title === SITE_NAME ? SITE_NAME : `${meta.title} • ${SITE_NAME}`;
    document.title = pageTitle;

    upsertMeta('description', meta.description ?? DEFAULT_DESCRIPTION);
    upsertMeta('og:title', pageTitle);
    upsertMeta('og:description', meta.description ?? DEFAULT_DESCRIPTION);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', pageTitle);
    upsertMeta('twitter:description', meta.description ?? DEFAULT_DESCRIPTION);

    if (meta.canonicalUrl) {
      upsertLink('canonical', meta.canonicalUrl);
    }
  }, [meta.canonicalUrl, meta.description, meta.title]);
}

