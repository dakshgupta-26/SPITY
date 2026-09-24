import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, Compass, BookOpen, Layers, Terminal, Sparkles, X } from 'lucide-react'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { MagneticButton } from '../common/MagneticButton'
import { MobileMenu } from './MobileMenu'
import { cn } from '../../utils/cn'

const NAV_LINKS = [
  { label: 'Learn', href: '#bento', icon: BookOpen },
  { label: 'Explore', href: '#demo', icon: Compass },
  { label: 'Paths', href: '#paths', icon: Layers },
  { label: 'Practice', href: '#practice', icon: Terminal },
]

export const Navbar: React.FC = () => {
  const { scrollDirection, scrolledPastTop } = useScrollDirection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Quick concept search mock filter
  const searchableConcepts = [
    { title: 'Binary Search Invariants', path: '#demo', category: 'DSA' },
    { title: 'React Fiber Reconciliation', path: '#bento', category: 'Frontend' },
    { title: 'HTTP Request & Response Life Cycle', path: '#visual-lesson', category: 'Networking' },
    { title: 'Node.js Event Loop & Microtasks', path: '#bento', category: 'Systems' },
    { title: 'Transformer Self-Attention Matrix', path: '#bento', category: 'AI/ML' },
    { title: 'B-Tree Database Index Traversal', path: '#bento', category: 'DBMS' },
    { title: 'Distributed Cache Stampede (XFetch)', path: '#practice', category: 'System Design' },
  ]

  const filteredConcepts = searchQuery.trim()
    ? searchableConcepts.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchableConcepts.slice(0, 4)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrollDirection === 'down' && scrolledPastTop
            ? '-translate-y-full opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100',
          scrolledPastTop
            ? 'py-3.5 bg-[#050505]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg p-1"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 p-[1px] shadow-[0_0_16px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_24px_rgba(139,92,246,0.5)] transition-all">
                <div className="w-full h-full bg-[#09090D] rounded-[11px] flex items-center justify-center relative overflow-hidden">
                  <span className="font-bold text-lg text-white tracking-tighter">S</span>
                  <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  SPITY
                </span>
                <span className="text-[10px] font-mono tracking-widest text-violet-400 font-medium uppercase mt-0.5">
                  VISUAL LEARNING
                </span>
              </div>
            </a>

            {/* Center: Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/[0.07] backdrop-blur-md">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Quick Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/[0.18] text-xs text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
                aria-label="Search visual concepts"
              >
                <Search className="w-3.5 h-3.5 text-violet-400" />
                <span>Search concept...</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white/[0.08] rounded border border-white/[0.08] text-zinc-400">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="sm:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-white/[0.08]"
                aria-label="Search concepts"
              >
                <Search className="w-4 h-4" />
              </button>

              <a
                href="#practice"
                className="hidden sm:inline-block text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 transition-colors"
              >
                Sign In
              </a>

              <MagneticButton
                variant="primary"
                size="sm"
                href="#bento"
                icon
                className="hidden xs:inline-flex"
              >
                Get Started
              </MagneticButton>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900/80 border border-white/[0.08]"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_LINKS}
      />

      {/* Interactive Quick Search Modal (Command Palette Style) */}
      <AnimatePresence>
        {searchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-[#0B0B10] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar Input */}
              <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
                <Search className="w-5 h-5 text-violet-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search visual lessons (e.g., Binary Search, React Fiber, HTTP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
                />
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.05]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Suggestions / Results */}
              <div className="p-3 max-h-80 overflow-y-auto space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-3 py-1.5">
                  Visual Concepts & Interactive Demonstrations
                </div>
                {filteredConcepts.map((item) => (
                  <a
                    key={item.title}
                    href={item.path}
                    onClick={() => setSearchModalOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-violet-600/15 group transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {item.category}
                    </span>
                  </a>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Select a topic to jump straight to the interactive visual</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
