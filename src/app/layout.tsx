import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppWrapper } from "@/hooks/AppContext";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fade's Recipes",
  description: "Welcome to Fade's Recipes",
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
            <main className="flex-grow reveal">{children}</main>
            <Footer />
          </div>
        </AppWrapper>
      </body>
    </html>
  );
};

export default Layout;
