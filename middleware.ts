import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accept = request.headers.get("accept") || ""

  const wantsMarkdown =
    request.method === "GET" && accept.toLowerCase().includes("text/markdown")

  if (pathname === "/" && wantsMarkdown) {
    const url = request.nextUrl.clone()
    url.pathname = "/llms-full.txt"
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/"],
}
