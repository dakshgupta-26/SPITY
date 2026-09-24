import React, { useState, useEffect } from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { AuthActions } from './AuthActions'
import { MobileMenu } from './MobileMenu'
import { AuthModal } from './AuthModal'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45)
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setAuthModalOpen(true)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'h-[66px] bg-[#050505]/82 backdrop-blur-[20px] border-b border-white/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'h-[76px] bg-[#050505]/45 backdrop-blur-[14px] border-b border-transparent'
        }`}
      >
        <div className="max-w-[1260px] h-full mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-full">
            {/* LEFT: SPITY Wordmark */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* CENTER: Clean Navigation Links (Unencapsulated, generous breathing room) */}
            <div className="hidden md:flex items-center justify-center flex-1 px-8">
              <NavLinks />
            </div>

            {/* RIGHT: Log in + Sign up CTA */}
            <div className="hidden md:flex items-center justify-end">
              <AuthActions onOpenAuth={handleOpenAuth} />
            </div>

            {/* MOBILE: Minimalist Menu Trigger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg text-zinc-300 hover:text-white bg-white/[0.03] border border-white/[0.08] transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <span className="w-4 h-[1.5px] bg-current rounded-full" />
                <span className="w-4 h-[1.5px] bg-current rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Authentication Dialog */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  )
}
