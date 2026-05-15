import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chaitanyashinde.dev",
  ogImage: USER.ogImage,
  description:
    "Chaitanya Shinde is a Full Stack Developer from Pune, India building modern web applications, AI-powered products, and scalable full-stack systems.",
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Education",
    href: "#education",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#stack",
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export const X_HANDLE = "@cts9505"
export const GITHUB_USERNAME = "cts9505"
export const SOURCE_CODE_GITHUB_REPO = "cts9505/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/cts9505"

export const SPONSORSHIP_URL = "https://github.com/cts9505"

export const UTM_PARAMS = {
  utm_source: "chaitanyashinde.dev",
}
