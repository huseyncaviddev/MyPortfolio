"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      hue: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
        this.hue = Math.random() * 60 + 180 // Blue to cyan range
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation variables
    let animationFrame: number
    let gradientOffset = 0
    let lastFrameTime = 0
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    // Animation loop
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime
      if (deltaTime < frameInterval) {
        animationFrame = requestAnimationFrame(animate)
        return
      }
      lastFrameTime = currentTime - (deltaTime % frameInterval)

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(10, 14, 26, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Animated gradient background
      gradientOffset += 0.001
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width * Math.cos(gradientOffset),
        canvas.height * Math.sin(gradientOffset),
      )
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.03)")
      gradient.addColorStop(0.5, "rgba(34, 211, 238, 0.03)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.03)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      const connectionDistance = 150
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y

          // Quick distance check before expensive sqrt
          const distanceSquared = dx * dx + dy * dy
          if (distanceSquared < connectionDistance * connectionDistance) {
            const distance = Math.sqrt(distanceSquared)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        })
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" style={{ opacity: 0.6 }} />
}
