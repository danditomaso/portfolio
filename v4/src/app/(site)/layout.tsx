import MainLayout from "@/layouts/main/main-layout"
import type { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
