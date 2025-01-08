import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-brand-snow-white border-t border-brand-border-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-brand-primary mb-4 text-lg">
              Hakkımızda
            </h3>
            <p className="text-brand-text-secondary text-sm">
              Kanada&apos;daki Türk yaşamı için rehberiniz. Türk göçmenlere ve
              yeni gelenlere Kanada&apos;daki yeni hayatlarında yol
              gösteriyoruz.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-brand-primary mb-4 text-lg">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/map"
                  className="text-brand-text-secondary hover:text-brand-primary transition-colors"
                >
                  Lokasyonları Bul
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-brand-text-secondary hover:text-brand-primary transition-colors"
                >
                  Rehberler
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-brand-primary mb-4 text-lg">
              İletişim
            </h3>
            <p className="text-brand-text-secondary text-sm">
              Sorularınız mı var? Bize ulaşın:{" "}
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
          © {new Date().getFullYear()} Canadolu - Kanada&apos;daki Türk Yaşamı
          İçin Rehberiniz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
