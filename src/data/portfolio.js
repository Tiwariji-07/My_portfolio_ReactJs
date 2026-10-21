// Resolve a file in /public against Vite's base path so assets keep working
// if the site is ever served from a sub-path (see BASE_PATH in the README).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Vivek Raj',
  first: 'Vivek',
  last: 'Raj',
  role: 'Senior Software Engineer',
  company: 'Innovapptive',
  location: 'Hyderabad, India',
  email: 'hirevivekraj@gmail.com',
  available: 'Open to building something new',
  photo: 'vivek.jpg',
  photoFallback: 'me.jpeg',
  resume: 'Vivek_Raj_Resume.pdf',
  // Big hero statement — the highlighted word gets the accent block.
  headline: ['I build', 'AI', 'that ships.'],
  subhead:
    'Senior Software Engineer at Innovapptive. I build retrieval systems, AI agents and developer tools that other engineers use every day.',
}

export const socials = {
  github: 'https://github.com/Tiwariji-07',
  linkedin: 'https://www.linkedin.com/in/vr384/',
  leetcode: 'https://leetcode.com/Tiwari_ji07/',
  x: 'https://x.com/vivekraj440551',
}

// Scrolling capability strip — high energy, low ceremony.
export const marquee = [
  'Retrieval-Augmented Generation',
  'AI Agents',
  'Model Context Protocol',
  'Generative UI',
  'Vector Search',
  'FastAPI',
  'LangGraph',
  'React',
  'Developer Tooling',
  'pgvector',
]

export const about = {
  lead: "I like problems that don't have a known answer yet.",
  paragraphs: [
    'I started out building web pages and REST endpoints. Now I build AI systems that run in production: RAG over several sources, agents that call real tools, and the retrieval, ranking and evaluation work that keeps their answers correct.',
    "I'm a Senior Software Engineer at Innovapptive. Before that I spent close to four years at Wavemaker. There I led the RAG platform that internal developer tools use to answer questions, and built a generative UI app where one screen replaced more than 1000 static ones.",
    'Outside work I run marathons, practise on LeetCode and enter hackathons.',
  ],
  // woven-in skills, grouped but compact
  toolkit: [
    { k: 'AI / LLM', v: 'RAG · Agents · MCP · Evals · LiteLLM · Langfuse' },
    { k: 'Backend', v: 'Python · FastAPI · LangGraph · Spring · Node' },
    { k: 'Frontend', v: 'React · React Native · TypeScript' },
    { k: 'Data', v: 'Postgres · pgvector (HNSW) · MongoDB · Redis' },
    { k: 'Tooling', v: 'Git · Docker · Jenkins · Swagger · Storybook' },
  ],
}

// Compact trajectory — not a bullet dump.
export const experience = [
  { role: 'Senior Software Engineer', company: 'Innovapptive', period: "'26 to now" },
  { role: 'Software Development Engineer', company: 'Wavemaker', period: "'25 to '26" },
  { role: 'Associate Software Engineer', company: 'Wavemaker', period: "'23 to '25" },
  { role: 'Web Developer Intern', company: 'Wavemaker', period: "'23" },
]

export const projects = [
  {
    title: 'Ecosystem Agent & Docs MCP',
    blurb:
      "One search-and-answer service over WaveMaker's Docs, Academy, Storybook and Marketplace. It merges the results from each source with Reciprocal Rank Fusion and streams answers that cite their sources.",
    tags: ['Python', 'FastAPI', 'LangGraph', 'pgvector', 'MCP'],
    year: '2026',
    links: [
       { label: 'Live', href: 'https://docs.wavemaker.ai/' },
    ],
  },
  {
    title: 'TS Agent Bench',
    blurb:
      'A reproducible benchmark for coding agents on real TypeScript maintenance tasks. Agents never see the solution or the hidden checks. Each run can go in a Docker container with no network access, and every report includes bootstrap confidence intervals.',
    tags: ['TypeScript', 'Evals', 'Docker', 'Agents'],
    year: '2026',
    links: [
      { label: 'Source', href: 'https://github.com/Tiwariji-07/ts-agent-bench' },
    ],
  },
  {
    title: 'Support Concierge',
    blurb:
      'Multi-agent triage for support tickets. For each ticket it decides whether to answer on its own, draft an answer for a person to approve, or hand the ticket to a person, and it logs every decision. In the live run it routed 15 of 18 tickets the same way as the golden set and never automated a ticket that needed a human.',
    tags: ['Python', 'Claude', 'LiteLLM', 'LangSmith'],
    year: '2026',
    links: [
      { label: 'Source', href: 'https://github.com/Tiwariji-07/support-concierge-triage' },
    ],
  },
  {
    title: 'AI UI Arena',
    blurb:
      'Gives several AI models the same design brief and shows the pages they build side by side. Each model runs twice, once on its own and once with a design skill loaded.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Gen UI'],
    year: '2026',
    links: [
      { label: 'Live', href: 'https://ai-ui-arena.vercel.app' },
      { label: 'Source', href: 'https://github.com/Tiwariji-07/ai-ui-arena' },
    ],
  },
  {
    title: 'Generative UI Platform',
    blurb:
      'AI agents build tables, charts and lists from a prompt. One screen replaced more than 1000 static screens and cut build effort by about 95%.',
    tags: ['Agents', 'Gen UI', 'React', 'LLM'],
    year: '2025',
    links: [
    ],
  },
]

export const achievements = [
  { text: 'MongoDB Developer Toolkit certificate', href: 'https://www.geeksforgeeks.org/certificate/649ea5117dbae94e35b1ed66bb1de99d' },
  { text: 'LeetCode peak rating 1469, 100+ problems solved', href: 'https://leetcode.com/Tiwari_ji07/' },
  { text: 'B.Tech in Computer Science, MRCET, CGPA 8.38', href: null },
  { text: '100xDevs Solana Mini Hackathon', href: null },
]

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_b8myste',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v8r2yj3',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'vMqWoS2hNXjKooAUI',
}

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]
