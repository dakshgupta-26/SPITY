import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  ArrowUpRight,
} from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'
import { BENTO_ITEMS, type BentoItem } from '../data/bentoData'

// Mini Visual 1: DSA Tree Traversal
const DSAMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
    <svg className="w-full h-full" viewBox="0 0 240 100" fill="none">
      {/* Edges */}
      <line x1="120" y1="20" x2="60" y2="55" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
      <line x1="120" y1="20" x2="180" y2="55" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
      <line x1="60" y1="55" x2="35" y2="85" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
      <line x1="60" y1="55" x2="85" y2="85" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
      <line x1="180" y1="55" x2="155" y2="85" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
      <line x1="180" y1="55" x2="205" y2="85" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />

      {/* Root Node */}
      <circle
        cx="120"
        cy="20"
        r="11"
        className={`transition-all duration-300 ${
          isHovered ? 'fill-violet-600 stroke-violet-300 stroke-2' : 'fill-zinc-900 stroke-violet-500/50 stroke-1'
        }`}
      />
      <text x="120" y="24" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="monospace" fontWeight="bold">
        50
      </text>

      {/* Left Child */}
      <circle
        cx="60"
        cy="55"
        r="9"
        className={`transition-all duration-300 ${
          isHovered ? 'fill-indigo-600 stroke-indigo-300 stroke-2' : 'fill-zinc-900 stroke-white/20 stroke-1'
        }`}
      />
      <text x="60" y="58" textAnchor="middle" fill="#DDD" fontSize="8" fontFamily="monospace">
        25
      </text>

      {/* Right Child */}
      <circle
        cx="180"
        cy="55"
        r="9"
        className={`transition-all duration-300 ${
          isHovered ? 'fill-sky-600 stroke-sky-300 stroke-2' : 'fill-zinc-900 stroke-white/20 stroke-1'
        }`}
      />
      <text x="180" y="58" textAnchor="middle" fill="#DDD" fontSize="8" fontFamily="monospace">
        75
      </text>

      {/* Leaf Nodes */}
      <circle cx="35" cy="85" r="7" fill="#18181B" stroke="rgba(255,255,255,0.15)" />
      <circle cx="85" cy="85" r="7" fill="#18181B" stroke="rgba(255,255,255,0.15)" />
      <circle cx="155" cy="85" r="7" fill="#18181B" stroke="rgba(255,255,255,0.15)" />
      <circle cx="205" cy="85" r="7" fill="#18181B" stroke="rgba(255,255,255,0.15)" />
    </svg>
  </div>
)

// Mini Visual 2: React Fiber / Virtual DOM
const ReactMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-28 flex items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <div
        className={`px-3 py-1 rounded text-[10px] font-mono border transition-all ${
          isHovered ? 'bg-sky-500/20 text-sky-300 border-sky-400' : 'bg-zinc-900 text-zinc-400 border-white/[0.08]'
        }`}
      >
        &lt;App /&gt;
      </div>
      <div className="flex items-center gap-3">
        <div className="w-16 h-0.5 bg-zinc-700" />
        <div className="w-16 h-0.5 bg-zinc-700" />
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
            isHovered ? 'bg-violet-600/30 text-violet-300 border-violet-400' : 'bg-zinc-900 text-zinc-500 border-white/[0.06]'
          }`}
        >
          &lt;Navbar /&gt;
        </div>
        <div
          className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
            isHovered ? 'bg-violet-600/30 text-violet-300 border-violet-400' : 'bg-zinc-900 text-zinc-500 border-white/[0.06]'
          }`}
        >
          &lt;Feed /&gt;
        </div>
      </div>
    </div>
  </div>
)

