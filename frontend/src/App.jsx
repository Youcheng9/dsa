import './App.css'

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Linked List', href: '#linked-list' },
  { label: 'Patterns', href: '#patterns' },
  { label: 'Cheatsheet', href: '#cheatsheet' },
  { label: 'Templates', href: '#templates' },
]

const roadmap = [
  {
    title: 'Core structures',
    focus: 'Arrays, strings, hash maps, stacks, queues, linked lists',
    signal: 'Learn access pattern, insertion cost, and when order matters.',
  },
  {
    title: 'Trees and graphs',
    focus: 'Binary trees, BSTs, heaps, tries, adjacency lists',
    signal: 'Practice traversal first. Most tree and graph problems reduce to visiting nodes cleanly.',
  },
  {
    title: 'Algorithm patterns',
    focus: 'Two pointers, sliding window, binary search, recursion, backtracking',
    signal: 'Solve by pattern recognition before memorizing solutions.',
  },
  {
    title: 'Optimization tools',
    focus: 'Greedy, dynamic programming, union-find, monotonic stack',
    signal: 'Use when brute force repeats work or when local structure gives leverage.',
  },
]

const patterns = [
  {
    name: 'Two pointers',
    use: 'Sorted arrays, pair sums, palindrome checks, partitioning',
    prompt: 'Can I move one pointer from each side and shrink the search space?',
  },
  {
    name: 'Sliding window',
    use: 'Subarray, substring, longest/shortest range with a condition',
    prompt: 'Can I maintain a valid window instead of recomputing every range?',
  },
  {
    name: 'Binary search',
    use: 'Sorted data or monotonic answer space',
    prompt: 'If X works, do all larger or smaller values also work?',
  },
  {
    name: 'DFS / backtracking',
    use: 'Permutations, combinations, paths, decision trees',
    prompt: 'Do I need to try choices, recurse, then undo state?',
  },
  {
    name: 'BFS',
    use: 'Shortest path in unweighted graphs, level-order traversal',
    prompt: 'Do I need the minimum number of steps or level grouping?',
  },
  {
    name: 'Dynamic programming',
    use: 'Overlapping subproblems with optimal substructure',
    prompt: 'What state fully describes the subproblem and recurrence?',
  },
]

const linkedListCopyNotes = [
  {
    title: 'Shallow copy',
    summary:
      'A shallow copy only copies the reference to the head node, so both variables still point to the same linked list.',
    syntax: `const copy = head
copy.value = 99
// head.value is also 99`,
  },
  {
    title: 'Deep copy',
    summary:
      'A deep copy creates a brand-new node for every original node and reconnects the next pointers in the same order.',
    syntax: `function deepCopy(head) {
  if (!head) return null

  const newHead = { value: head.value, next: null }
  let currentOld = head.next
  let currentNew = newHead

  while (currentOld) {
    currentNew.next = { value: currentOld.value, next: null }
    currentOld = currentOld.next
    currentNew = currentNew.next
  }

  return newHead
}`,
  },
]

const linkedListRules = [
  'Assignment like `copy = head` does not clone nodes. It only copies the pointer/reference.',
  'In a deep copy, each new node must be distinct from the original node in memory.',
  'Preserve the exact next-chain order from the source list.',
  'Handle `null`, single-node lists, and the last node with `next = null` correctly.',
  'If the problem includes extra pointers such as `random`, use a mapping step so those links also point to copied nodes.',
]

const cheatsheet = [
  {
    topic: 'Array',
    strengths: 'O(1) access, cache-friendly, best default structure',
    tradeoffs: 'Mid insert/delete is O(n)',
    ops: 'Access O(1) | Search O(n) | Append amortized O(1)',
  },
  {
    topic: 'Hash map / set',
    strengths: 'Average O(1) lookup, membership, counting',
    tradeoffs: 'No ordering guarantee by default reasoning',
    ops: 'Insert O(1) avg | Lookup O(1) avg | Delete O(1) avg',
  },
  {
    topic: 'Linked list',
    strengths: 'O(1) insert/delete once node is known',
    tradeoffs: 'O(n) access, pointer-heavy',
    ops: 'Access O(n) | Insert head O(1) | Delete head O(1)',
  },
  {
    topic: 'Stack',
    strengths: 'LIFO, great for parsing, undo, monotonic patterns',
    tradeoffs: 'Only top is directly accessible',
    ops: 'Push O(1) | Pop O(1) | Peek O(1)',
  },
  {
    topic: 'Queue / deque',
    strengths: 'FIFO for BFS, deque for both-end operations',
    tradeoffs: 'Random access is weak',
    ops: 'Enqueue O(1) | Dequeue O(1) | Front O(1)',
  },
  {
    topic: 'Heap',
    strengths: 'Fast min/max extraction, scheduling, top-k',
    tradeoffs: 'Only root is ordered',
    ops: 'Push O(log n) | Pop O(log n) | Peek O(1)',
  },
  {
    topic: 'Binary search tree',
    strengths: 'Ordered search and range queries',
    tradeoffs: 'Can degrade without balancing',
    ops: 'Search O(log n) avg | Insert O(log n) avg',
  },
  {
    topic: 'Graph',
    strengths: 'Models networks, dependencies, routes',
    tradeoffs: 'Representation choice matters',
    ops: 'Traversal O(V + E) | Store with adjacency list',
  },
]

