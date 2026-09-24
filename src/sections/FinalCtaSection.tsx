import React from 'react'
import { Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { MagneticButton } from '../components/common/MagneticButton'

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glowing mesh container */}
      <div className="relative rounded-3xl p-8 sm:p-16 lg:p-20 bg-gradient-to-b from-[#0F0F18]/90 via-[#0A0A10]/95 to-[#050508] border border-white/[0.1] shadow-[0_30px_90px_-20px_rgba(139,92,246,0.25)] overflow-hidden text-center backdrop-blur-2xl">
        {/* Atmospheric radial mesh spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-violet-600/20 via-indigo-600/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

        {/* Eyebrow badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>JOIN THE NEXT GENERATION OF LEARNERS</span>
        </div>

        {/* Headline */}
        <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
          Ready to understand{' '}
          <span className="text-gradient-accent">what's next?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="relative z-10 mt-6 text-base sm:text-lg text-zinc-300 max-w-xl mx-auto font-normal leading-relaxed">
          Start learning the way your brain actually works. Master programming, DSA, system design, and competitive exams through interactive spatial simulations.
        </p>

        {/* Action Buttons */}
        <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            variant="primary"
            size="lg"
            href="#demo"
            icon
            className="w-full sm:w-auto min-w-[200px]"
          >
            Start Learning
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="lg"
            href="#paths"
            className="w-full sm:w-auto min-w-[180px]"
          >
            Explore Paths
          </MagneticButton>
        </div>

        {/* Trust Badges */}
        <div className="relative z-10 mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-violet-400" />
            <span>Interactive Zero-Rote Visuals</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Self-Paced Master Roadmaps</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Instant Practice Feedback</span>
          </div>
        </div>
      </div>
    </section>
  )
}
