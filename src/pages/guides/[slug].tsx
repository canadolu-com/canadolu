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
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { guides } from "@/lib/data/guides";
import type { GuidePageProps } from "@/lib/types/guide";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";

// Import MDX content and components
import HousingGuide from "@/content/guides/housing.mdx";
import CitiesGuide from "@/content/guides/cities.mdx";
import { MDXComponents } from "@/components/mdx/MDXComponents";

const iconMap = {
  Book,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Car,
  DollarSign,
  Globe,
  MapPin,
};

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
  const GuideContent =
    guide.type === "housing"
      ? HousingGuide
      : guide.type === "cities"
      ? CitiesGuide
      : null;

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
              Rehberler
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
                <MDXProvider components={MDXComponents}>
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
