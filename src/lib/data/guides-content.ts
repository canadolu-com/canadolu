import type { MDXFrontmatter } from '../types';
import type { ComponentType } from 'react';

/**
 * Default frontmatter for guides
 */
export const defaultFrontmatter: MDXFrontmatter = {
  title: 'Rehber Bulunamadı',
  description: 'Bu rehber bulunamadı.',
  lastUpdated: new Date().toISOString().split('T')[0],
  author: '-',
  tags: [],
};

// Import all guide MDX files
const guideModules = {
  'housing-guide': () => import('@/content/guides/housing.mdx'),
  'healthcare-system': () => import('@/content/guides/healthcare.mdx'),
};

type MDXModule = {
  default: ComponentType;
  frontmatter?: MDXFrontmatter;
};

/**
 * Load frontmatter for a specific guide
 */
export async function loadGuideFrontmatter(key: string): Promise<MDXFrontmatter> {
  const importFn = guideModules[key as keyof typeof guideModules];
  if (!importFn) return defaultFrontmatter;

  const mdxModule = await importFn() as MDXModule;
  return {
    ...defaultFrontmatter,
    ...mdxModule.frontmatter,
  };
}

/**
 * Load all guide frontmatter
 */
export async function loadAllGuideFrontmatter(): Promise<Record<string, MDXFrontmatter>> {
  const entries = await Promise.all(
    Object.entries(guideModules).map(async ([key, importFn]) => {
      const mdxModule = await importFn() as MDXModule;
      return [key, {
        ...defaultFrontmatter,
        ...mdxModule.frontmatter,
      }] as const;
    })
  );

  return Object.fromEntries(entries);
} 