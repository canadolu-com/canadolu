import { GetStaticPaths, GetStaticProps } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Book,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Car,
  DollarSign,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { guides, GuideCategory } from "@/lib/data/guides";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

// Import MDX content
import HousingGuide from "@/content/guides/housing.mdx";

const iconMap = {
  Book,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Car,
  DollarSign,
  Globe,
};

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-brand-primary mb-6" {...props} />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl font-semibold text-brand-primary mt-8 mb-4"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl font-medium text-brand-primary mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="text-brand-text-secondary my-4 leading-relaxed" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside ml-6 my-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside ml-6 my-4 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="text-brand-text-secondary" {...props} />,
  a: (props: any) => (
    <a
      className="text-brand-primary hover:text-brand-primary-light underline transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-brand-primary pl-4 my-4 italic text-brand-text-secondary"
      {...props}
    />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-brand-primary" {...props} />
  ),
};

interface GuidePageProps {
  guide: GuideCategory;
}

export default function GuidePage({ guide }: GuidePageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="text-brand-text-primary text-lg">
            Loading guide...
          </div>
        </div>
      </MainLayout>
    );
  }

  const Icon = iconMap[guide.iconName as keyof typeof iconMap];

  const GuideContent = guide.type === "housing" ? HousingGuide : null;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/guides">
            <Button
              variant="ghost"
              className="mb-6 text-brand-text-secondary hover:text-brand-primary"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Guides
            </Button>
          </Link>

          <Card>
            <CardHeader className="border-b pb-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${guide.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-brand-primary">
                    {guide.title}
                  </CardTitle>
                  <p className="text-brand-text-secondary mt-1">
                    {guide.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <article className="prose prose-brand max-w-none">
                <MDXProvider components={components}>
                  {GuideContent ? (
                    <GuideContent />
                  ) : (
                    <div>
                      <p>
                        This guide is coming soon. It will include detailed
                        information about:
                      </p>
                      <ul>
                        <li>Overview and key concepts</li>
                        <li>Step-by-step processes</li>
                        <li>Important resources and contacts</li>
                        <li>Tips from experienced community members</li>
                        <li>Frequently asked questions</li>
                      </ul>
                      <p>
                        We are currently working with community experts to
                        create comprehensive, accurate, and helpful content for
                        this guide. Check back soon!
                      </p>
                    </div>
                  )}
                </MDXProvider>
              </article>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = guides.map((guide) => ({
    params: { slug: guide.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const guide = guides.find((g) => g.slug === params?.slug);

  if (!guide) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      guide,
    },
  };
};
