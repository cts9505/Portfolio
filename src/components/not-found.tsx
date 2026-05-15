import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-border"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 450 258"
        fill="none"
      >
        <path
          d="
            M1 1h64v256H1Z
            M65 1h128v64H65Z
            M65 193h128v64H65Z
            M257 1h192v64H257Z
            M257 65h64v32H257Z
            M257 97h192v64H257Z
            M385 161h64v32H385Z
            M257 193h192v64H257Z
          "
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <h1 className="my-6 text-8xl font-medium tracking-tighter tabular-nums">
        404
      </h1>

      <Button asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  )
}