// Mini Visual 3: Node.js Event Loop
const NodeMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-28 flex items-center justify-center">
    <div className="relative w-20 h-20 rounded-full border border-dashed border-violet-500/30 flex items-center justify-center">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
          isHovered ? 'bg-violet-600 shadow-[0_0_16px_rgba(139,92,246,0.6)]' : 'bg-zinc-800'
        }`}
      >
        <Cpu className="w-4 h-4 text-white" />
      </div>
      {/* Orbiting Task */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: isHovered ? 2 : 6, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <div className="w-3 h-3 rounded-full bg-sky-400 -top-1.5 left-1/2 -translate-x-1/2 shadow-sm" />
      </motion.div>
    </div>
  </div>
)

// Mini Visual 4: AI / Neural Network
const AIMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-32 flex items-center justify-center">
    <svg className="w-full h-full" viewBox="0 0 240 100" fill="none">
      {/* Synapse Lines */}
      {[25, 50, 75].map((y1, i) =>
        [20, 40, 60, 80].map((y2, j) => (
          <line
            key={`${i}-${j}`}
            x1="50"
            y1={y1}
            x2="120"
            y2={y2}
            stroke={isHovered ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.06)'}
            strokeWidth="1"
          />
        ))
      )}
      {[20, 40, 60, 80].map((y1, i) =>
        [35, 65].map((y2, j) => (
          <line
            key={`out-${i}-${j}`}
            x1="120"
            y1={y1}
            x2="190"
            y2={y2}
            stroke={isHovered ? 'rgba(56,189,248,0.35)' : 'rgba(255,255,255,0.06)'}
            strokeWidth="1"
          />
        ))
      )}

      {/* Layer 1 */}
      {[25, 50, 75].map((y, idx) => (
        <circle key={idx} cx="50" cy={y} r="6" fill="#18181B" stroke="#8B5CF6" strokeWidth="1.5" />
      ))}
      {/* Hidden Layer */}
      {[20, 40, 60, 80].map((y, idx) => (
        <circle
          key={idx}
          cx="120"
          cy={y}
          r="6"
          fill={isHovered ? '#8B5CF6' : '#18181B'}
          stroke="#C4B5FD"
          strokeWidth="1.5"
        />
      ))}
      {/* Output Layer */}
      {[35, 65].map((y, idx) => (
        <circle key={idx} cx="190" cy={y} r="6" fill="#18181B" stroke="#38BDF8" strokeWidth="1.5" />
      ))}
    </svg>
  </div>
)

// Mini Visual 5: DBMS Relation Join
const DBMSMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-28 flex items-center justify-center gap-3">
    <div
      className={`p-2 rounded-lg border text-[10px] font-mono transition-colors ${
        isHovered ? 'bg-violet-950/40 border-violet-500/40 text-violet-200' : 'bg-zinc-900 border-white/[0.08] text-zinc-400'
      }`}
    >
      <div className="font-bold border-b border-white/[0.06] pb-1 mb-1">users</div>
      <div>id (PK)</div>
      <div>name</div>
    </div>
    <div className="w-6 h-0.5 bg-violet-500/60" />
    <div
      className={`p-2 rounded-lg border text-[10px] font-mono transition-colors ${
        isHovered ? 'bg-sky-950/40 border-sky-500/40 text-sky-200' : 'bg-zinc-900 border-white/[0.08] text-zinc-400'
      }`}
    >
      <div className="font-bold border-b border-white/[0.06] pb-1 mb-1">orders</div>
      <div>id (PK)</div>
      <div>user_id (FK)</div>
    </div>
  </div>
)

// Mini Visual 6: Aptitude Geometry Logic
const AptitudeMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-28 flex items-center justify-center">
    <motion.div
      animate={{ rotate: isHovered ? 45 : 0 }}
      transition={{ duration: 0.5 }}
      className="w-14 h-14 rounded-lg border-2 border-violet-400/50 flex items-center justify-center bg-violet-950/20"
    >
      <div className="w-7 h-7 rounded-full border border-sky-400/60 flex items-center justify-center">
        <span className="text-[10px] font-mono text-white font-bold">π</span>
      </div>
    </motion.div>
  </div>
)

// Mini Visual 7: GATE CPU Pipeline
const GateMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-28 flex items-center justify-center">
    <div className="grid grid-cols-5 gap-1 font-mono text-[9px] text-center">
      {['IF', 'ID', 'EX', 'MEM', 'WB'].map((stage, idx) => (
        <div
          key={stage}
          className={`px-1.5 py-3 rounded border transition-all ${
            isHovered
              ? 'bg-violet-600/30 border-violet-400 text-white'
              : 'bg-zinc-900 border-white/[0.06] text-zinc-400'
          }`}
          style={{ transitionDelay: `${idx * 40}ms` }}
        >
          {stage}
        </div>
      ))}
    </div>
  </div>
)

// Mini Visual 8: System Design Cache Topology
const InterviewMiniVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <div className="relative w-full h-28 flex items-center justify-center">
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 rounded bg-zinc-800 border border-white/[0.1] text-[9px] font-mono text-zinc-300">
        LB
      </div>
      <div className="w-4 h-0.5 bg-zinc-600" />
      <div
        className={`px-2 py-1 rounded border text-[9px] font-mono transition-colors ${
          isHovered ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400' : 'bg-zinc-800 border-white/[0.1] text-zinc-400'
        }`}
      >
        Redis
      </div>
      <div className="w-4 h-0.5 bg-zinc-600" />
      <div className="px-2 py-1 rounded bg-zinc-800 border border-white/[0.1] text-[9px] font-mono text-zinc-300">
        DB
      </div>
    </div>
  </div>
)

export const BentoCurriculumSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const renderVisual = (type: BentoItem['visualType'], isHovered: boolean) => {
    switch (type) {
      case 'dsa':
        return <DSAMiniVisual isHovered={isHovered} />
      case 'react':
        return <ReactMiniVisual isHovered={isHovered} />
      case 'nodejs':
        return <NodeMiniVisual isHovered={isHovered} />
      case 'ai':
        return <AIMiniVisual isHovered={isHovered} />
      case 'dbms':
        return <DBMSMiniVisual isHovered={isHovered} />
      case 'aptitude':
        return <AptitudeMiniVisual isHovered={isHovered} />
      case 'gate':
        return <GateMiniVisual isHovered={isHovered} />
      case 'interview':
        return <InterviewMiniVisual isHovered={isHovered} />
      default:
        return null
    }
  }

  return (
    <section id="bento" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="COMPREHENSIVE VISUAL CURRICULUM"
        title="One platform."
        highlight="Infinite things to learn."
        subtitle="Explore our meticulously crafted visual curriculum spanning computer science, software architecture, mathematics, and high-stakes competitive examinations."
      />

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {BENTO_ITEMS.map((item) => {
          const isHovered = hoveredCard === item.id

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 group border cursor-pointer ${
                item.colSpan
              } ${
                isHovered
                  ? 'bg-zinc-900/80 border-violet-500/40 shadow-[0_16px_40px_-10px_rgba(139,92,246,0.2)]'
                  : 'bg-[#0B0B10]/70 border-white/[0.07] hover:border-white/[0.15]'
              }`}
            >
              {/* Background gradient reactive to hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Card Top: Tag + Category + Arrow */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 font-bold px-2.5 py-0.5 rounded bg-violet-950/40 border border-violet-500/30">
                    {item.tag}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium hidden sm:inline-block">
                    {item.category}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-white/[0.03] group-hover:bg-violet-600/20 border border-white/[0.06] group-hover:border-violet-500/40 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Center: Dynamic Animated Visual Component */}
              <div className="relative z-10 my-2">
                {renderVisual(item.visualType, isHovered)}
              </div>

              {/* Card Bottom: Title & Description */}
              <div className="relative z-10 mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>

                {item.metrics && (
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 group-hover:text-violet-300/80 transition-colors">
                    <span>{item.metrics}</span>
                    <span className="text-zinc-600 group-hover:text-zinc-400">Explore →</span>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
