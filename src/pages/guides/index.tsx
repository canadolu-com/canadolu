import MainLayout from "@/components/layout/MainLayout";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
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
import { guides } from "@/lib/data/guides";

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

export default function GuidesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-brand-primary mb-4">
            Newcomer Guides
          </h1>
          <p className="text-lg text-brand-text-secondary">
            Comprehensive guides to help Turkish newcomers navigate life in
            Canada
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const Icon = iconMap[guide.iconName as keyof typeof iconMap];
            return (
              <Link
                key={guide.id}
                href={`/guides/${guide.slug}`}
                className="block group"
              >
                <Card className="h-full hover:shadow-md transition-all duration-200">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${guide.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-brand-primary group-hover:text-brand-primary-light transition-colors flex items-center gap-2">
                          {guide.title}
                          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </CardTitle>
                        <p className="text-brand-text-secondary mt-2 text-sm">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}
