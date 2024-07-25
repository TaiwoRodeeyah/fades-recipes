import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { AppWrapper } from "@/hooks/AppContext";
import "./globals.css";
import { Metadata } from "next";

import icon from "../../public/icon.png";
import banner from "../../public/banner.png";

export const metadata: Metadata = {
  applicationName: "Fade's Recipes",
  title: "Fade's Recipes",
  description: "Welcome to Fade's Recipes",
  keywords: "recipes, food, cooking, baking, blog, recipe",
  themeColor: "#C06C84",
  icons: icon.src,
  openGraph: {
    type: "website",
    title: "Fade's Recipes",
    description: "Welcome to Fade's Recipes",
    siteName: "Fade's Recipes",
    images: [
      {
        url: banner.src,
      },
    ],
  },
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow reveal bg-gray-100">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </AppWrapper>
      </body>
    </html>
  );
};

export default Layout;
