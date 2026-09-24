import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Hammer, Trophy, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'

export const CoreUseCasesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      id: 'build',
      eyebrow: 'FOR DEVELOPERS',
      title: 'BUILD',
      headline: 'Learn by building real things.',
      desc: 'Do not just copy tutorial code. Dissect high-throughput microservices, WebGL engines, and distributed databases from the inside out.',
      icon: Hammer,
      accent: 'border-violet-500/40 text-violet-400',
      badge: 'Production Systems',
      features: ['Real-time Architecture Sandboxes', 'Interactive State Trace', 'Staff-Level Patterns'],
    },
    {
      id: 'crack',
      eyebrow: 'FOR COMPETITIVE EXAMS',
      title: 'CRACK',
      headline: 'Prepare with understanding, not memorization.',
      desc: 'Whether it is GATE CS, Banking Quantitative Aptitude, or UPSC Engineering Services, spatial intuition defeats high-pressure tricky edge cases.',
      icon: Trophy,
      accent: 'border-sky-500/40 text-sky-400',
      badge: 'Top 0.1% Ranks',
      features: ['Eliminate Formula Guesswork', 'Speed Through Spatial Shortcuts', '15-Year Pattern Invariants'],
    },
    {
      id: 'grow',
      eyebrow: 'FOR CAREERS',
      title: 'GROW',
      headline: 'Build skills that compound.',
      desc: 'Frameworks and libraries change every 24 months. First-principles mental models of computation and architecture remain valuable for decades.',
      icon: TrendingUp,
      accent: 'border-emerald-500/40 text-emerald-400',
      badge: 'Lifetime Value',
      features: ['First-Principles Thinking', 'High-Trust Whiteboard Fluency', 'Enduring Architectural Intuition'],
    },
  ]

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[450px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

      <SectionHeader
        badge="THREE PILLARS OF SPITY"
        title="Engineered for"
        highlight="real outcomes."
        subtitle="Whether you are shipping mission-critical software, conquering nation-wide competitive exams, or scaling your engineering leadership career."
      />

      {/* 3 Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon
          const isHovered = hoveredCard === idx

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 bg-[#09090E]/90 border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                isHovered
                  ? 'border-violet-500/50 shadow-[0_20px_50px_-10px_rgba(139,92,246,0.25)] bg-zinc-900/70'
                  : 'border-white/[0.08] hover:border-white/[0.18]'
              }`}
            >
              {/* Subtle top ambient glow on hover */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Top: Icon + Eyebrow */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center transition-all ${
                      isHovered ? 'bg-violet-600/20 border-violet-500/40 text-violet-300 shadow-md' : 'text-zinc-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
                    {card.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-widest text-violet-400 font-bold mb-1">
                  {card.eyebrow}
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                  {card.title}
                </h3>

                <h4 className="text-base font-bold text-zinc-200 mb-3 group-hover:text-white transition-colors">
                  {card.headline}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                  {card.desc}
                </p>
              </div>

              {/* Bottom: Feature checklist + Interactive CTA */}
              <div className="relative z-10 pt-6 border-t border-white/[0.06] space-y-4">
                <ul className="space-y-2">
                  {card.features.map((feat) => (
                    <li
                      key={feat}
                      className="text-xs text-zinc-300 flex items-center gap-2 font-mono"
                    >
                      <Sparkles className="w-3 h-3 text-violet-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-xs font-bold text-violet-400 group-hover:text-violet-300 transition-colors pt-2">
                  <span>Explore {card.title} Path</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
