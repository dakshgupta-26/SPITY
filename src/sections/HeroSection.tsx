import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Activity, Eye, ChevronDown } from 'lucide-react'
import { KnowledgeNetworkScene } from '../components/three/KnowledgeNetworkScene'
import { MagneticButton } from '../components/common/MagneticButton'
import { GlowBadge } from '../components/common/GlowBadge'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Knowledge Network Scene Background */}
      <div className="absolute inset-0 z-0">
        <KnowledgeNetworkScene />
        {/* Soft radial overlay to ensure headline readability without masking 3D beauty */}
        <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      </div>

      {/* Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center my-auto flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <GlowBadge variant="violet" pulsing>
            THE VISUAL LEARNING PLATFORM
          </GlowBadge>
        </motion.div>

        {/* Main Headline - Word by Word Blur Entrance */}
        <div className="overflow-hidden">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.04] sm:leading-[1.02]"
          >
            {['Learn.', 'Build.', 'Become.'].map((word, i) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className={
                  i === 1
                    ? 'text-gradient-accent inline-block mx-2 sm:mx-3'
                    : 'inline-block mx-1 sm:mx-2 text-white'
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-zinc-300/90 max-w-3xl font-normal leading-relaxed tracking-normal"
        >
          SPITY turns difficult concepts into visual, interactive learning experiences — from{' '}
          <span className="text-white font-medium border-b border-violet-500/40 pb-0.5">
            programming and DSA
          </span>{' '}
          to{' '}
          <span className="text-white font-medium border-b border-sky-500/40 pb-0.5">
            aptitude and competitive exams
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
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
            href="#bento"
            className="w-full sm:w-auto min-w-[180px]"
          >
            Explore SPITY
          </MagneticButton>
        </motion.div>

        {/* Micro-metric Pill Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs font-mono text-zinc-400"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-violet-400" />
            <span>Interactive Visualizations</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span>State & Flow Tracers</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>Zero Rote Memorization</span>
          </div>
        </motion.div>
      </div>

      {/* Gentle Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors mt-8"
      >
        <a href="#problem" className="flex flex-col items-center gap-1 group">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
            See the difference
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-violet-400" />
        </a>
      </motion.div>
    </section>
  )
}
