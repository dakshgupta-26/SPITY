import React from 'react'
import { motion } from 'framer-motion'
import { GlowBadge } from './GlowBadge'
import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  badge?: string
  badgeVariant?: 'violet' | 'cyan' | 'neutral'
  title: string
  highlight?: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'violet',
  title,
  highlight,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'relative mb-12 sm:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl',
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block"
        >
          <GlowBadge variant={badgeVariant}>{badge}</GlowBadge>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]"
      >
        {title}{' '}
        {highlight && (
          <span className="text-gradient-accent inline-block">{highlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
