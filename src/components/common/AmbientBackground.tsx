import React from 'react'

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#050505]">
      {/* Very subtle technical grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />

      {/* Atmospheric Top Radial Lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-violet-600/10 via-indigo-600/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Mid-page Ambient Spotlight */}
      <div className="absolute top-[40%] right-[-10%] w-[800px] h-[700px] bg-sky-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Bottom Ambient Glow */}
      <div className="absolute bottom-[10%] left-[-10%] w-[750px] h-[650px] bg-violet-600/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* High-fidelity CSS SVG Noise Filter for tactile texture without heavy asset loading */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
