"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { type ReactNode, useRef, useState, useCallback } from "react"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
}

export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(50)
  const [isHovered, setIsHovered] = useState(false)
  const rafRef = useRef<number>(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || rafRef.current) return

    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateYValue = ((x - centerX) / centerX) * 3
      const rotateXValue = ((centerY - y) / centerY) * 3

      setRotateX(rotateXValue)
      setRotateY(rotateYValue)
      setGlowX((x / rect.width) * 100)
      setGlowY((y / rect.height) * 100)

      rafRef.current = 0
    })
  }, [])

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(50)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
      style={{ perspective: "1000px" }}
    >
      <Card
        className={`relative overflow-hidden transition-all duration-300 ease-out ${className}`}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
          willChange: isHovered ? "transform" : "auto",
        }}
      >
        {/* Glow effect */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${glowX}% ${glowY}%, rgba(59,130,246,0.12), rgba(34,211,238,0.06), transparent 45%)`,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            boxShadow: `0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(34,211,238,0.25), 0 0 60px rgba(59,130,246,0.15)`,
          }}
        />

        {children}
      </Card>
    </div>
  )
}
