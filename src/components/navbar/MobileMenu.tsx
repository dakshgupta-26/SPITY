import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Logo } from './Logo'
import { NAV_ITEMS } from './NavLinks'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenAuth: (mode: 'login' | 'signup') => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenAuth }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#050505] text-white overflow-hidden"
        >
          {/* Subtle background ambient gradient */}
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Header Bar */}
          <div className="relative z-10 flex items-center justify-between h-[72px] px-6 border-b border-white/[0.08]">
            <Logo />
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white bg-white/[0.04] border border-white/[0.08] transition-colors cursor-pointer"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links (Sequential Staggered Reveal) */}
          <div className="relative z-10 flex-1 px-6 py-10 flex flex-col justify-between overflow-y-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.12 },
                },
              }}
              className="space-y-6"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block text-2xl font-semibold text-zinc-200 hover:text-white tracking-tight transition-colors py-1"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Auth Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="pt-8 border-t border-white/[0.08] space-y-3.5 pb-6"
            >
              <button
                onClick={() => {
                  onClose()
                  onOpenAuth('login')
                }}
                className="w-full h-12 rounded-xl flex items-center justify-center text-[15px] font-medium text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] transition-colors cursor-pointer"
              >
                Log in
              </button>

              <button
                onClick={() => {
                  onClose()
                  onOpenAuth('signup')
                }}
                className="w-full h-12 rounded-xl flex items-center justify-center text-[15px] font-semibold text-[#050505] bg-white hover:bg-zinc-100 transition-all cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
              >
                Sign up
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
