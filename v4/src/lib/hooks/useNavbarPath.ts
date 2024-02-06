"use client"
import { usePathname } from "next/navigation"

interface NavbarPath {
  page: "home" | "work" | "about" | "contact"
  url: "/" | "/work"
}
export default function useNavbarPath(): NavbarPath {
  // this hook provides a way for the navigation bar to operate. It should always return the parent page of the current page.
  const pathname = usePathname()

  const splitPath = pathname.split("/")
  if (splitPath.length > 1) {
    // if we're at the root page, return home
    if (splitPath.at(1) === "") {
      return {
        page: "home",
        url: "/",
      }
    }
    // if we're in a sub page of work, return the parent page
    if (splitPath.at(1) === "work" && splitPath.length === 3) {
      return {
        page: "work",
        url: "/work",
      }
    }
  }
  return {
    page: "home",
    url: "/",
  }
}
