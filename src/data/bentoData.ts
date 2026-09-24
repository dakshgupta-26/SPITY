export interface BentoItem {
  id: string
  title: string
  tag: string
  category: string
  description: string
  colSpan: string
  visualType: 'dsa' | 'react' | 'nodejs' | 'ai' | 'dbms' | 'aptitude' | 'gate' | 'interview'
  badgeText: string
  metrics?: string
}

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    tag: 'FOUNDATIONAL',
    category: 'Computer Science',
    description: 'Master trees, graphs, dynamic programming, and heaps through animated step-by-step state transformations rather than static pseudo-code.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    visualType: 'dsa',
    badgeText: '320+ Visual Problems',
    metrics: 'O(1) to O(2ⁿ) mapped visually',
  },
  {
    id: 'react',
    title: 'React & Modern Frontend',
    tag: 'FRAMEWORKS',
    category: 'Web Engineering',
    description: 'Watch the Virtual DOM reconcile, hooks trigger re-renders, and component fiber trees update in real time.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    visualType: 'react',
    badgeText: 'Interactive Fiber Tree',
    metrics: 'Fiber Reconciliation',
  },
  {
    id: 'nodejs',
    title: 'Node.js & Event Loop',
    tag: 'SYSTEMS',
    category: 'Backend & Concurrency',
    description: 'Observe the libuv event loop, microtask queue, thread pool, and non-blocking I/O flow as live data streams.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    visualType: 'nodejs',
    badgeText: 'Microtask vs Macrotask',
    metrics: 'Libuv Thread Pool',
  },
  {
    id: 'ai',
    title: 'AI / ML & Deep Learning',
    tag: 'INTELLIGENCE',
    category: 'Applied AI',
    description: 'Demystify matrix dot products, backpropagation gradients, attention heads, and transformer latents with 3D tensor views.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    visualType: 'ai',
    badgeText: 'Neural Flow Visualizer',
    metrics: 'Transformer Attention',
  },
  {
    id: 'dbms',
    title: 'DBMS & Query Execution',
    tag: 'DATA',
    category: 'Databases',
    description: 'See B-Tree index traversal, write-ahead logs, transaction isolation anomalies, and hash joins execute under the hood.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    visualType: 'dbms',
    badgeText: 'B-Tree & Hash Joins',
    metrics: 'ACID Internals',
  },
  {
    id: 'aptitude',
    title: 'Aptitude & Spatial Reasoning',
    tag: 'LOGIC',
    category: 'Competitive Edge',
    description: 'Transform complex permutations, probability trees, work-time ratios, and visual syllogisms into intuitive mental models.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    visualType: 'aptitude',
    badgeText: 'Visual Mental Models',
    metrics: 'No Formula Rote',
  },
  {
    id: 'gate',
    title: 'GATE & Core Engineering',
    tag: 'EXAMS',
    category: 'Computer Systems',
    description: 'From pipeline hazards and cache line invalidation to subnet CIDR routing and compiler ASTs.',
    colSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
    visualType: 'gate',
    badgeText: 'Hardware to Compiler',
    metrics: 'Top 0.1% GATE Prep',
  },
  {
    id: 'interview',
    title: 'System Design & Interviews',
    tag: 'CAREER',
    category: 'Staff-Level Prep',
    description: 'Interactive distributed caching, consistent hashing rings, rate limiters, and mock live coding visual boards.',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-1',
    visualType: 'interview',
    badgeText: 'FAANG Architecture',
    metrics: 'Distributed Systems',
  },
]
