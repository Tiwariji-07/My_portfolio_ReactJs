
import './app.scss';
import Contact from './components/contact/Contact';
import Introduction from './components/introduction/Introduction';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
// import Topbar from './components/topbar/Topbar';
// import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import {useState} from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';



function App() {
  // const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        {/* <Home/> */}
        <Introduction/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
