import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, Clock, Award, ArrowRight, Sparkles } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { LEARNING_PATHS } from '../data/learningPathsData'

export const LearningPathsSection: React.FC = () => {
  const [selectedPathId, setSelectedPathId] = useState<string>('frontend')

  const currentPath =
    LEARNING_PATHS.find((p) => p.id === selectedPathId) || LEARNING_PATHS[0]

  return (
    <section id="paths" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient spotlight */}
      <div className="absolute top-1/2 left-1/4 w-[650px] h-[450px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="STRUCTURED CAREER ROADMAPS"
        title="Choose your"
        highlight="path."
        subtitle="Step-by-step visual paths engineered to take you from foundational syntax to staff-level engineering and top percentile competitive exam ranks."
      />

      {/* Path Selector Tabs (Horizontal on Desktop, scrollable on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start sm:justify-center">
        {LEARNING_PATHS.map((path) => {
          const isSelected = path.id === selectedPathId

          return (
            <button
              key={path.id}
              onClick={() => setSelectedPathId(path.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-violet-400/50'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/[0.08]'
              }`}
            >
              <span>{path.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active Path Showcase Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-[#09090E]/90 border border-white/[0.09] shadow-2xl p-6 sm:p-10 backdrop-blur-xl"
        >
          {/* Path Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-violet-400 font-bold px-2.5 py-0.5 rounded bg-violet-950/40 border border-violet-500/30">
                  {currentPath.badge}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Target Role: <strong className="text-white">{currentPath.role}</strong>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentPath.title}
              </h3>
              <p className="text-sm text-zinc-400 max-w-2xl font-normal">
                {currentPath.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-white/[0.06] text-center">
                <div className="flex items-center justify-center gap-1 text-violet-400 text-xs font-mono mb-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duration</span>
                </div>
                <div className="text-sm font-bold text-white font-mono">
                  {currentPath.estimatedWeeks}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-white/[0.06] text-center">
                <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-mono mb-0.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Retention</span>
                </div>
                <div className="text-sm font-bold text-white font-mono">
                  {currentPath.completionRate}
                </div>
              </div>
            </div>
          </div>

          {/* 5 Stages Sequential Flow (Beginner -> Intermediate -> Advanced -> Projects -> Interview) */}
          <div className="mt-8 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">
              Visual Progression Pipeline (5 Milestones)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {currentPath.stages.map((stage, idx) => (
                <div
                  key={stage.phase}
                  className="relative rounded-2xl p-5 bg-zinc-950/60 border border-white/[0.06] hover:border-violet-500/30 transition-all flex flex-col justify-between group"
                >
                  {/* Step Connector Arrow for Desktop */}
                  {idx < currentPath.stages.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-700 group-hover:text-violet-400 transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}

                  <div>
                    {/* Phase Number */}
                    <div className="text-[11px] font-mono text-violet-400 font-bold mb-2">
                      {stage.phase}
                    </div>

                    {/* Stage Title */}
                    <h4 className="text-sm font-bold text-white mb-3 leading-snug">
                      {stage.title}
                    </h4>

                    {/* Topics List */}
                    <ul className="space-y-1.5 mb-4">
                      {stage.topics.map((t) => (
                        <li
                          key={t}
                          className="text-xs text-zinc-400 flex items-start gap-1.5 leading-tight"
                        >
                          <span className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Asset Tag */}
                  <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                    <span className="text-zinc-400">{stage.visualAsset}</span>
                    <Sparkles className="w-3 h-3 text-violet-400/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action for Active Path */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <CheckCircle2 className="w-4 h-4 text-violet-400" />
              <span>Includes 120+ interactive visual simulations & mock review sessions</span>
            </div>

            <a
              href="#practice"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 px-5 py-2.5 rounded-xl shadow-md transition-all"
            >
              <span>Enroll in {currentPath.title}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
