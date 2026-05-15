"use client"

import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Collapsible as BaseCollapsible } from "./ui/collapsible"

export function Collapsible(
  props: React.ComponentProps<typeof BaseCollapsible>
) {
  return <BaseCollapsible {...props} />
}

export function CollapsibleChevronsIcon({
  className,
}: {
  className?: string
  duration?: number
}) {
  return (
    <ChevronDownIcon
      className={cn(
        "transition-transform duration-150 ease-out group-data-[panel-open]/collapsible:rotate-180",
        className
      )}
    />
  )
}
