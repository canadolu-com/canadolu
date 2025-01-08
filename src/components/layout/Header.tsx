import Link from "next/link";
import { MapIcon, BookOpen, Home, Phone, Mail, Users } from "lucide-react";

export const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-primary text-brand-snow-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-4 text-sm">
            <a
              href="tel:+1234567890"
              className="flex items-center hover:text-brand-hover-light transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>İletişim</span>
            </a>
            <a
              href="mailto:contact@canadolu.com"
              className="flex items-center hover:text-brand-hover-light transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>E-posta</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-brand-snow-white border-b border-brand-border-light sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-brand-primary hover:text-brand-primary-light transition-colors">
                Canadolu
              </span>
            </Link>

            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium"
                  >
                    <Home className="h-4 w-4" />
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/map"
                    className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium"
                  >
                    <MapIcon className="h-4 w-4" />
                    Harita
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium"
                  >
                    <BookOpen className="h-4 w-4" />
                    Rehberler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium"
                  >
                    <Users className="h-4 w-4" />
                    Topluluk
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
