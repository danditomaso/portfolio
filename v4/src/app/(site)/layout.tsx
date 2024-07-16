import type { ReactNode } from "react"
import Sidebar from "@/components/sidebar/sidebar"
import { montserrat, playfair } from "@/styles/fonts"
import { cn } from "@/lib/styling/styles"
import "@/styles/style.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(montserrat.variable, playfair.variable, "h-screen")}>
        {/* <main id="app--grid"> */}
        <main className="flex flex-col md:flex-row h-full">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  )
}
