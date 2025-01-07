import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { MapIcon, BookOpen, Home, Phone, Mail } from "lucide-react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-bg-light">
      {/* Top Bar */}
      <div className="bg-brand-primary text-brand-snow-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-4 text-sm">
            <a
              href="tel:+1234567890"
              className="flex items-center hover:text-brand-hover-light transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="mailto:contact@canadolu.com"
              className="flex items-center hover:text-brand-hover-light transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>contact@canadolu.com</span>
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

            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium">
                      <Home className="h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/map" legacyBehavior passHref>
                    <NavigationMenuLink className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium">
                      <MapIcon className="h-4 w-4" />
                      Interactive Map
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/guides" legacyBehavior passHref>
                    <NavigationMenuLink className="flex items-center gap-2 text-brand-text-primary hover:text-brand-primary transition-colors font-medium">
                      <BookOpen className="h-4 w-4" />
                      Guides
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-theme(space.20)-theme(space.8))]">
        {children}
      </main>

      <footer className="bg-brand-snow-white border-t border-brand-border-light">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-brand-primary mb-4 text-lg">
                About Canadolu
              </h3>
              <p className="text-brand-text-secondary text-sm">
                Helping Turkish newcomers navigate life in Canada with essential
                resources, community connections, and local insights.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-brand-primary mb-4 text-lg">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/map"
                    className="text-brand-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Find Turkish Locations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-brand-text-secondary hover:text-brand-primary transition-colors"
                  >
                    Newcomer Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-primary mb-4 text-lg">
                Contact
              </h3>
              <p className="text-brand-text-secondary text-sm">
                Have questions or suggestions? Email us at{" "}
                <a
                  href="mailto:contact@canadolu.com"
                  className="text-brand-primary hover:text-brand-primary-light transition-colors font-medium"
                >
                  contact@canadolu.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-brand-border-light text-center text-sm text-brand-text-secondary">
            © {new Date().getFullYear()} Canadolu - Helping Turkish Newcomers in
            Canada
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
