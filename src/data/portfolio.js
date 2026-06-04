// Resolve a file in /public against Vite's base path so assets work both
// locally (base "/") and on GitHub Pages (base "/My_portfolio_ReactJs/").
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Vivek Raj',
  first: 'Vivek',
  last: 'Raj',
  role: 'Software Development Engineer',
  company: 'Wavemaker',
  location: 'Hyderabad, India',
  email: 'hirevivekraj@gmail.com',
  phone: '+91 63041 44730',
  available: 'Open to building something new',
  photo: 'vivek.jpg',
  photoFallback: 'me.jpeg',
  resume: 'Vivek_Raj_Resume.pdf',
  // Big hero statement — the highlighted word gets the accent block.
  headline: ['I build', 'AI', 'that ships.'],
  subhead:
    'Software Development Engineer at Wavemaker. I turn messy knowledge into systems that reason — retrieval, agents and developer tooling people actually use.',
}

export const socials = {
  github: 'https://github.com/Tiwariji-07',
  linkedin: 'https://www.linkedin.com/in/vr384/',
  leetcode: 'https://leetcode.com/Tiwari_ji07/',
  whatsapp: 'https://api.whatsapp.com/send?phone=916304144730',
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
  lead: 'I like problems that don\u2019t have a tidy answer yet.',
  paragraphs: [
    'I started out shipping web pages and REST endpoints. These days I build AI systems that hold up in production — multi-source RAG, agents that actually do things, and the unglamorous plumbing (retrieval, ranking, evals) that makes them trustworthy.',
    'At Wavemaker I\u2019ve led a knowledge platform that became the default way internal tools answer questions, and a Gen-UI app that replaced 1000+ static screens with one that thinks. I care about measurable impact, clean systems, and shipping.',
    'Away from the keyboard you\u2019ll find me chasing a runner\u2019s high, grinding LeetCode, and over-caffeinated on chai at the next hackathon.',
  ],
  // woven-in skills, grouped but compact
  toolkit: [
    { k: 'AI / LLM', v: 'RAG · Agents · MCP · LiteLLM · Langfuse' },
    { k: 'Backend', v: 'Python · FastAPI · LangGraph · Spring · Node' },
    { k: 'Frontend', v: 'React · React Native · TypeScript' },
    { k: 'Data', v: 'Postgres · pgvector (HNSW) · MongoDB · Redis' },
    { k: 'Tooling', v: 'Git · Docker · Jenkins · Swagger · Storybook' },
  ],
}

// Compact trajectory — not a bullet dump.
export const experience = [
  { role: 'Software Development Engineer', company: 'Wavemaker', period: "'25 — Now" },
  { role: 'Associate Software Engineer', company: 'Wavemaker', period: "'23 — '25" },
  { role: 'Web Developer Intern', company: 'Wavemaker', period: "'23" },
]

export const projects = [
  {
    title: 'Ecosystem Agent & Docs MCP',
    blurb:
      'A unified search-and-answer brain over Docs, Academy, Storybook and Marketplace — fused with Reciprocal Rank Fusion and streamed as grounded, cited answers.',
    tags: ['Python', 'FastAPI', 'LangGraph', 'pgvector', 'MCP'],
    year: '2026',
    links: [],
  },
  {
    title: 'Generative UI Platform',
    blurb:
      'AI agents that generate tables, charts and lists from a prompt — consolidating 1000+ static screens into one intelligent interface and cutting build overhead ~95%.',
    tags: ['Agents', 'Gen UI', 'React', 'LLM'],
    year: '2025',
    links: [],
  },
  {
    title: 'Furnish — Mobile Commerce',
    blurb:
      'A cross-platform e-commerce app shipped in two weeks: 14 screens, 21 REST endpoints, auth, payments and Formik/Yup forms on iOS and Android.',
    tags: ['React Native', 'Express.js', 'Formik'],
    year: '2023',
    links: [
      { label: 'Frontend', href: 'https://github.com/Tiwariji-07/React-Native-Ecommerce/' },
      { label: 'Backend', href: 'https://github.com/Tiwariji-07/ecommerce-backend/' },
    ],
  },
]

export const achievements = [
  { text: 'MongoDB Developer Toolkit — certified', href: 'https://www.geeksforgeeks.org/certificate/649ea5117dbae94e35b1ed66bb1de99d' },
  { text: 'LeetCode — peak 1469, 100+ solved', href: 'https://leetcode.com/Tiwari_ji07/' },
  { text: 'B.Tech CSE — MRCET, CGPA 8.38', href: null },
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
