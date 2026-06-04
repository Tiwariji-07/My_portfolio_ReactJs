import SmoothScroll from './components/SmoothScroll.jsx'
import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { marquee } from './data/portfolio.js'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <div className="display border-y border-line py-6 text-[clamp(1.1rem,2.4vw,2rem)] sm:py-8">
          <Marquee items={marquee} duration={34} />
        </div>
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
