// Common types
export * from './common';

// Domain-specific types
export * from './location';
export * from './guide';
export * from './mdx';

// UI types
export * from './ui';

import type {
  DetailedHTMLProps,
  HTMLAttributes,
  AnchorHTMLAttributes,
  OlHTMLAttributes,
  ReactElement,
} from "react";

export type MDXHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export type MDXParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type MDXUnorderedListProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export type MDXOrderedListProps = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export type MDXListItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export type MDXAnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export type MDXQuoteProps = DetailedHTMLProps<
  HTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export type MDXStrongProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export type MDXComponents = {
  h1: (props: MDXHeadingProps) => ReactElement;
  h2: (props: MDXHeadingProps) => ReactElement;
  h3: (props: MDXHeadingProps) => ReactElement;
  p: (props: MDXParagraphProps) => ReactElement;
  ul: (props: MDXUnorderedListProps) => ReactElement;
  ol: (props: MDXOrderedListProps) => ReactElement;
  li: (props: MDXListItemProps) => ReactElement;
  a: (props: MDXAnchorProps) => ReactElement;
  blockquote: (props: MDXQuoteProps) => ReactElement;
  strong: (props: MDXStrongProps) => ReactElement;
};

