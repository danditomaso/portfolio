import type { Metadata } from "next";
import { Inter, Old_Standard_TT } from "next/font/google";
import "./globals.css";
// import { GeistSans } from "geist/font/sans";
import siteSettings from "./config/siteSettings";
import { cn } from "@/lib/styles";

export const metadata: Metadata = {
  title: siteSettings.metadata.title,
  description: "",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oldStandardTT = Old_Standard_TT({ subsets: ["latin"], weight: "700", variable: "--font-old-standard" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, oldStandardTT.variable)}>{children}</body>
    </html>
  );
}
