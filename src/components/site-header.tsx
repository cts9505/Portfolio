import Link from "next/link"

import { CommandMenu } from "@/components/command-menu"
import { NavDesktop } from "@/components/nav-desktop"
import { SiteHeaderMark } from "@/components/site-header-mark"
import { ThemeToggle } from "@/components/theme-toggle"
import { MAIN_NAV } from "@/config/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl">
        <Link
          className="transition-[scale] ease-out active:scale-[0.98] [&_svg]:h-8 [&_svg]:shrink-0"
          href="/"
          aria-label="Home"
        >
          <SiteHeaderMark />
        </Link>

        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />

        <div className="flex items-center gap-2">
          <CommandMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
