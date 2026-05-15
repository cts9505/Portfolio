import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["cts9505.localhost", "cts9505.local","chaitanyashinde.localhost", "chaitanyashinde.local","chaitanyashinde.dev","chaitanyashinde.com","www.chaitanyashinde.dev","www.chaitanyashinde.com","chaitanyashinde.in","www.chaitanyashinde.in","chaitanyashinde.me","www.chaitanyashinde.me","chaitanyashinde.org","www.chaitanyashinde.org","chaitanyashinde.co","www.chaitanyashinde.co","chaitanyashinde.net","www.chaitanyashinde.net","chaitanyashinde.io","www.chaitanyashinde.io","chaitanyashinde.app","www.chaitanyashinde.app","chaitanyashinde.tech","www.chaitanyashinde.tech","chaitanyashinde.online","www.chaitanyashinde.online","chaitanyashinde.web.app","www.chaitanyashinde.web.app","chaitanyashinde.vercel.app","www.chaitanyashinde.vercel.app","chaitanyashinde.sakshaminstitute.in","www.chaitanyashinde.sakshaminstitute.in","developer.sakshaminstitute.in","www.developer.sakshaminstitute.in","developer.iskconravet.in","www.developer.iskconravet.in","developer.eternasrushti.in","www.developer.eternasrushti.in","developer.kesarievents.in","www.developer.kesarievents.in","chaitanyashinde.netlify.app","www.chaitanyashinde.netlify.app","chaitanyashinde.fly.dev","www.chaitanyashinde.fly.dev","chaitanyashinde.pages.dev","www.chaitanyashinde.pages.dev","chaitanyashinde.github.io","www.chaitanyashinde.github.io"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.chaitanyashinde.dev",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  compiler:
    process.env.NODE_ENV === "production"
      ? {
        removeConsole: {
          exclude: ["error"],
        },
      }
      : undefined,
}

export default nextConfig
