import React from 'react'
import { motion } from 'framer-motion'
import { Flame, CheckCircle, Clock, Zap } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'

export const ProgressDashboardSection: React.FC = () => {
  return (
    <section id="progress" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

      <SectionHeader
        badge="TELEMETRY & MASTERY TRACKING"
        title="Quantify your"
        highlight="intuition."
        subtitle="Track your conceptual comprehension with real-time telemetry. Watch your mental models compound across algorithms, frameworks, and system architectures."
      />

      {/* Main SaaS Dashboard Container */}
      <div className="rounded-3xl bg-[#09090D] border border-white/[0.08] shadow-[0_25px_70px_-20px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-2xl">
        {/* Dashboard Top Header Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] bg-zinc-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400 font-bold text-xs">
              SP
            </div>
            <div>
              <div className="text-xs font-bold text-white">daksh.engineer/mastery</div>
              <div className="text-[10px] text-zinc-500 font-mono">
                Level 14 • Advanced Visual Architect
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-zinc-400">Live Telemetry Sync</span>
          </div>
        </div>

        {/* 4 Top Metric Cards */}
        <div className="p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] hover:border-violet-500/30 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Streak</span>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              14 Days
            </div>
            <div className="text-[11px] text-amber-400/80 font-mono mt-1">
              Top 2% consistency
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] hover:border-violet-500/30 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Concepts Mastered</span>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              218
            </div>
            <div className="text-[11px] text-emerald-400/80 font-mono mt-1">
              +14 this week
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] hover:border-violet-500/30 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Problems Solved</span>
              <Zap className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              342
            </div>
            <div className="text-[11px] text-violet-400/80 font-mono mt-1">
              96.4% first-try accuracy
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-white/[0.06] hover:border-violet-500/30 transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Active Learning</span>
              <Clock className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              64.5 hrs
            </div>
            <div className="text-[11px] text-sky-400/80 font-mono mt-1">
              Zero passive watching
            </div>
          </div>
        </div>

        {/* Dashboard Dual Grid: Skill Radar + Weekly Learning Velocity */}
        <div className="px-6 sm:px-8 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Skill Radar Matrix SVG (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Cognitive Skill Topology
              </span>
              <span className="text-[11px] font-mono text-violet-400">
                Overall: 92/100
              </span>
            </div>

            {/* SVG Radar Chart */}
            <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center my-2">
              <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                {/* Background Concentric Polygons */}
                {[0.25, 0.5, 0.75, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points="100,20 170,60 170,140 100,180 30,140 30,60"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                    transform={`scale(${scale}) translate(${100 * (1 - scale)}, ${100 * (1 - scale)})`}
                  />
                ))}

                {/* Axes */}
                <line x1="100" y1="100" x2="100" y2="20" stroke="rgba(255,255,255,0.08)" />
                <line x1="100" y1="100" x2="170" y2="60" stroke="rgba(255,255,255,0.08)" />
                <line x1="100" y1="100" x2="170" y2="140" stroke="rgba(255,255,255,0.08)" />
                <line x1="100" y1="100" x2="100" y2="180" stroke="rgba(255,255,255,0.08)" />
                <line x1="100" y1="100" x2="30" y2="140" stroke="rgba(255,255,255,0.08)" />
                <line x1="100" y1="100" x2="30" y2="60" stroke="rgba(255,255,255,0.08)" />

                {/* Animated Skill Polygon */}
                <motion.polygon
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  points="100,32 162,70 156,132 100,165 42,130 48,68"
                  fill="rgba(139, 92, 246, 0.25)"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                />

                {/* Vertex Dots */}
                <circle cx="100" cy="32" r="3.5" fill="#C4B5FD" />
                <circle cx="162" cy="70" r="3.5" fill="#38BDF8" />
                <circle cx="156" cy="132" r="3.5" fill="#C4B5FD" />
                <circle cx="100" cy="165" r="3.5" fill="#8B5CF6" />
                <circle cx="42" cy="130" r="3.5" fill="#38BDF8" />
                <circle cx="48" cy="68" r="3.5" fill="#C4B5FD" />

                {/* Labels */}
                <text x="100" y="12" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
                  DSA (95%)
                </text>
                <text x="180" y="62" textAnchor="start" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
                  REACT (90%)
                </text>
                <text x="180" y="145" textAnchor="start" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
                  SYSTEMS (85%)
                </text>
                <text x="100" y="195" textAnchor="middle" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
                  AI / ML (88%)
                </text>
                <text x="20" y="145" textAnchor="end" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
                  DBMS (86%)
                </text>
                <text x="20" y="62" textAnchor="end" fill="#A1A1AA" fontSize="8" fontFamily="monospace">
                  GATE CS (92%)
                </text>
              </svg>
            </div>

            <div className="text-[11px] text-zinc-500 font-mono text-center pt-2">
              Spatial evaluation derived from 340+ simulation checkpoints
            </div>
          </div>

          {/* Active Learning Path Progress & Activity Heatmap (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Active Path Box */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-wider">
                    CURRENT TRACK
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Frontend Architecture Engineer
                  </h4>
                </div>
                <span className="text-sm font-mono font-bold text-white">68% COMPLETE</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '68%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-400 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Phase 03: Performance Profiling</span>
                <span>Next: Virtual List Optimization</span>
              </div>
            </div>

            {/* Consistency Heatmap Simulation (14 weeks) */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Comprehension Velocity (Last 12 Weeks)
                </span>
                <span className="text-[11px] font-mono text-emerald-400">
                  42 Active Sessions
                </span>
              </div>

              {/* Heatmap Grid */}
              <div className="grid grid-cols-12 gap-1.5 pt-2">
                {Array.from({ length: 48 }).map((_, idx) => {
                  const level =
                    idx % 7 === 0 ? 0 : idx % 5 === 0 ? 3 : idx % 3 === 0 ? 2 : 1
                  const colors = [
                    'bg-white/[0.03]',
                    'bg-violet-950/60',
                    'bg-violet-700/70',
                    'bg-violet-500',
                  ]

                  return (
                    <div
                      key={idx}
                      className={`h-4 rounded-[4px] border border-white/[0.03] ${colors[level]} transition-transform hover:scale-125`}
                      title={`Session intensity: level ${level}`}
                    />
                  )
                })}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-3 pt-2 border-t border-white/[0.04]">
                <span>Less active</span>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded bg-white/[0.03]" />
                  <div className="w-2.5 h-2.5 rounded bg-violet-950/60" />
                  <div className="w-2.5 h-2.5 rounded bg-violet-700/70" />
                  <div className="w-2.5 h-2.5 rounded bg-violet-500" />
                </div>
                <span>Deep mastery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
