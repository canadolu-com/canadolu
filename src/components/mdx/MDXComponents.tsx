import * as React from "react";
import { cn } from "@/lib/utils";
import type {
  MDXHeadingProps,
  MDXParagraphProps,
  MDXUnorderedListProps,
  MDXOrderedListProps,
  MDXListItemProps,
  MDXAnchorProps,
  MDXQuoteProps,
  MDXStrongProps,
  DivProps,
} from "@/lib/types";

const baseHeadingStyles = "font-bold text-brand-primary scroll-mt-24";
const headingSizes = {
  h1: "text-4xl mb-6",
  h2: "text-2xl mt-8 mb-4",
  h3: "text-xl mt-6 mb-3",
};

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-zğüşıöç0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const Heading = ({
  as: Component,
  className,
  children,
  id: providedId,
  ...props
}: MDXHeadingProps & { as: "h1" | "h2" | "h3" }) => {
  const id =
    providedId ||
    (typeof children === "string" ? slugify(children) : undefined);

  return (
    <Component
      id={id}
      className={cn(baseHeadingStyles, headingSizes[Component], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

const components = {
  h1: (props: MDXHeadingProps) => <Heading as="h1" {...props} />,
  h2: (props: MDXHeadingProps) => <Heading as="h2" {...props} />,
  h3: (props: MDXHeadingProps) => <Heading as="h3" {...props} />,
  p: ({ className, children, ...props }: MDXParagraphProps) => {
    const containsParagraph = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === "p"
    );

    if (containsParagraph) {
      return (
        <div
          className={cn(
            "text-brand-text-secondary my-4 leading-relaxed",
            className
          )}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (className?.includes("guide-subtitle")) {
      return (
        <p
          className={cn(
            "text-xl text-brand-text-secondary mb-8 font-medium",
            className
          )}
          {...props}
        >
          {children}
        </p>
      );
    }

    return (
      <p
        className={cn(
          "text-brand-text-secondary my-4 leading-relaxed",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
  div: ({ className, ...props }: DivProps) => {
    if (className?.includes("guide-context")) {
      return (
        <div
          className={cn(
            "bg-brand-bg-secondary p-6 rounded-lg mb-8 text-brand-text-primary border border-brand-border",
            className
          )}
          {...props}
        />
      );
    }
    return <div className={className} {...props} />;
  },
  ul: ({ className, ...props }: MDXUnorderedListProps) => (
    <ul
      className={cn("list-disc list-outside ml-6 my-4 space-y-2", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: MDXOrderedListProps) => (
    <ol
      className={cn("list-decimal list-outside ml-6 my-4 space-y-2", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: MDXListItemProps) => (
    <li className={cn("text-brand-text-secondary", className)} {...props} />
  ),
  a: ({ href, className, ...props }: MDXAnchorProps) => {
    const isExternalLink = href?.startsWith("http");
    return (
      <a
        href={href}
        className={cn(
          "text-brand-primary hover:text-brand-primary-light underline transition-colors",
          className
        )}
        {...(isExternalLink
          ? {
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {})}
        {...props}
      />
    );
  },
  blockquote: ({ className, ...props }: MDXQuoteProps) => (
    <blockquote
      className={cn(
        "border-l-4 border-brand-primary pl-4 my-4 italic text-brand-text-secondary",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: MDXStrongProps) => (
    <strong
      className={cn("font-semibold text-brand-primary", className)}
      {...props}
    />
  ),
} as const;

export const MDXComponents = components;

export default MDXComponents;
