import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-bg-light">
      <Header />
      <main className="min-h-[calc(100vh-theme(space.20)-theme(space.8))]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
