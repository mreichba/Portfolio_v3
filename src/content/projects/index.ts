import type { Project } from '@/types/project';

const modules = import.meta.glob<{ default: Project }>('./*.json', {
  eager: true,
});

export const projects = Object.values(modules).map((module) => module.default);

export function findProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

