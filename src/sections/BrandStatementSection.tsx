import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export const BrandStatementSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Cinematic Center Stage Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-b from-violet-600/10 via-indigo-600/5 to-transparent rounded-full blur-[180px] pointer-events-none" />

      {/* Center Keynote Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Subtle Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-violet-400"
        >
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>OUR CORE CONVICTION</span>
        </motion.div>

        {/* Keynote Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]"
        >
          The future of learning <br className="hidden sm:inline" />
          <span className="text-gradient-accent">is visual.</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg sm:text-2xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
        >
          SPITY exists to make difficult things easier to understand.
        </motion.p>

        {/* Fine Architectural Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mx-auto my-8"
        />

        {/* Signature Branding */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="space-y-3 flex flex-col items-center justify-center"
        >
          <img
            src="/spity-logo-transparent.png"
            alt="SPITY"
            className="h-14 sm:h-16 w-auto object-contain mx-auto filter drop-shadow-[0_0_24px_rgba(139,92,246,0.35)]"
          />
          <div className="text-sm sm:text-base font-mono text-zinc-400 tracking-wider">
            Learn. Build. Become.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
