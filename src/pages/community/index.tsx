import {
  Github,
  Users,
  BookOpen,
  ArrowRight,
  Heart,
  Globe,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

// This would typically come from an API or database
const communityMembers = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Community Leader",
    location: "Toronto",
    contribution: "Guide Writer",
    avatar: "/avatars/member1.jpg", // You'll need to add these images
    socialLinks: {
      linkedin: "https://linkedin.com/in/ahmet",
      github: "https://github.com/ahmet",
    },
  },
  {
    id: 2,
    name: "Ayşe Demir",
    role: "Content Contributor",
    location: "Vancouver",
    contribution: "Location Scout",
    avatar: "/avatars/member2.jpg", // You'll need to add these images
    socialLinks: {
      linkedin: "https://linkedin.com/in/ayse",
      github: "https://github.com/ayse",
    },
  },
  // Add more community members as needed
];

const contributionAreas = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "İçerik Yazarlığı",
    description: "Rehberler ve makaleler yazarak bilginizi paylaşın",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Çeviri",
    description:
      "Daha fazla kişiye ulaşmak için içeriklerin çevirisine yardımcı olun",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Topluluk Desteği",
    description: "Topluluktaki diğer üyelere yardımcı olun",
  },
];

const CommunityPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-light via-brand-snow-white/95 to-brand-soft-beige/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-brand-hover-light rounded-full border border-brand-border-light">
              <span className="text-brand-text-primary font-medium">
                Topluluğumuza Katılın
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6 text-brand-primary leading-tight">
              Birlikte İnşa Edelim, Birlikte Büyüyelim
            </h1>
            <p className="text-xl text-brand-text-secondary mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Canlı Türk-Kanada topluluğumuza katılın. Deneyimlerinizi paylaşın,
              rehberlere katkıda bulunun ve diğerlerinin Kanada&apos;daki
              yolculuğuna yardımcı olun.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-6 py-3 bg-brand-snow-white rounded-lg border border-brand-border-light">
                <Users className="h-5 w-5 text-brand-primary" />
                <span className="font-medium text-brand-text-primary">
                  100+ Topluluk Üyesi
                </span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-brand-snow-white rounded-lg border border-brand-border-light">
                <Heart className="h-5 w-5 text-brand-primary" />
                <span className="font-medium text-brand-text-primary">
                  50+ Katkıda Bulunan
                </span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-brand-snow-white rounded-lg border border-brand-border-light">
                <Globe className="h-5 w-5 text-brand-primary" />
                <span className="font-medium text-brand-text-primary">
                  2 Dil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-brand-bg-light" />
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-20 bg-brand-bg-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              Katkıda Bulunma Yolları
            </h2>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
              Topluluğumuza katkıda bulunmanın birçok yolu var. Rehberler ve
              makaleler yazarak, çevirilere yardımcı olarak veya diğer üyelere
              destek olarak başlayabilirsiniz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contributionAreas.map((area, index) => (
              <Card
                key={index}
                className="group bg-brand-snow-white border-brand-border-light shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-brand-hover-light rounded-xl group-hover:bg-brand-primary/5 transition-colors mb-4">
                      <div className="text-brand-primary">{area.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2">
                      {area.title}
                    </h3>
                    <p className="text-brand-text-secondary">
                      {area.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/yourusername/canadolu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group bg-brand-primary hover:bg-brand-primary-light text-brand-snow-white font-medium h-14 px-8 text-lg rounded-full transition-all duration-300">
                <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                GitHub&apos;da Katkıda Bulun
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contribute/content">
              <Button
                variant="outline"
                className="group border-2 border-brand-primary text-brand-primary hover:bg-brand-hover-light font-medium h-14 px-8 text-lg rounded-full transition-all duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Rehber Yaz
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Members Section */}
      <section className="py-20 bg-brand-snow-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              Topluluk Üyeleri
            </h2>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
              Topluluğumuzu harika yapan insanlarla tanışın.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityMembers.map((member) => (
              <Card
                key={member.id}
                className="group bg-brand-snow-white border-brand-border-light shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-brand-hover-light mb-4 overflow-hidden">
                      {/* Add proper image handling here */}
                      <div className="w-full h-full bg-brand-primary/10 flex items-center justify-center">
                        <Users className="h-12 w-12 text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-text-secondary font-medium">
                      {member.role}
                    </p>
                    <p className="text-sm text-brand-text-secondary mt-1">
                      {member.location}
                    </p>
                    <div className="mt-4 pt-4 border-t border-brand-border-light w-full">
                      <p className="text-sm text-brand-text-secondary">
                        {member.contribution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community CTA */}
      <section className="py-20 bg-brand-bg-light relative">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-brand-primary to-brand-primary-light text-brand-snow-white overflow-hidden">
            <CardContent className="py-12">
              <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Topluluğumuza Katılın
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Canlı Türk-Kanada topluluğumuza katılın. Deneyimlerinizi
                  paylaşın, rehberlere katkıda bulunun ve diğerlerinin
                  Kanada&apos;daki yolculuğuna yardımcı olun.
                </p>
                <Button className="bg-brand-snow-white text-brand-primary hover:bg-brand-hover-light font-medium h-14 px-8 text-lg rounded-full transition-all duration-300">
                  Şimdi Katıl
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
};

export default CommunityPage;
