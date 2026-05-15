import { Icons } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      {/* Top Section: Text & Links */}
      <div className="screen-line-top mx-auto border-x border-line pt-12 md:max-w-3xl">
        
        {/* Bio & Copyright */}
        <div className="flex flex-col items-center justify-center gap-2 pb-6 text-center font-mono text-[11px] text-muted-foreground sm:text-xs">
          <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground [&_span]:mx-0.5 [&_span]:inline-block">
          Inspired by chanhdai.com<span>/</span>tailwindcss.com<span>/</span>ui.shadcn.com<span>/</span>
          vercel.com<span>/</span>evilcharts.com
        </p>
          <p>
            Updated by {USER.displayName}. Focused on clean UI, useful projects, and
            simple presentation.
          </p>
          <p>
            © {currentYear} {USER.displayName}. View the source on{" "}
            <a 
              href="https://github.com/cts9505/portfolio" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        {/* Links Bar */}
        <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4 py-3 sm:gap-4">
            
            <a 
              href="/llms.txt" 
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground max-sm:hidden"
            >
              llms.txt
            </a>

            <Separator className="max-sm:hidden" />

            <a 
              href="/Chaitanya_Shinde_2027.pdf" 
              download 
              className="font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground" 
              aria-label="Download Resume"
            >
              Resume
            </a>

            <Separator />

            <a 
              href="https://x.com/chaitanya_9505" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground" 
              aria-label="X (Twitter)"
            >
              <Icons.x className="size-4" />
            </a>

            <Separator />

            <a 
              href="https://github.com/cts9505" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground" 
              aria-label="GitHub"
            >
              <Icons.github className="size-4" />
            </a>

            <Separator />

            <a 
              href="https://linkedin.com/in/chaitanya-engineer" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground" 
              aria-label="LinkedIn"
            >
              <Icons.linkedin className="size-4" />
            </a>

            <Separator />

            <a 
              href="https://www.instagram.com/_chaitanya_.9505/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground" 
              aria-label="Instagram"
            >
              <Icons.instagram className="size-4" />
            </a>

            <Separator />

            <a 
              href="https://www.youtube.com/@chaitanyashindecomputer" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground" 
              aria-label="YouTube"
            >
              <Icons.youtube className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: The Spotlight Hover Logotype */}
      <SiteFooterInteractiveLogotype />

      {/* Safe Area Spacing */}
      {/* <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-24" />
      </div> */}
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}