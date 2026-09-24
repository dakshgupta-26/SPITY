import React from 'react'
import { cn } from '../../utils/cn'

interface GlowBadgeProps {
  children: React.ReactNode
  variant?: 'violet' | 'cyan' | 'neutral'
  pulsing?: boolean
  className?: string
}

export const GlowBadge: React.FC<GlowBadgeProps> = ({
  children,
  variant = 'violet',
  pulsing = true,
  className,
}) => {
  const variantStyles = {
    violet: 'bg-violet-950/40 text-violet-300 border-violet-500/30',
    cyan: 'bg-sky-950/40 text-sky-300 border-sky-500/30',
    neutral: 'bg-zinc-900/60 text-zinc-300 border-white/[0.1]',
  }

  const dotStyles = {
    violet: 'bg-violet-400 shadow-[0_0_8px_#a78bfa]',
    cyan: 'bg-sky-400 shadow-[0_0_8px_#38bdf8]',
    neutral: 'bg-zinc-400',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border backdrop-blur-md select-none',
        variantStyles[variant],
        className
      )}
    >
      {pulsing && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotStyles[variant]
            )}
          />
          <span className={cn('relative inline-flex rounded-full h-2 w-2', dotStyles[variant])} />
        </span>
      )}
      <span>{children}</span>
    </span>
  )
}
