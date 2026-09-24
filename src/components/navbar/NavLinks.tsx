import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export interface NavItem {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Learn', href: '#bento' },
  { label: 'Explore', href: '#demo' },
  { label: 'Paths', href: '#paths' },
  { label: 'Practice', href: '#practice' },
]

export const NavLinks: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Learn')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Track scroll position to update active nav indicator dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      const bentoElem = document.getElementById('bento')
      const demoElem = document.getElementById('demo')
      const pathsElem = document.getElementById('paths')
      const practiceElem = document.getElementById('practice')

      if (practiceElem && scrollPosition >= practiceElem.offsetTop) {
        setActiveItem('Practice')
      } else if (pathsElem && scrollPosition >= pathsElem.offsetTop) {
        setActiveItem('Paths')
      } else if (demoElem && scrollPosition >= demoElem.offsetTop) {
        setActiveItem('Explore')
      } else if (bentoElem && scrollPosition >= bentoElem.offsetTop) {
        setActiveItem('Learn')
      } else {
        setActiveItem('Learn')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="hidden md:flex items-center gap-8 lg:gap-10 select-none" aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = activeItem === item.label
        const isHovered = hoveredItem === item.label

        return (
          <a
            key={item.label}
            href={item.href}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`relative py-1 text-[15px] font-medium tracking-normal transition-colors duration-200 ${
              isActive || isHovered ? 'text-white' : 'text-[#A1A1AA]'
            }`}
          >
            <span>{item.label}</span>

            {/* Subtle active indicator underline */}
            {isActive && (
              <motion.div
                layoutId="navbar-active-indicator"
                className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/80 via-violet-400 to-violet-500/80 rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </a>
        )
      })}
    </nav>
  )
}
