"use client"

import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon, XIcon } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

export function ProjectGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, handlePrevious, handleNext])

  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        {images.map((imgSrc, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setIsOpen(true)
            }}
            className="group relative h-16 w-28 shrink-0 overflow-hidden rounded-md border border-line bg-muted/50 transition-transform hover:z-10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`View full screen screenshot ${idx + 1} of ${title}`}
          >
            <Image
              src={imgSrc}
              alt={`${title} screenshot ${idx + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <ExpandIcon className="size-5 text-white opacity-0 transition-opacity group-hover:opacity-100 drop-shadow-md" />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          showCloseButton={false} 
          className="max-w-[100vw] w-screen h-screen bg-transparent border-none shadow-none ring-0 p-0 sm:max-w-[100vw] sm:p-0 dark:ring-0 focus:outline-none focus-visible:ring-0 flex flex-col items-center justify-center duration-300"
        >
          {/* Blurred Background Overlay */}
          <div className="fixed inset-0 bg-background/60 backdrop-blur-md z-[-1]" aria-hidden="true" onClick={() => setIsOpen(false)} />
          
          <DialogTitle className="sr-only">Image Gallery for {title}</DialogTitle>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-[60] bg-black/40 text-white hover:bg-black/80 hover:text-white rounded-full size-12 shadow-lg transition-transform hover:scale-110 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-label="Close gallery"
          >
            <XIcon className="size-6" />
          </Button>

          <div className="relative flex items-center justify-center h-[75vh] w-[75vw]">
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <Image
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain drop-shadow-2xl select-none"
                unoptimized
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-[-2vw] sm:left-[-4vw] top-1/2 -translate-y-1/2 z-[60] bg-black/40 text-white hover:bg-black/80 hover:text-white rounded-full size-14 shadow-lg transition-transform hover:scale-110 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="size-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-[-2vw] sm:right-[-4vw] top-1/2 -translate-y-1/2 z-[60] bg-black/40 text-white hover:bg-black/80 hover:text-white rounded-full size-14 shadow-lg transition-transform hover:scale-110 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="size-8" />
                </Button>
              </>
            )}
          </div>
          
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-black/60 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-widest backdrop-blur-md shadow-lg">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
