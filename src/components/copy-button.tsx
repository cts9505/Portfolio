"use client"

import { AnimatePresence, motion } from "motion/react"
import { IconCheck, IconCopy, IconX } from "@tabler/icons-react"

import type { Event } from "@/lib/events"
import { trackEvent } from "@/lib/events"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

import { Button } from "./ui/button"

type CopyButtonProps = React.ComponentProps<typeof Button> & {
  text: string | (() => string)
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
}

export function CopyButton({
  size = "icon-sm",
  event,
  text,
  onClick,
  onCopySuccess,
  onCopyError,
  children,
  ...props
}: CopyButtonProps & {
  event?: Event["name"]
}) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess: (copiedValue) => {
      onCopySuccess?.(copiedValue)

      if (event) {
        trackEvent({
          name: event,
          properties: {
            code: copiedValue,
          },
        })
      }
    },
    onCopyError,
  })

  return (
    <Button
      className="will-change-transform"
      variant="secondary"
      size={size}
      onClick={(e) => {
        copy(text)
        onClick?.(e)
      }}
      aria-label="Copy"
      {...props}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {state === "done" ? (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <IconCheck />
          </motion.span>
        ) : state === "error" ? (
          <motion.span
            key="error"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <IconX />
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <IconCopy />
          </motion.span>
        )}
      </AnimatePresence>
      {children}
    </Button>
  )
}
