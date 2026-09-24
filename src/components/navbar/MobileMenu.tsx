import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, X } from 'lucide-react'
import { MagneticButton } from '../common/MagneticButton'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: { label: string; href: string; icon: any }[]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#050505]/95 backdrop-blur-2xl border-b border-white/[0.08]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center">
                <span className="font-bold text-white text-base">S</span>
              </div>
              <span className="font-bold tracking-tight text-white text-lg">SPITY</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="space-y-3"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 px-3 mb-2">
                Navigation
              </div>
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] hover:bg-violet-600/10 border border-white/[0.04] hover:border-violet-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-white/[0.06] text-zinc-400 group-hover:text-violet-300">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-zinc-200 group-hover:text-white text-base">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-white/[0.06] space-y-3">
              <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 mb-4">
                <div className="flex items-center gap-2 text-violet-300 text-xs font-medium mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Visual Learning Platform</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Don't memorize what you can understand. Join over 40,000 engineers & students.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#practice"
                  onClick={onClose}
                  className="w-full text-center py-3 rounded-xl text-sm font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                >
                  Sign In
                </a>
                <MagneticButton
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose()
                    const elem = document.getElementById('bento')
                    elem?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full"
                  icon
                >
                  Get Started
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
