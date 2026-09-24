import { useState, useEffect } from 'react'

export interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })

  useEffect(() => {
    let animationFrameId: number

    const handleMouseMove = (event: MouseEvent) => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        const { clientX, clientY } = event
        const normalizedX = (clientX / window.innerWidth) * 2 - 1
        const normalizedY = -(clientY / window.innerHeight) * 2 + 1

        setMousePosition({
          x: clientX,
          y: clientY,
          normalizedX,
          normalizedY,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return mousePosition
}
