import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/libs/utils";
import siteSettings from "@/config/siteSettings";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: `${siteSettings.title} -- ${siteSettings.jobRole}`,
  description: siteSettings.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "light:text-black h-svh min-h-screen md:px-2 md:py-2 lg:px-2 lg:py-8 xl:px-20 dark:text-black",
        )}
      >
        <main>
          <Header />
          <div className="flex h-full  flex-col gap-2.5">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
