export interface PathStage {
  phase: string
  title: string
  topics: string[]
  visualAsset: string
}

export interface LearningPath {
  id: string
  title: string
  role: string
  badge: string
  description: string
  estimatedWeeks: string
  completionRate: string
  stages: PathStage[]
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture Engineer',
    role: 'Staff UI / Frontend Specialist',
    badge: 'FLAGSHIP PATH',
    description: 'From JavaScript memory semantics and browser rendering engines to reactive state trees, Next.js App Router, and WebGL.',
    estimatedWeeks: '16 Weeks',
    completionRate: '94% Milestone Rate',
    stages: [
      {
        phase: '01. Beginner',
        title: 'DOM Engine & JS Internals',
        topics: ['Event Loop & Microtasks', 'Closures & Scope Chain', 'CSS Layout Box Model & Flexbox'],
        visualAsset: 'Rendering Pipeline',
      },
      {
        phase: '02. Intermediate',
        title: 'React Fiber & Reactive State',
        topics: ['Concurrent Mode', 'Hooks Architecture', 'Zustand & Server State'],
        visualAsset: 'Fiber Tree Diffing',
      },
      {
        phase: '03. Advanced',
        title: 'Performance & Optimization',
        topics: ['Hydration & Streaming SSR', 'Bundle Splitting', 'Web Vitals & FPS Profiling'],
        visualAsset: 'Flamegraph Visualizer',
      },
      {
        phase: '04. Projects',
        title: 'Production Scale Systems',
        topics: ['Figma-like Canvas Tool', 'Real-time Collaborative Code Editor', 'Design System'],
        visualAsset: 'Live Interactive Canvas',
      },
      {
        phase: '05. Interview',
        title: 'Frontend System Design',
        topics: ['Virtual List Optimization', 'Offline-First Sync Engine', 'Security & Microfrontends'],
        visualAsset: 'System Architecture Board',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Distributed Systems & Backend',
    role: 'Backend / Infrastructure Engineer',
    badge: 'HIGH DEMAND',
    description: 'Master high-throughput APIs, message queues, Raft consensus, database indexing, and microservice resilience.',
    estimatedWeeks: '20 Weeks',
    completionRate: '91% Milestone Rate',
    stages: [
      {
        phase: '01. Beginner',
        title: 'Networks & Protocols',
        topics: ['TCP/IP 3-Way Handshake', 'HTTP/2 & HTTP/3 QUIC', 'DNS Resolution & Sockets'],
        visualAsset: 'Packet Flow Graph',
      },
      {
        phase: '02. Intermediate',
        title: 'Data Stores & Querying',
        topics: ['B-Tree Indexing in PostgreSQL', 'Redis In-Memory Caching', 'ACID Transactions & MVCC'],
        visualAsset: 'B-Tree Explorer',
      },
      {
        phase: '03. Advanced',
        title: 'Event-Driven Architectures',
        topics: ['Kafka Partitions & Offsets', 'Idempotency & Sagas', 'Rate Limiting Algorithms'],
        visualAsset: 'Kafka Stream Flow',
      },
      {
        phase: '04. Projects',
        title: 'High-Volume Systems',
        topics: ['Distributed URL Shortener', 'Real-time Financial Ledger', 'Video Transcoding Pipeline'],
        visualAsset: 'Multi-Region Topology',
      },
      {
        phase: '05. Interview',
        title: 'Scale & Reliability',
        topics: ['Consistent Hashing', 'CAP Theorem Tradeoffs', 'Chaos Engineering & Failover'],
        visualAsset: 'Ring Partitioning Simulation',
      },
    ],
  },
  {
    id: 'dsa',
    title: 'DSA & Algorithmic Intuition',
    role: 'Algorithmic Problem Solver',
    badge: 'CORE FOUNDATION',
    description: 'Never memorize LeetCode patterns again. Build geometric, visual representations of trees, graphs, and dynamic programming.',
    estimatedWeeks: '14 Weeks',
    completionRate: '96% Milestone Rate',
    stages: [
      {
        phase: '01. Beginner',
        title: 'Arrays & Two Pointers',
        topics: ['Sliding Window Dynamic Range', 'Binary Search Invariants', 'Linked List Cycle Detection'],
        visualAsset: 'Step-by-Step Pointers',
      },
      {
        phase: '02. Intermediate',
        title: 'Trees & Heaps',
        topics: ['Binary Search Tree Rebalancing', 'Trie Prefix Search', 'Min-Heap Priority Sift Up/Down'],
        visualAsset: 'Self-Balancing AVL/Red-Black',
      },
      {
        phase: '03. Advanced',
        title: 'Graphs & Disjoint Sets',
        topics: ['Dijkstra & A* Pathfinding', 'Kruskal & Prim MST', 'Topological Sort & Tarjan SCC'],
        visualAsset: 'Graph Traversal Wavefront',
      },
      {
        phase: '04. Projects',
        title: 'Complex Optimization',
        topics: ['Dynamic Programming State Matrices', 'Bitmask DP', 'Segment Trees & Lazy Propagation'],
        visualAsset: 'DP 2D Memory Grid',
      },
      {
        phase: '05. Interview',
        title: 'FAANG / Tier-1 Rounds',
        topics: ['Hard Backtracking & Pruning', 'Monotonic Stack/Queue', 'Live Visual Mock Walkthroughs'],
        visualAsset: 'Complexity Bounds Radar',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI Engineering & Deep Learning',
    role: 'Applied AI & ML Systems Engineer',
    badge: 'NEXT GENERATION',
    description: 'Step inside LLMs, embeddings, transformer self-attention matrices, vector databases, and fine-tuning pipelines.',
    estimatedWeeks: '18 Weeks',
    completionRate: '89% Milestone Rate',
    stages: [
      {
        phase: '01. Beginner',
        title: 'Linear Algebra & Calculus',
        topics: ['Matrix Transforms as Spaces', 'Gradients & Vector Fields', 'Probability Distributions'],
        visualAsset: '3D Hyperplane Vector Space',
      },
      {
        phase: '02. Intermediate',
        title: 'Neural Networks from Scratch',
        topics: ['Perceptrons to MLPs', 'Backpropagation Chain Rule', 'Loss Surfaces & Adam Optimizer'],
        visualAsset: 'Gradient Descent Flow',
      },
      {
        phase: '03. Advanced',
        title: 'Transformers & Attention',
        topics: ['Multi-Head Self Attention', 'Positional Encodings', 'KV Caching in Inference'],
        visualAsset: 'Attention Heatmap Matrix',
      },
      {
        phase: '04. Projects',
        title: 'GenAI & RAG Systems',
        topics: ['Hybrid Vector Search', 'Agentic ReAct Workflows', 'LoRA Fine-tuning Visualizer'],
        visualAsset: 'RAG Pipeline Topology',
      },
      {
        phase: '05. Interview',
        title: 'ML System Design',
        topics: ['Recommendation Engines', 'Low-Latency Serving', 'Quantization (AWQ/GPTQ)'],
        visualAsset: 'Inference Bottleneck Profiler',
      },
    ],
  },
  {
    id: 'competitive',
    title: 'GATE & Core Computer Science',
    role: 'GATE CS / PSU / Research Specialist',
    badge: 'EXAM EXCELLENCE',
    description: 'Transform theoretical CS into clear architectural diagrams: CPU pipelining, cache coherency, OS scheduling, and compilers.',
    estimatedWeeks: '24 Weeks',
    completionRate: '93% Milestone Rate',
    stages: [
      {
        phase: '01. Beginner',
        title: 'Digital Logic & Architecture',
        topics: ['Boolean Minimization Karnaugh Maps', 'ALU Design & Carry Lookahead', 'Addressing Modes'],
        visualAsset: 'Logic Gate Simulator',
      },
      {
        phase: '02. Intermediate',
        title: 'Operating Systems & Concurrency',
        topics: ['Virtual Memory & Page Replacement', 'Semaphores & Banker Algorithm', 'Process Scheduling (Round Robin)'],
        visualAsset: 'Virtual Memory Paging Map',
      },
      {
        phase: '03. Advanced',
        title: 'Theory of Computation & Compiler',
        topics: ['DFA / NFA State Transitions', 'Pumping Lemma & Turing Machines', 'LR(1) / LALR Parser Tables'],
        visualAsset: 'Automata Transition Graph',
      },
      {
        phase: '04. Projects',
        title: 'System Synthesis & Practice',
        topics: ['Cache Memory (Direct, Set Associative)', 'Pipeline Hazards (RAW, WAR, Structural)', 'Subnetting & Sliding Window Protocols'],
        visualAsset: 'Pipeline Cycle Chart',
      },
      {
        phase: '05. Interview',
        title: 'Rank 1–100 Strategies',
        topics: ['Negative Marking Elimination', 'Time-Pressure Speed Drills', 'Previous 15-Year Pattern Matrix'],
        visualAsset: 'Exam Mastery Matrix',
      },
    ],
  },
]
