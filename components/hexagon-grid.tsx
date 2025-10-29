"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"

export function HexagonGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })
  const animationRef = useRef<number>()
  const hexagonsRef = useRef<{ x: number; y: number }[]>([])
  const lastDrawTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true, willReadFrequently: false })
    if (!ctx) return

    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      generateHexagons()
    }

    const hexRadius = 50
    const hexHeight = hexRadius * 2
    const hexWidth = Math.sqrt(3) * hexRadius
    const vertDist = hexHeight * 0.75
    const horizDist = hexWidth

    const generateHexagons = () => {
      hexagonsRef.current = []
      const cols = Math.ceil(window.innerWidth / horizDist) + 2
      const rows = Math.ceil(window.innerHeight / vertDist) + 2

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * horizDist + (row % 2 === 1 ? horizDist / 2 : 0)
          const y = row * vertDist
          hexagonsRef.current.push({ x, y })
        }
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)

    const drawHexagon = (x: number, y: number, opacity: number, glowIntensity: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const hx = x + hexRadius * Math.cos(angle)
        const hy = y + hexRadius * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, hexRadius * 1.5)
      gradient.addColorStop(0, `rgba(56, 189, 248, ${opacity * glowIntensity})`)
      gradient.addColorStop(0.4, `rgba(34, 211, 238, ${opacity * glowIntensity * 0.8})`)
      gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * glowIntensity * 0.3})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.stroke()

      if (glowIntensity > 0.5) {
        ctx.shadowBlur = 25
        ctx.shadowColor = `rgba(56, 189, 248, ${glowIntensity * 0.8})`
        ctx.stroke()

        ctx.shadowBlur = 15
        ctx.shadowColor = `rgba(34, 211, 238, ${glowIntensity})`
        ctx.lineWidth = 3
        ctx.stroke()

        if (glowIntensity > 0.8) {
          ctx.fillStyle = `rgba(56, 189, 248, ${(glowIntensity - 0.8) * 0.2})`
          ctx.fill()
        }

        ctx.shadowBlur = 0
      }
    }

    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastDrawTimeRef.current < frameInterval) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastDrawTimeRef.current = currentTime

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const maxDistance = 300
      const maxDistanceSquared = maxDistance * maxDistance

      hexagonsRef.current.forEach((hex) => {
        const dx = hex.x - mousePos.x
        const dy = hex.y - mousePos.y
        const distanceSquared = dx * dx + dy * dy

        let opacity = 0.15
        let glowIntensity = 0.3

        if (distanceSquared < maxDistanceSquared) {
          const distance = Math.sqrt(distanceSquared)
          const normalizedDistance = distance / maxDistance
          const falloff = Math.pow(1 - normalizedDistance, 2)
          opacity = 0.15 + falloff * 0.85
          glowIntensity = 0.3 + falloff * 1.2
        }

        drawHexagon(hex.x, hex.y, opacity, glowIntensity)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", updateSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 })
  }, [])

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ opacity: 1 }}
    />
  )
}
