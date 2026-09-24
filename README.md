# SPITY — The Visual Learning Platform

> **"Learn. Build. Become."**  
> *"Don't memorize what you can understand."* • *"Complex ideas. Made visual."*

SPITY is a next-generation visual learning platform designed to teach difficult computer science, software engineering, and competitive examination concepts through interactive visual storytelling, spatial state machines, and real-time simulations instead of passive, boring lectures.

---

## ⚡ Core Highlights & Interactive Demonstrations

- **Interactive 3D Knowledge Network (Three.js)**: Real-time particle and connection network in WebGL responding to cursor proximity and physics.
- **"See it. Don't just read it." (Binary Search Visualizer)**: Interactive step-by-step algorithm visualizer with dynamic target picking, midpoint tracking, and space-halving $O(\log n)$ telemetry.
- **"Animation isn't decoration. It's the lesson." (HTTP Request Lifecycle)**: 5-node circuit pipeline simulating browser requests across DNS, CDN, Node.js edge, and PostgreSQL query execution.
- **Asymmetric Bento Curriculum Grid**: Custom interactive mini-visuals for DSA (Tree Traversal), React (Virtual DOM / Fiber), Node.js (Event Loop), AI / ML (Neural Synapse Weights), DBMS (Relational Joins), Aptitude, and GATE CS (CPU Pipeline).
- **Structured Career Paths**: 5-stage milestone pipelines from foundational beginner to staff-level engineering and competitive exams.
- **Interactive Technical Practice Console**: Real-time challenge runner with live countdown timer, accuracy & streak tracking, progressive hint disclosure, and instant conceptual invariant feedback.
- **Mastery Telemetry Dashboard**: Animated SVG Skill Radar matrix evaluating DSA, React, Systems, AI/ML, DBMS, and GATE alongside a 12-week consistency velocity heatmap.
- **Precision Dark UI & Fluid Motion**: Dark obsidian palette (`#050505`), custom spring-physics magnetic cursor, smart-hiding glassmorphic navbar, and smooth inertia scrolling via Lenis + GSAP.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D & Graphics**: [Three.js](https://threejs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm / yarn

### 2. Installation
```bash
git clone https://github.com/dakshgupta-26/SPITY.git
cd SPITY
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 📁 Project Architecture

```
src/
├── animations/         # Framer Motion spring physics & transition variants
├── components/
│   ├── common/         # MagneticButton, SectionHeader, GlowBadge, CustomCursor, AmbientBackground
│   ├── footer/         # Tech startup footer with links and social channels
│   ├── navbar/         # Smart-hiding sticky glassmorphic navbar & mobile drawer
│   └── three/          # High-performance Three.js KnowledgeNetworkScene
├── data/               # Bento curriculum, learning paths, practice questions, community feedback
├── hooks/              # useLenis, useMousePosition, useScrollDirection
├── sections/           # Modular landing page sections (Hero, Problem, Demo, Bento, Paths, Practice, etc.)
├── utils/              # Class merging utilities (cn)
├── App.tsx             # Root page assembler
└── index.css           # Design system tokens and atmospheric styles
```

---

## 📄 License

MIT © 2026 SPITY Technologies Inc.
