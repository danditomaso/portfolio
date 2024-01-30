import { string, literal, object, union, Schema } from "zod"

export const headersSchema = object({
  referrer: string().url().max(255),
  path: union([
    literal("/"),
    literal("/work"),
    literal("/contact"),
    literal("/about"),
  ]),
})

export function useValidation<T>(schema: Schema<T>, data: unknown): boolean {
  const { success } = schema.safeParse(data)
  return success
}
