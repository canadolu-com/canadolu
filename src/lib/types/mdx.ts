import type { MDXProps } from 'mdx/types';
import type { ComponentType, ReactElement } from 'react';
import type { Metadata } from './common';
import type {
  DetailedHTMLProps,
  HTMLAttributes,
  AnchorHTMLAttributes,
  OlHTMLAttributes,
} from "react";

/**
 * Frontmatter metadata for MDX content
 */
export interface MDXFrontmatter extends Metadata {
  /** Title of the MDX content */
  title: string;
  /** Description of the MDX content */
  description: string;
}

/**
 * Extended MDX component type with frontmatter support
 */
export type MDXComponent = ComponentType<MDXProps> & {
  frontmatter?: MDXFrontmatter;
};

/**
 * Represents a complete MDX guide with its content and metadata
 */
export interface MDXGuide {
  /** Guide metadata from frontmatter */
  frontmatter: MDXFrontmatter;
  /** The MDX component containing the guide content */
  content: MDXComponent;
}

export type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type UnorderedListProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export type OrderedListProps = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export type ListItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export type BlockquoteProps = DetailedHTMLProps<
  HTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export type MDXBaseProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type MDXComponentType<P extends object = object> = (props: P & MDXBaseProps) => ReactElement;

export interface MDXComponents {
  h1: MDXComponentType<HeadingProps>;
  h2: MDXComponentType<HeadingProps>;
  h3: MDXComponentType<HeadingProps>;
  p: MDXComponentType<ParagraphProps>;
  div: MDXComponentType<DivProps>;
  ul: MDXComponentType<UnorderedListProps>;
  ol: MDXComponentType<OrderedListProps>;
  li: MDXComponentType<ListItemProps>;
  a: MDXComponentType<AnchorProps>;
  blockquote: MDXComponentType<BlockquoteProps>;
  strong: MDXComponentType<HeadingProps>;
  [key: string]: MDXComponentType;
} 