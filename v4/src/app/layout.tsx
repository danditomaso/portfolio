import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteSettings from "@/config/siteSettings";
import { cn } from "@/lib/styles";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: siteSettings.metadata.title,
  description: "",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable)}>
        <main id="home-work--grid" className="h-screen">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
