"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

const VIEWBOX_WIDTH = 1410
const DEFAULT_GRADIENT_X = 705

export function SiteFooterInteractiveLogotype() {
  const svgRef = useRef<SVGSVGElement>(null)
  
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X)
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const spotlightOpacityRaw = useMotionValue(0)
  const spotlightOpacity = useSpring(spotlightOpacityRaw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!svgRef.current) return

    const svgRect = svgRef.current.getBoundingClientRect()
    const mouseX = event.clientX - svgRect.left
    const normalizedX = (mouseX / svgRect.width) * VIEWBOX_WIDTH

    gradientX1Raw.set(normalizedX)
    spotlightOpacityRaw.set(1) 
  }

  const handleMouseLeave = () => {
    spotlightOpacityRaw.set(0) 
  }

  // The full "Chaitanya" path
  const CHAITANYA_PATH = 
    "M1 33h32v192h-32Z M33 1h96v32h-96Z M33 225h96v32h-96Z M129 33h32v32h-32Z M129 193h32v32h-32Z " +
    "M177 1h32v256h-32Z M209 97h96v32h-96Z M305 129h32v128h-32Z " +
    "M449 97h32v160h-32Z M385 65h64v32h-64Z M353 97h32v128h-32Z M385 225h64v32h-64Z M385 161h64v32h-64Z " +
    "M529 1h32v32h-32Z M529 97h32v160h-32Z " +
    "M641 33h32v224h-32Z M609 97h96v32h-96Z " +
    "M849 97h32v160h-32Z M785 65h64v32h-64Z M753 97h32v128h-32Z M785 225h64v32h-64Z M785 161h64v32h-64Z " +
    "M929 97h32v160h-32Z M961 97h64v32h-64Z M1025 129h32v128h-32Z " +
    "M1105 65h32v96h-32Z M1201 65h32v192h-32Z M1137 129h64v32h-64Z M1105 225h96v32h-96Z " +
    "M1377 97h32v160h-32Z M1313 65h64v32h-64Z M1281 97h32v128h-32Z M1313 225h64v32h-64Z M1313 161h64v32h-64Z"

  return (
    <div 
      className="screen-line-bottom w-full overflow-hidden after:z-1 after:bg-foreground/15"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Changed to w-full so it takes up the absolute maximum width available */}
      <div className="mx-auto flex w-full items-center justify-center pt-8 px-4">
        <motion.svg
          ref={svgRef}
          className="w-full h-auto"
          // MAGIC HAPPENS HERE: Chopped the height exactly in half from 258 -> 128
          // This acts as a clipping mask, slicing the text perfectly in the middle.
          viewBox="0 0 1410 178" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Skeleton Outline */}
          <path
            className="stroke-foreground/15"
            d={CHAITANYA_PATH}
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Fill Layer */}
          <motion.path
            d={CHAITANYA_PATH}
            fill="url(#paint0_linear_1145_73)"
            style={{ opacity: spotlightOpacity }}
          />
          
          <defs>
            <motion.radialGradient
              id="paint0_linear_1145_73"
              cx={gradientX1}
              cy="128" // Moved the light source to the very bottom cut-line
              r="400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--foreground)" stopOpacity="1" />
              <stop offset="1" stopColor="var(--foreground)" stopOpacity="0" />
            </motion.radialGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  )
}