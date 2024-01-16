import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/style";
import { siteSettings } from "@/data/siteSettings";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: siteSettings.siteName,
  description: siteSettings.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={(cn(roboto.className, playfair.className), "h-screen")}>
        <main className="h-full border-16 border-white border-solid">{children}</main>
      </body>
    </html>
  );
}
4;
