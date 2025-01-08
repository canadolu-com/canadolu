import type { ReactElement } from 'react';
import type {
  DetailedHTMLProps,
  HTMLAttributes,
  AnchorHTMLAttributes,
  OlHTMLAttributes,
} from "react";

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

export type MDXComponents = {
  h1: (props: HeadingProps) => ReactElement;
  h2: (props: HeadingProps) => ReactElement;
  h3: (props: HeadingProps) => ReactElement;
  p: (props: ParagraphProps) => ReactElement;
  div: (props: DivProps) => ReactElement;
  ul: (props: UnorderedListProps) => ReactElement;
  ol: (props: OrderedListProps) => ReactElement;
  li: (props: ListItemProps) => ReactElement;
  a: (props: AnchorProps) => ReactElement;
  blockquote: (props: BlockquoteProps) => ReactElement;
  strong: (props: HeadingProps) => ReactElement;
}; 