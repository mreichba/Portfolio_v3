export interface ProjectLinks {
  demo?: string;
  client?: string;
  server?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  links: ProjectLinks;
  cover: string;
  role: string;
  problem: string;
  approach: string;
  results: string[];
  stack: string[];
  tags: string[];
}

