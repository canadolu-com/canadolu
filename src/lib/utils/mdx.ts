type WebpackContext = {
  keys(): string[];
  (id: string): NodeModule;
  <T>(id: string): T;
};

declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => WebpackContext;
};

import type { MDXComponent, MDXFrontmatter, MDXGuide } from '../types';
import { defaultFrontmatter } from '../data/guides-content';

/**
 * Get frontmatter for a guide, with fallbacks
 */
export function getGuideFrontmatter(
  component: MDXComponent
): MDXFrontmatter {
  return {
    ...defaultFrontmatter,
    ...component.frontmatter,
  };
}

/**
 * Load all MDX guides dynamically
 */
export async function loadGuideContent(): Promise<Record<string, MDXGuide>> {
  const guideContent: Record<string, MDXGuide> = {};

  // Use webpack's require.context to get all MDX files
  const guideContext = require.context(
    '@/content/guides',
    false,
    /\.mdx$/
  );

  // Get all guide filenames
  const guideFiles = guideContext.keys();

  // Process each guide
  for (const file of guideFiles) {
    // Get the slug from filename (e.g., './housing.mdx' -> 'housing-guide')
    const slug = file
      .replace(/^\.\//, '')
      .replace(/\.mdx$/, '')
      .concat('-guide');

    // Import the guide content
    const guideModule = await import(`@/content/guides/${file.slice(2)}`);
    const GuideComponent = guideModule.default as MDXComponent;

    // Add to guide content
    guideContent[slug] = {
      frontmatter: getGuideFrontmatter(GuideComponent),
      content: GuideComponent,
    };
  }

  return guideContent;
} 