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
  console.log(splitPath.length, splitPath)

  if (splitPath.length > 1) {
    if (splitPath.at(1) === "") {
      return {
        page: "home",
        url: "/",
      }
    }
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
