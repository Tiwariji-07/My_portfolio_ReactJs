// Resolve a file in /public against Vite's base path so assets work both
// locally (base "/") and on GitHub Pages (base "/My_portfolio_ReactJs/").
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Vivek Raj',
  role: 'Software Development Engineer',
  company: 'Wavemaker',
  location: 'Hyderabad, India',
  email: 'hirevivekraj@gmail.com',
  phone: '+91 63041 44730',
  // Big editorial statement shown in the hero.
  statement: [
    'I build',
    'AI systems',
    'that reason over messy knowledge —',
    'RAG, agents & developer tooling.',
  ],
  intro:
    'Software Development Engineer at Wavemaker, where I design retrieval-augmented and agentic systems — multi-source RAG, MCP integrations and Gen UI — that have become the default knowledge layer for internal developer tooling.',
  about: [
    'I started out shipping web pages and REST APIs, and over the last few years moved deeper into AI systems: retrieval, ranking, and agents that actually hold up in production.',
    'Today I work across the stack — Python/FastAPI services, LangGraph agents, Postgres + pgvector retrieval, and React/React Native front ends — with a bias for measurable impact and clean, observable systems.',
  ],
}

export const socials = {
  github: 'https://github.com/Tiwariji-07',
  linkedin: 'https://www.linkedin.com/in/vr384/',
  leetcode: 'https://leetcode.com/Tiwari_ji07/',
  whatsapp: 'https://api.whatsapp.com/send?phone=916304144730',
}

export const stats = [
  { value: '2023', label: 'Joined Wavemaker' },
  { value: '600+', label: 'Doc pages in the RAG layer' },
  { value: '1000+', label: 'Static screens replaced by Gen UI' },
  { value: '1469', label: 'Peak LeetCode rating' },
]

export const experience = [
  {
    role: 'Software Development Engineer',
    company: 'Wavemaker Inc',
    location: 'Hyderabad, IN',
    period: 'Apr 2025 — Present',
    points: [
      'Led the design and rollout of a production multi-source RAG + agent platform powering grounded Q&A across 600+ doc pages, 50+ Academy transcripts and 100+ Storybook/Marketplace components — now the default knowledge layer for internal developer tooling.',
      'Architected a Gen UI application where AI agents dynamically generate tables, charts and lists from prompts, consolidating 1000+ static screens into a single intelligent interface and cutting development overhead ~95%.',
      'Built custom MCP (Model Context Protocol) integrations that retrieve data through Swagger APIs, letting the agent construct POST request bodies automatically and removing manual data configuration.',
      'Engineered an MCP server for WaveMaker marketplace integration so developers can publish artifacts programmatically, reducing deployment time ~60%.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Wavemaker Inc',
    location: 'Hyderabad, IN',
    period: 'Jun 2023 — Apr 2025',
    points: [
      'Built and maintained Storybook documentation for 50+ React Native components, reducing onboarding time ~40% and accelerating integration across 15+ client projects.',
      'Developed an AI-powered chatbot using LLaMA3 and MedLLaMA2 for symptom analysis, department recommendation and appointment booking — booking time down ~30%, analysis accuracy up ~25%.',
      'Assessed React Native application performance, identifying 5+ critical limitations and applying best practices that improved performance ~30%.',
      'Maintained and enhanced the company marketplace for prefabs, themes and connectors, improving resource accessibility ~40%.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Wavemaker Inc',
    location: 'Hyderabad, IN',
    period: 'Jan 2023 — May 2023',
    points: [
      'Developed 20+ web pages with HTML, CSS, Bootstrap and JavaScript, improving the interface and experience.',
      'Architected a full-stack financial management system (HTML, CSS, Bootstrap, JavaScript, Java) with automated expense tracking, bill reminders and goal setting, improving task efficiency ~40%.',
      'Engineered 34 REST API endpoints with Spring, contributing to a ~25% reduction in response times and improved system performance.',
    ],
  },
]

export const projects = [
  {
    title: 'WaveMaker Ecosystem Agent & Docs MCP',
    period: 'Sep 2025 — May 2026',
    stack: ['Python', 'FastAPI', 'LangGraph', 'pgvector', 'MCP'],
    points: [
      'Unified search-and-answer service querying multiple MCP-backed sources (Docs, Academy, Storybook, Marketplace), fusing results via Reciprocal Rank Fusion and streaming grounded, citation-backed answers as NDJSON over FastAPI.',
      'Docs MCP retrieval server on Postgres + pgvector with HNSW indexing and FTS hybrid search, layered with Jina reranking (benchmarked against self-hosted bge-reranker-v2-m3) and exposed as MCP tools with health/readiness probes.',
      'End-to-end Langfuse tracing for retrieval quality, latency and token spend, with optional Redis caching and an LLM planner that selects sources and rewrites per-source queries before fusion.',
    ],
    links: [],
  },
  {
    title: 'Furnish — Cross-platform E-commerce',
    period: 'Mar 2023 — Apr 2023',
    stack: ['React Native', 'Express.js', 'Formik', 'Yup'],
    points: [
      'Architected a cross-platform e-commerce app in React Native, shipping a seamless experience on iOS and Android in two weeks.',
      'Integrated 21 RESTful endpoints with Express.js for authentication, product management, orders and payments, reducing response times ~30%.',
      'Built 14 screens and 13+ components, using Formik and Yup to cut form-validation time ~70% and improve input accuracy.',
    ],
    links: [
      { label: 'Frontend', href: 'https://github.com/Tiwariji-07/React-Native-Ecommerce/' },
      { label: 'Backend', href: 'https://github.com/Tiwariji-07/ecommerce-backend/' },
    ],
  },
]

export const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    items: [
      'FastAPI',
      'FastMCP',
      'LangGraph',
      'LangChain',
      'React',
      'React Native',
      'Node.js',
      'Express.js',
      'Spring',
    ],
  },
  {
    category: 'AI / LLM',
    items: ['RAG', 'Hybrid search & reranking', 'MCP', 'LiteLLM', 'OpenAI', 'Langfuse'],
  },
  {
    category: 'Data & Retrieval',
    items: ['PostgreSQL', 'pgvector (HNSW)', 'Full-Text Search', 'Vector DBs', 'MongoDB', 'Firestore'],
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'Docker', 'Jenkins', 'Postman', 'Swagger / OpenAPI', 'Storybook'],
  },
]

export const education = {
  school: 'Malla Reddy College of Engineering and Technology',
  degree: 'B.Tech, Computer Science and Engineering',
  period: 'Aug 2019 — Jun 2023',
  detail: 'CGPA 8.38',
}

export const achievements = [
  {
    text: 'MongoDB Developer Toolkit certification',
    href: 'https://www.geeksforgeeks.org/certificate/649ea5117dbae94e35b1ed66bb1de99d',
    linkLabel: 'Certificate',
  },
  {
    text: 'LeetCode — peak rating 1469, 100+ problems solved',
    href: 'https://leetcode.com/Tiwari_ji07/',
    linkLabel: 'Profile',
  },
  {
    text: 'Participated in the 100xDevs Solana Mini Hackathon',
    href: null,
    linkLabel: null,
  },
]

// EmailJS configuration. The public key is safe to expose client-side; values
// can be overridden via Vite env vars (see .env.example).
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_f34m3jd',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_83u3amp',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'd0YXx_dGYFDu5078C',
}

export const navLinks = [
  { id: 'home', label: 'Index', num: '00' },
  { id: 'about', label: 'About', num: '01' },
  { id: 'experience', label: 'Experience', num: '02' },
  { id: 'work', label: 'Work', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
]
