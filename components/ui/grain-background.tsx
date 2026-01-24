'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export function GrainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth * dpr
        canvas.height = parent.offsetHeight * dpr
        canvas.style.width = `${parent.offsetWidth}px`
        canvas.style.height = `${parent.offsetHeight}px`
        ctx.scale(dpr, dpr)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      if (!ctx || !canvas) return

      const width = canvas.width
      const height = canvas.height
      const isDark = resolvedTheme === 'dark'

      // Clear with background color
      ctx.fillStyle = isDark ? '#09090b' : '#ffffff'
      ctx.fillRect(0, 0, width, height)

      // Create grain pattern
      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      // Slow animation - changes every ~15 frames for smooth but slow movement
      const seed = Math.floor(frame / 15)

      for (let i = 0; i < data.length; i += 4) {
        // Generate grain using simple noise
        const random = seededRandom(i / 4 + seed * 10000)

        if (isDark) {
          // Dark mode: light grain on dark
          const grain = random * 40 // 0-40 brightness variation
          const baseColor = 9 // matches zinc-950 (#09090b)
          data[i] = baseColor + grain     // R
          data[i + 1] = baseColor + grain // G
          data[i + 2] = baseColor + grain + 2 // B (slightly blue tint)
          data[i + 3] = 255               // A
        } else {
          // Light mode: dark grain on white
          const grain = random * 25 // 0-25 darkness variation
          const baseColor = 255
          data[i] = baseColor - grain     // R
          data[i + 1] = baseColor - grain // G
          data[i + 2] = baseColor - grain // B
          data[i + 3] = 255               // A
        }
      }

      ctx.putImageData(imageData, 0, 0)

      frame++
      animationRef.current = requestAnimationFrame(animate)
    }

    // Seeded random for consistent noise pattern
    function seededRandom(seed: number): number {
      const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
      return x - Math.floor(x)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  )
}
