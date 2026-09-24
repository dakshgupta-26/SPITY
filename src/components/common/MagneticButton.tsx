import React, { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

interface MagneticButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'pill'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
  onClick?: () => void
  href?: string
  className?: string
  ariaLabel?: string
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = false,
  onClick,
  href,
  className,
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 1024) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Subtle magnetic attraction
    x.set(distanceX * 0.25)
    y.set(distanceY * 0.25)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 font-semibold',
  }

  const variantStyles = {
    primary:
      'relative bg-gradient-to-b from-violet-600 to-violet-700 text-white shadow-[0_0_24px_-4px_rgba(139,92,246,0.45)] hover:shadow-[0_0_32px_-2px_rgba(139,92,246,0.65)] border border-violet-400/40 hover:border-violet-300/60 transition-shadow duration-300',
    secondary:
      'relative bg-zinc-900/80 hover:bg-zinc-850 text-zinc-100 border border-white/[0.12] hover:border-white/[0.25] backdrop-blur-md shadow-sm',
    ghost:
      'text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors',
    pill:
      'bg-violet-950/40 text-violet-300 border border-violet-500/30 hover:bg-violet-900/50 hover:border-violet-400/50 rounded-full',
  }

  const content = (
    <motion.div
      style={{ x, y }}
      className="inline-flex items-center justify-center font-medium tracking-wide z-10"
    >
      <span>{children}</span>
      {icon && (
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="inline-flex items-center"
        >
          <ArrowRight className="w-4 h-4 ml-1" />
        </motion.span>
      )}
    </motion.div>
  )

  const commonProps = {
    ref: buttonRef as any,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    'aria-label': ariaLabel,
    className: cn(
      'group inline-flex items-center justify-center overflow-hidden transition-all duration-200 select-none cursor-pointer',
      sizeStyles[size],
      variantStyles[variant],
      className
    ),
  }

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button {...commonProps} onClick={onClick} type="button">
      {content}
    </button>
  )
}