const templates = [
  'Traversal: choose DFS when branch-first reasoning is simpler; choose BFS for level or shortest-step questions.',
  'Binary search on answer: low = min answer, high = max answer, test feasibility at mid.',
  'DP flow: define state, write recurrence, choose memoization or tabulation, compress space if possible.',
  'Graph checklist: directed or undirected, weighted or unweighted, cyclic or acyclic, connected or disconnected.',
]

function App() {
  return (
    <main className="app-shell">
      <nav className="top-nav" aria-label="Section navigation">
        <a className="brand-mark" href="#overview">
          <span className="brand-badge" aria-hidden="true">
            &lt;/&gt;
          </span>
          <span className="brand-copy">
            <strong>DSA Desk</strong>
            <span>Concept map + cheatsheet</span>
          </span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Data Structures + Algorithms</p>
          <h1>Learn the concepts, then scan the cheatsheet fast.</h1>
          <p className="hero-text">
            This page is designed like a practice desk: start with the mental
            model, move into problem-solving patterns, then use the quick lookup
            cards when you need complexity or “when should I use this?” answers.
          </p>
        </div>
        <div className="hero-board" aria-label="DSA learning summary">
          <div className="board-chip">Access</div>
          <div className="board-chip">Traverse</div>
          <div className="board-chip">Optimize</div>
          <div className="board-chip">Prove</div>
          <div className="board-core">
            <span>Think in</span>
            <strong>patterns</strong>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Study roadmap</p>
          <h2>What to learn first</h2>
        </div>
        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article key={item.title} className="study-card">
              <h3>{item.title}</h3>
              <p className="study-focus">{item.focus}</p>
              <p>{item.signal}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="linked-list" className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Linked list concept</p>
          <h2>Shallow copy vs deep copy</h2>
        </div>
        <div className="copy-grid">
          {linkedListCopyNotes.map((item) => (
            <article key={item.title} className="copy-card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <pre className="syntax-block">
                <code>{item.syntax}</code>
              </pre>
            </article>
          ))}
        </div>
        <div className="copy-rules">
          <h3>Rules to remember</h3>
          <ul className="checklist">
            {linkedListRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="patterns" className="section-block split-layout">
        <div>
          <div className="section-heading">
            <p className="section-kicker">Problem solving</p>
            <h2>Pattern recognition guide</h2>
          </div>
          <div className="pattern-list">
            {patterns.map((pattern) => (
              <article key={pattern.name} className="pattern-card">
                <div>
                  <h3>{pattern.name}</h3>
                  <p>{pattern.use}</p>
                </div>
                <p className="pattern-prompt">{pattern.prompt}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="practice-panel">
          <p className="section-kicker">Fast checklist</p>
          <h2>Before you code</h2>
          <ul className="checklist">
            <li>State the input shape: sorted, unique, cyclic, weighted, bounded.</li>
            <li>Say the brute-force approach first, then explain the bottleneck.</li>
            <li>Pick the structure that makes the expensive step cheap.</li>
            <li>Track time and space complexity before implementation.</li>
            <li>Test edge cases: empty input, one element, duplicates, extremes.</li>
          </ul>
        </aside>
      </section>

      <section id="cheatsheet" className="section-block">
        <div className="section-heading">
          <p className="section-kicker">Cheatsheet</p>
          <h2>Quick lookup reference</h2>
        </div>
        <div className="cheatsheet-grid">
          {cheatsheet.map((item) => (
            <article key={item.topic} className="cheat-card">
              <h3>{item.topic}</h3>
              <p>
                <strong>Use for:</strong> {item.strengths}
              </p>
              <p>
                <strong>Watch out:</strong> {item.tradeoffs}
              </p>
              <p className="ops-line">{item.ops}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="templates" className="section-block notes-layout">
        <div className="template-panel">
          <div className="section-heading">
            <p className="section-kicker">Mental templates</p>
            <h2>Reusable prompts</h2>
          </div>
          <div className="template-list">
            {templates.map((template) => (
              <p key={template} className="template-item">
                {template}
              </p>
            ))}
          </div>
        </div>

        <div className="complexity-panel">
          <p className="section-kicker">Big-O memory aid</p>
          <h2>Speed ladder</h2>
          <div className="speed-scale">
            <span>O(1)</span>
            <span>O(log n)</span>
            <span>O(n)</span>
            <span>O(n log n)</span>
            <span>O(n^2)</span>
            <span>O(2^n)</span>
          </div>
          <p>
            Prefer constant or logarithmic work when possible. Linear is usually
            acceptable. Quadratic often needs justification. Exponential usually
            needs pruning, memoization, or a different formulation.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
