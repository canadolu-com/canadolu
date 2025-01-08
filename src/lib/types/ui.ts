import type { HTMLAttributes } from 'react';

/**
 * Props for MDX heading elements
 */
export type MDXHeadingProps = HTMLAttributes<HTMLHeadingElement>;

/**
 * Props for MDX paragraph elements
 */
export type MDXParagraphProps = HTMLAttributes<HTMLParagraphElement>;

/**
 * Props for MDX list elements
 */
export type MDXListProps = HTMLAttributes<HTMLUListElement | HTMLOListElement>;

/**
 * Props for MDX list item elements
 */
export type MDXListItemProps = HTMLAttributes<HTMLLIElement>;

/**
 * Props for MDX anchor elements
 */
export type MDXAnchorProps = HTMLAttributes<HTMLAnchorElement>;

/**
 * Props for MDX blockquote elements
 */
export type MDXQuoteProps = HTMLAttributes<HTMLQuoteElement>;

/**
 * Props for MDX strong elements
 */
export type MDXStrongProps = HTMLAttributes<HTMLElement>; 