import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Wifi, Server, Database, CheckCircle, ArrowRight, Play, RefreshCw } from 'lucide-react'
import { SectionHeader } from '../components/common/SectionHeader'

interface ProtocolStage {
  id: string
  title: string
  subtitle: string
  icon: any
  status: string
  detail: string
  packetData: string
}

const STAGES: ProtocolStage[] = [
  {
    id: 'browser',
    title: 'Client Browser',
    subtitle: 'User Action Triggered',
    icon: Globe,
    status: 'GET /api/v1/profile',
    detail: 'DOM events emit fetch request; headers attach Bearer token and Accept: application/json.',
    packetData: 'Header: Bearer eyJhbGciOi...',
  },
  {
    id: 'internet',
    title: 'Internet & Edge CDN',
    subtitle: 'DNS & TLS Handshake',
    icon: Wifi,
    status: 'DNS resolved 104.21.3.1',
    detail: 'Encrypted packets route across fiber backbones via BGP routing and TLS 1.3 key exchange.',
    packetData: 'Packet: TLS 1.3 Cipher Suite',
  },
  {
    id: 'server',
    title: 'Application Server',
    subtitle: 'Node.js & Event Loop',
    icon: Server,
    status: 'Router matched /profile',
    detail: 'Reverse proxy forwards socket to cluster worker; middleware verifies JWT and invokes handler.',
    packetData: 'Worker PID: 4291',
  },
  {
    id: 'database',
    title: 'Database Cluster',
    subtitle: 'PostgreSQL Index Scan',
    icon: Database,
    status: 'Query executed in 4.2ms',
    detail: 'B-Tree index locates user record by primary key; row deserializes into JSON payload.',
    packetData: 'SELECT * FROM users WHERE id=...',
  },
  {
    id: 'response',
    title: 'Response Delivered',
    subtitle: 'HTTP 200 OK',
    icon: CheckCircle,
    status: 'DOM Re-rendered (60fps)',
    detail: 'Browser decompresses payload, updates React fiber state, and repaints user profile view.',
    packetData: '{ "id": 104, "name": "Daksh" }',
  },
]

export const VisualLessonSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0)
  const [isRunning, setIsRunning] = useState<boolean>(true)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [isRunning])

  const currentStage = STAGES[activeStageIndex]

  return (
    <section id="visual-lesson" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[450px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionHeader
        badge="WHY ANIMATION MATTERS"
        title="Animation isn't decoration."
        highlight="It's the lesson."
        subtitle="Static textbooks describe architecture with abstract paragraphs. SPITY makes invisible data flows visible, so you build an intuitive mental model that never fades."
      />

      {/* Main Visual Experience Card */}
      <div className="rounded-3xl bg-[#09090D] border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl">
        {/* Interactive Step Navigator */}
        <div className="p-4 sm:p-6 border-b border-white/[0.06] bg-zinc-950/70 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-violet-400 font-semibold uppercase tracking-wider">
              PROTOCOL SIMULATION:
            </span>
            <span className="text-xs font-mono text-zinc-300">
              HTTP_REQUEST_LIFECYCLE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-white/[0.08] transition-colors"
            >
              {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin text-violet-400" /> : <Play className="w-3.5 h-3.5 text-violet-400" />}
              <span>{isRunning ? 'Auto-Cycle Active' : 'Resume Animation'}</span>
            </button>
          </div>
        </div>

        {/* 5-Node Circuit Stage Pipeline */}
        <div className="p-6 sm:p-12">
          {/* Progress Path */}
          <div className="relative mb-12">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-zinc-800 hidden sm:block" />

            {/* Glowing Traveling Data Packet */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_16px_#a78bfa] z-10 hidden sm:block pointer-events-none"
              animate={{
                left: `${(activeStageIndex / (STAGES.length - 1)) * 96 + 2}%`,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Nodes */}
            <div className="relative grid grid-cols-1 sm:grid-cols-5 gap-4 z-0">
              {STAGES.map((stage, idx) => {
                const IconComponent = stage.icon
                const isActive = activeStageIndex === idx
                const isPassed = activeStageIndex > idx

                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setActiveStageIndex(idx)
                      setIsRunning(false)
                    }}
                    className={`relative p-4 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-violet-950/40 border border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.25)]'
                        : isPassed
                        ? 'bg-zinc-900/60 border border-white/[0.1] text-zinc-300'
                        : 'bg-zinc-950/50 border border-white/[0.04] text-zinc-500 hover:border-white/[0.1]'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                        isActive
                          ? 'bg-violet-600 text-white shadow-md'
                          : isPassed
                          ? 'bg-zinc-800 text-violet-300'
                          : 'bg-zinc-900 text-zinc-600'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-mono font-bold uppercase tracking-wider mb-1 text-white">
                      {stage.title}
                    </span>
                    <span className="text-[11px] text-zinc-400 leading-tight">
                      {stage.subtitle}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Deep Inspection Panel for Active Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              {/* Left Column: Stage Detail */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-violet-600/20 text-violet-300 border border-violet-500/30">
                    STAGE 0{activeStageIndex + 1}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    STATUS: {currentStage.status}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {currentStage.title}: {currentStage.subtitle}
                </h4>

                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {currentStage.detail}
                </p>
              </div>

              {/* Right Column: Code & Wire Packet Telemetry */}
              <div className="lg:col-span-5 bg-black/60 rounded-xl p-4 border border-white/[0.06] font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-zinc-500 text-[10px]">
                  <span>PACKET INSPECTOR</span>
                  <span>SIZE: 384B</span>
                </div>
                <div className="text-emerald-400 mb-1">
                  ❯ {currentStage.packetData}
                </div>
                <div className="text-zinc-500 text-[11px]">
                  Latency contribution: ~{12 + activeStageIndex * 8}ms
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Breakthrough Transformation Moment */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-violet-950/30 via-indigo-950/20 to-zinc-950/30 border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400 shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Now you understand it.
                </h4>
                <p className="text-xs text-zinc-400">
                  No memorizing RFC specs. You watched the packet traverse the wire.
                </p>
              </div>
            </div>

            <a
              href="#bento"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 px-4 py-2.5 rounded-xl shadow-md transition-colors"
            >
              <span>Explore All Visual Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
