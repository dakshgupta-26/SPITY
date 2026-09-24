import React from 'react'

export const Logo: React.FC = () => {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400 rounded-md transition-all duration-200 select-none"
      aria-label="SPITY Home"
    >
      {/* Subtle, precise technical mark */}
      <div className="relative flex items-center justify-center w-6 h-6 text-white group-hover:text-violet-300 transition-colors duration-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 transition-transform duration-200 group-hover:scale-105"
        >
          {/* Top curve */}
          <path
            d="M18 7.5C18 5.01472 15.7614 3 13 3H7.5C5.01472 3 3 5.01472 3 7.5C3 9.98528 5.01472 12 7.5 12H16.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Bottom curve */}
          <path
            d="M6 16.5C6 18.9853 8.23858 21 11 21H16.5C18.9853 21 21 18.9853 21 16.5C21 14.0147 18.9853 12 16.5 12H7.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Tiny accent node */}
          <circle
            cx="16.5"
            cy="12"
            r="1.75"
            className="fill-violet-400 group-hover:fill-violet-300 transition-colors"
          />
        </svg>
      </div>

      {/* Wordmark */}
      <span className="text-[19px] font-extrabold tracking-[-0.03em] text-white group-hover:text-zinc-100 transition-colors duration-200 font-sans">
        SPITY
      </span>
    </a>
  )
}
