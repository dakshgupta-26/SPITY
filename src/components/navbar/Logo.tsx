import React from 'react'

export const Logo: React.FC = () => {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded-md transition-all duration-200 select-none py-1"
      aria-label="SPITY Home"
    >
      <img
        src="/spity-logo-transparent.png"
        alt="SPITY"
        className="h-8 sm:h-9 w-auto object-contain transition-all duration-200 group-hover:opacity-95 group-hover:brightness-105 group-hover:scale-[1.02]"
        loading="eager"
      />
    </a>
  )
}
