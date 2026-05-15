import { getLlmsFullMarkdown } from "../content"

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(getLlmsFullMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
    },
  })
}
