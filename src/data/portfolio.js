export const profile = {
  name: 'Vivek Raj',
  role: 'Software Developer',
  tagline: 'I build clean, reliable web applications.',
  intro:
    'A results-driven Computer Science engineer who enjoys turning ideas into well-crafted software. I work across the stack with React on the front end and Java / Spring Boot and Python on the back end.',
  location: 'Hyderabad, Telangana, India',
  email: 'viveeraj384@gmail.com',
  phone: '+91 6304144730',
  about: [
    'I recently completed my B.Tech in Computer Science and Engineering from Malla Reddy College of Engineering and Technology, where I built a strong foundation in software development and problem solving.',
    'I have hands-on experience with Python, JavaScript, React and Spring Boot, and I enjoy designing REST APIs and building responsive, accessible interfaces. I am actively looking for software development opportunities where I can keep learning and shipping.',
  ],
}

export const socials = {
  github: 'https://github.com/Tiwariji-07',
  linkedin: 'https://www.linkedin.com/in/vr384/',
  leetcode: 'https://leetcode.com/Tiwari_ji07/',
  whatsapp: 'https://api.whatsapp.com/send?phone=916304144730',
}

export const stats = [
  { label: 'Featured projects', value: '3+' },
  { label: 'Core languages', value: '5+' },
  { label: 'Frameworks & tools', value: '10+' },
]

export const skillGroups = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'jQuery', 'Responsive UI'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Django', 'Node.js', 'REST APIs', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Google Cloud (GCP)', 'OpenCV'],
  },
]

export const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio built with React, showcasing my work, skills and contact details with smooth, accessible interactions.',
    image: '/personal.png',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://github.com/Tiwariji-07',
    linkLabel: 'View source',
  },
  {
    title: 'Netflix Clone',
    description:
      'A streaming-style UI built with React and the TMDB API, deployed on Firebase Hosting. Features browsing rows, trailers and a familiar viewing experience.',
    image: '/netflix.png',
    tags: ['React', 'TMDB API', 'Firebase'],
    link: 'https://netflix-clone-vivee.web.app',
    linkLabel: 'Live demo',
  },
  {
    title: 'Employee Management System',
    description:
      'A full-stack CRUD application with a React front end and a Spring Boot REST API backed by MySQL for managing employee records.',
    image: '/employee.png',
    tags: ['React', 'Spring Boot', 'REST', 'MySQL'],
    link: 'https://github.com/Tiwariji-07/EMS_Spring_Rjs',
    linkLabel: 'View source',
  },
]

// EmailJS configuration. The public key is safe to expose client-side, but
// values can be overridden via Vite env vars (see .env.example).
export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_f34m3jd',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_83u3amp',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'd0YXx_dGYFDu5078C',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
