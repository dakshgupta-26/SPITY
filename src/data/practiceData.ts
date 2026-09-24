export interface PracticeQuestion {
  id: string
  category: string
  subCategory: string
  difficulty: 'EASY' | 'MEDIUM' | 'HARD'
  question: string
  codeSnippet?: string
  options: {
    id: string
    text: string
    isCorrect: boolean
    explanation: string
  }[]
  hint: string
  conceptPrinciple: string
}

export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 'pq-1',
    category: 'Algorithms',
    subCategory: 'Binary Search Invariants',
    difficulty: 'MEDIUM',
    question: 'In a rotated sorted array with no duplicates [4, 5, 6, 7, 0, 1, 2], which condition GUARANTEES that the right half is sorted?',
    codeSnippet: `// Given array arr, left index L, mid index M, right index R
function checkRightHalfSorted(arr, L, M, R) {
  // Which condition invariant is strictly true?
  return ???;
}`,
    options: [
      {
        id: 'A',
        text: 'arr[M] < arr[R]',
        isCorrect: true,
        explanation: 'Correct! If arr[M] < arr[R], the inflection pivot point cannot be in the range [M, R]. Hence, the right half is monotonically increasing and strictly sorted.',
      },
      {
        id: 'B',
        text: 'arr[M] > arr[L]',
        isCorrect: false,
        explanation: 'arr[M] > arr[L] proves the left half is sorted, not the right half.',
      },
      {
        id: 'C',
        text: 'arr[M] < target',
        isCorrect: false,
        explanation: 'The target value does not define the structural sortedness of subarray boundaries.',
      },
      {
        id: 'D',
        text: 'arr[L] < arr[R]',
        isCorrect: false,
        explanation: 'If arr[L] < arr[R], the entire array is unrotated, but this does not isolate the right subsegment invariant when rotated.',
      },
    ],
    hint: 'Think about where the single rotation point (inflection drop) can lie relative to the midpoint and endpoint.',
    conceptPrinciple: 'Binary search works on monotonic invariants, not just strictly sorted arrays.',
  },
  {
    id: 'pq-2',
    category: 'React Architecture',
    subCategory: 'Fiber Reconciliation',
    difficulty: 'HARD',
    question: 'During concurrent React rendering, what happens when a state transition is wrapped in startTransition() while a high-priority user keystroke arrives?',
    codeSnippet: `const [query, setQuery] = useState('');
const handleInput = (e) => {
  setQuery(e.target.value); // Urgent
  startTransition(() => {
    setFilter(e.target.value); // Non-urgent transition
  });
};`,
    options: [
      {
        id: 'A',
        text: 'The transition work is aborted immediately and its DOM mutations are rolled back cleanly from memory',
        isCorrect: false,
        explanation: 'No DOM mutations occurred yet; React renders in-memory fibers first before the commit phase.',
      },
      {
        id: 'B',
        text: 'React yields execution to the main thread, renders the keystroke immediately, and discards or resumes stale fiber work',
        isCorrect: true,
        explanation: 'Spot on! React 18+ uses cooperative scheduling. It interrupts the low-priority work-in-progress fiber tree without touching the DOM, renders the urgent keystroke, then restarts or resumes with fresh state.',
      },
      {
        id: 'C',
        text: 'Both updates are synchronous batch processed together in a single microtask',
        isCorrect: false,
        explanation: 'startTransition explicitly decouples urgent updates from transition updates to avoid locking the UI thread.',
      },
      {
        id: 'D',
        text: 'The browser worker thread handles the transition in a separate parallel process',
        isCorrect: false,
        explanation: 'React concurrent mode runs on the single JavaScript UI thread via time-slicing (scheduler message channel).',
      },
    ],
    hint: 'Remember that React divides rendering into a render phase (interruptible, pure calculation) and a commit phase (synchronous DOM mutation).',
    conceptPrinciple: 'Time-slicing decouples user responsiveness from heavy visual updates.',
  },
  {
    id: 'pq-3',
    category: 'System Design',
    subCategory: 'Distributed Caching',
    difficulty: 'MEDIUM',
    question: 'When a cache key expires for a viral item with 50,000 requests/sec, what architectural pattern prevents cache stampede (thundering herd)?',
    codeSnippet: `// 50,000 req/sec hitting expired cache key 'viral:post:9021'
async function getPost(id) {
  let val = await cache.get(id);
  if (!val) {
    // Problem: 50,000 concurrent DB queries crash PostgreSQL
    val = await db.fetch(id);
    await cache.set(id, val, 300);
  }
  return val;
}`,
    options: [
      {
        id: 'A',
        text: 'Probabilistic early expiration (XFetch) or distributed mutex lock around DB fetch',
        isCorrect: true,
        explanation: 'Exactly right. Either a single worker acquires a distributed lock while others wait/serve stale data, or the cache computes background refresh before expiration based on read density.',
      },
      {
        id: 'B',
        text: 'Increase PostgreSQL connection pool size to 50,000 concurrent sockets',
        isCorrect: false,
        explanation: 'This exhausts database memory and causes catastrophic connection thrashing and cascading crashes.',
      },
      {
        id: 'C',
        text: 'Disable TTL completely and manually purge via Webhook on every write',
        isCorrect: false,
        explanation: 'Does not solve eventual consistency under partitions and memory saturation for viral workloads.',
      },
      {
        id: 'D',
        text: 'Switch from Redis to Memcached',
        isCorrect: false,
        explanation: 'The underlying cache engine does not prevent concurrent query propagation to the source of truth.',
      },
    ],
    hint: 'Only one request needs to compute or fetch the updated data while concurrent readers are protected.',
    conceptPrinciple: 'Protect the source of truth with concurrency coalescing and defensive caching.',
  },
]
