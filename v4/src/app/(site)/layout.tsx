import Nav from "@/components/nav/nav"
import { inter, playfair } from "@/styles/fonts"
import { cn } from "@/lib/styling/styles"
import "@/styles/globals.css"
import type { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, playfair.variable)}>
        <main id="app--grid">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

// import Nav from "@/components/nav/nav"
// import { inter, playfair } from "@/styles/fonts"
// import { cn } from "@/lib/styling/styles"
// import "@/styles/globals.css"
// import type { ReactNode } from "react"

// // export const metadata: Metadata = {
// //   title: siteSettings.metadata.title,
// //   description: "",
// // }

// export default function MainLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={cn(inter.variable, playfair.variable)}>
//         <main id="app--grid">
//           <Nav />
//           {children}
//         </main>
//       </body>
//     </html>
//   )
// }
