export interface CommunityPost {
  id: string
  handle: string
  avatarColor: string
  role: string
  conceptTag: string
  timeAgo: string
  title: string
  message: string
  insight: string
  visualLabel: string
  upvotes: number
}

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'comm-1',
    handle: '@aarav_codes',
    avatarColor: 'from-violet-500 to-indigo-600',
    role: 'Computer Engineering Student',
    conceptTag: 'Binary Search Invariants',
    timeAgo: '14m ago',
    title: 'Finally understood Binary Search boundary conditions!',
    message: 'I spent 2 years memorizing whether to use while(left <= right) or while(left < right). The SPITY visualizer showing the shrinking window and monotonic invariant made it click in literally 3 minutes.',
    insight: 'Invariant: target always lies strictly within [left, right] inclusive.',
    visualLabel: 'Window Shrink Visualized',
    upvotes: 184,
  },
  {
    id: 'comm-2',
    handle: '@maya_dev',
    avatarColor: 'from-sky-500 to-blue-600',
    role: 'Frontend Developer',
    conceptTag: 'React Fiber Tree',
    timeAgo: '42m ago',
    title: 'React reconciliation finally makes structural sense.',
    message: 'Textbooks talk about "workInProgress" and "current" trees, but seeing the visual linked list pointer traverse child → sibling → return was the eureka moment. No more mystery re-renders.',
    insight: 'React Fiber is literally a singly linked list traversal with interruptible yielding.',
    visualLabel: 'Fiber Tree Traversal',
    upvotes: 247,
  },
  {
    id: 'comm-3',
    handle: '@rohan_gate',
    avatarColor: 'from-emerald-500 to-teal-600',
    role: 'GATE CS Aspirant',
    conceptTag: 'CPU Pipelining & RAW Hazards',
    timeAgo: '2h ago',
    title: 'Solved my first complex pipeline forwarding problem with zero formulas.',
    message: 'Instead of memorizing clock cycle tables, the animated pipeline stage diagram showed exactly when the operand is written to register in WB and forwarded back to EX. Scored 100% on the drill.',
    insight: 'Data hazards are resolved in hardware before operands enter the ALU execution stage.',
    visualLabel: 'Cycle-by-Cycle Forwarding',
    upvotes: 312,
  },
  {
    id: 'comm-4',
    handle: '@priya_ml',
    avatarColor: 'from-purple-500 to-pink-600',
    role: 'Self-taught ML Engineer',
    conceptTag: 'Transformer Attention Matrix',
    timeAgo: '5h ago',
    title: 'Query, Key, and Value vectors aren’t abstract math anymore.',
    message: 'The interactive 3D dot product heatmap where you drag tokens and see weights highlight connected context cleared months of confusion. This is how neural networks should be taught.',
    insight: 'Attention is simply a dynamic weighted lookup over value embeddings using query-key affinity.',
    visualLabel: 'Scaled Dot-Product Heatmap',
    upvotes: 429,
  },
]
