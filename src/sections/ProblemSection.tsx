import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Clock, BookOpen, Brain, Zap, Sparkles, Layers, RefreshCw } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'

const TRADITIONAL_PAIN_POINTS = [
  {
    icon: Clock,
    title: '3-Hour Monotonous Lectures',
    desc: 'Passive video streaming where your mind drifts after 12 minutes, leaving you with vague notes.',
    tag: 'Passive Consumption',
  },
  {
    icon: BookOpen,
    title: '500-Page Dense PDFs',
    desc: 'Walls of academic text trying to explain dynamic systems with static, 2D black-and-white printouts.',
    tag: 'Zero Spatial Context',
  },
  {
    icon: Brain,
    title: 'Rote Formula Memorization',
    desc: 'Cramming syntax and algorithm steps without understanding the underlying invariant invariants.',
    tag: 'Ebbinghaus Forgetting Curve',
  },
]

const SPITY_SOLUTIONS = [
  {
    icon: Zap,
    title: 'Interactive Visual Simulations',
    desc: 'Every algorithm and system is a live sandbox. Step backward and forward through states with mouse drags.',
    tag: 'High Sensory Recall',
  },
  {
    icon: Layers,
    title: 'Structural Mental Models',
    desc: 'See how components connect in 3D. Virtual DOM trees, event loops, and database joins become tangible objects.',
    tag: 'Zero Mystery',
  },
  {
    icon: Sparkles,
    title: 'Compounding Intuition',
    desc: 'Once your brain sees how an idea works spatially, you can derive the solution on a whiteboard without cramming.',
    tag: 'Permanent Understanding',
  },
]

export const ProblemSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'traditional' | 'spity'>('spity')

  return (
    <section id="problem" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background soft ambient spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="THE CORE PARADIGM SHIFT"
        title="Learning shouldn't feel like"
        highlight="memorizing."
        subtitle="Traditional education forces you to memorize descriptions of dynamic systems. SPITY gives your brain direct visual models of how things actually move and compute."
      />

      {/* Interactive Mode Toggle */}
      <div className="flex justify-center mb-12">
        <div className="p-1 rounded-full bg-zinc-900/90 border border-white/[0.08] backdrop-blur-md flex items-center gap-1 shadow-lg">
          <button
            onClick={() => setActiveTab('traditional')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'traditional'
                ? 'bg-rose-950/40 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            The Traditional Way
          </button>
          <button
            onClick={() => setActiveTab('spity')}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'spity'
                ? 'bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The SPITY Way</span>
          </button>
        </div>
      </div>

      {/* Side-by-Side Architectural Transformation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Column: Traditional Model */}
        <motion.div
          animate={{
            opacity: activeTab === 'traditional' ? 1 : 0.65,
            scale: activeTab === 'traditional' ? 1 : 0.98,
          }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl p-6 sm:p-8 border transition-all ${
            activeTab === 'traditional'
              ? 'bg-zinc-950/80 border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.06)]'
              : 'bg-zinc-950/40 border-white/[0.06]'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-200">Traditional Education</h3>
                <p className="text-xs text-zinc-500">Coaching institutes, PDFs, 60-hour video playlists</p>
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Low Retention
            </span>
          </div>

          <div className="space-y-4">
            {TRADITIONAL_PAIN_POINTS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2 group hover:border-rose-500/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors" />
                      <span className="text-sm font-semibold text-zinc-300">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">{item.tag}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pl-6">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-rose-950/15 border border-rose-500/20 flex items-center gap-3 text-xs text-rose-300/80">
            <RefreshCw className="w-4 h-4 text-rose-400 shrink-0" />
            <span>Result: You re-watch the same tutorial 4 times and still freeze in technical interviews.</span>
          </div>
        </motion.div>

        {/* Right Column: SPITY Visual Learning Model */}
        <motion.div
          animate={{
            opacity: activeTab === 'spity' ? 1 : 0.7,
            scale: activeTab === 'spity' ? 1 : 0.98,
          }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl p-6 sm:p-8 border transition-all ${
            activeTab === 'spity'
              ? 'bg-zinc-900/40 border-violet-500/40 shadow-[0_0_40px_rgba(139,92,246,0.12)]'
              : 'bg-zinc-950/40 border-white/[0.06]'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.3)]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">The SPITY Platform</h3>
                <p className="text-xs text-violet-300/70">Interactive visual stories, state machines, spatial clarity</p>
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              98% Conceptual Recall
            </span>
          </div>

          <div className="space-y-4">
            {SPITY_SOLUTIONS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-violet-950/10 border border-violet-500/20 space-y-2 group hover:border-violet-400/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-semibold text-white">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-violet-400/80">{item.tag}</span>
                  </div>
                  <p className="text-xs text-zinc-300/90 leading-relaxed pl-6">{item.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-center gap-3 text-xs text-violet-200">
            <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Result: One visual playthrough replaces 20 hours of memorization. You derive solutions intuitively.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
