"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        setIsMoving(true)
        rafId = 0
      })

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMoving(false)
      }, 150)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timeoutId)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-0 transition-opacity duration-300"
      style={{
        opacity: isMoving ? 0.4 : 0,
      }}
    >
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.1) 25%, transparent 70%)",
          filter: "blur(40px)",
          transition: "opacity 0.3s ease-out",
          willChange: "transform, opacity",
        }}
      />
    </div>
  )
}
