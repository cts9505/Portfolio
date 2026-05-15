"use client"

import { Children } from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

type CollapsibleListProps = {
  max: number
  children: React.ReactNode
}

export function CollapsibleList({
  max,
  children,
}: CollapsibleListProps) {
  const [expanded, setExpanded] = useState(false)
  const items = Children.toArray(children)

  const visibleItems = expanded ? items : items.slice(0, max)
  const hasMore = items.length > max

  return (
    <div>
      <div className="space-y-px">
        {visibleItems.map((item) => item)}
      </div>

      {hasMore && (
        <div className="border-t border-line p-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show Less" : `Show More (${items.length - max})`}
          </Button>
        </div>
      )}
    </div>
  )
}
