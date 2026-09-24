import React from 'react'

interface AuthActionsProps {
  onOpenAuth: (mode: 'login' | 'signup') => void
}

export const AuthActions: React.FC<AuthActionsProps> = ({ onOpenAuth }) => {
  return (
    <div className="flex items-center gap-5 sm:gap-6">
      {/* Log in */}
      <button
        onClick={() => onOpenAuth('login')}
        type="button"
        className="text-[15px] font-medium text-[#A1A1AA] hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:text-white"
      >
        Log in
      </button>

      {/* Sign up (Primary CTA) */}
      <button
        onClick={() => onOpenAuth('signup')}
        type="button"
        className="h-10 px-4 sm:px-5 rounded-[10px] bg-white hover:bg-zinc-100 text-[#050505] text-[14px] font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.18)] active:translate-y-0 cursor-pointer flex items-center justify-center select-none"
      >
        Sign up
      </button>
    </div>
  )
}
