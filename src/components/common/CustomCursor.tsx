import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring physics for trailing follower
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 }
  const followerX = useSpring(cursorX, springConfig)
  const followerY = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || isReduced || window.innerWidth < 1024) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
            target.closest('a') ||
            target.closest('[role="button"]') ||
            target.closest('input') ||
            target.closest('[data-cursor="interactive"]')
        )
        setIsPointer(isInteractive)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [cursorX, cursorY, isVisible])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-violet-500/40 bg-violet-500/[0.04]"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          scale: isClicking ? 0.85 : 1,
          borderColor: isPointer ? 'rgba(167, 139, 250, 0.7)' : 'rgba(139, 92, 246, 0.3)',
          boxShadow: isPointer ? '0 0 20px rgba(139, 92, 246, 0.25)' : 'none',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 6 : 4,
          height: isPointer ? 6 : 4,
        }}
      />
    </div>
  )
}
