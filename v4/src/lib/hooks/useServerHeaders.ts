import { headers } from "next/headers"

export default function useServerHeaders(key: "referer" | "user-agent") {
  if (!key) return null

  const headersList = headers()
  const headerKeyVal = headersList.get(key)?.split("/").at(-1) ?? null

  return headerKeyVal
}
