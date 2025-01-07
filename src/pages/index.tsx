import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import { MapIcon, BookOpen, Home, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-light via-brand-snow-white/95 to-brand-soft-beige/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-brand-hover-light rounded-full border border-brand-border-light">
              <span className="text-brand-text-primary font-medium">
                Supporting Turkish Newcomers in Canada 🇨🇦 🇹🇷
              </span>
            </div>

            <h1 className="text-6xl font-bold mb-6 text-brand-primary leading-tight">
              Welcome to Canadolu
            </h1>

            <p className="text-2xl text-brand-text-secondary mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Your trusted guide for Turkish newcomers in Canada. Find essential
              resources, locations, and community support to make your
              transition smoother.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/map">
                <Button className="group bg-brand-primary hover:bg-brand-primary-light text-brand-snow-white font-medium h-14 px-8 text-lg rounded-full w-full sm:w-auto transition-all duration-300">
                  <MapIcon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Explore Map
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/guides">
                <Button
                  variant="outline"
                  className="group border-2 border-brand-primary text-brand-primary hover:bg-brand-hover-light font-medium h-14 px-8 text-lg rounded-full w-full sm:w-auto transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  View Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-brand-bg-light" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-bg-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl font-bold text-brand-text-primary relative">
              What We Offer
              <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-primary-light rounded-full opacity-80"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group bg-brand-snow-white border-brand-border-light shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-hover-light rounded-xl group-hover:bg-brand-primary/5 transition-colors">
                    <MapIcon className="h-8 w-8 text-brand-primary" />
                  </div>
                  <CardTitle className="text-2xl text-brand-text-primary">
                    Interactive Map
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-brand-text-secondary">
                  Find Turkish markets, restaurants, and community centers near
                  you
                </CardDescription>
              </CardHeader>
              <CardContent className="text-brand-text-muted">
                Discover locations that matter to Turkish newcomers, with
                detailed information and directions.
              </CardContent>
            </Card>

            <Card className="group bg-brand-snow-white border-brand-border-light shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-hover-light rounded-xl group-hover:bg-brand-primary/5 transition-colors">
                    <Home className="h-8 w-8 text-brand-primary" />
                  </div>
                  <CardTitle className="text-2xl text-brand-text-primary">
                    Housing Guide
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-brand-text-secondary">
                  Everything you need to know about finding a home
                </CardDescription>
              </CardHeader>
              <CardContent className="text-brand-text-muted">
                Learn about neighborhoods, rental processes, and important
                considerations for housing in Canada.
              </CardContent>
            </Card>

            <Card className="group bg-brand-snow-white border-brand-border-light shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-hover-light rounded-xl group-hover:bg-brand-primary/5 transition-colors">
                    <Building2 className="h-8 w-8 text-brand-primary" />
                  </div>
                  <CardTitle className="text-2xl text-brand-text-primary">
                    Settlement Resources
                  </CardTitle>
                </div>
                <CardDescription className="text-lg text-brand-text-secondary">
                  Essential information for newcomers
                </CardDescription>
              </CardHeader>
              <CardContent className="text-brand-text-muted">
                Access guides about healthcare, banking, education, and other
                crucial aspects of settling in Canada.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
