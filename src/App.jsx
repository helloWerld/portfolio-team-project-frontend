import './App.css';
import Hero from './sections/Hero';
import Navbar from './components/Navbar';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Education from './sections/Education';
import Contact from './sections/Contact';
import HamburgerMenu from './components/HamburgerMenu';

function App() {

  return (
    <div className="App">
      <div className='flex flex-row w-full overflow-x-clip'>
        <div className='hidden md:flex md:w-2/12 2xl:w-1/12 fixed top-0 bottom-0 left-0'>
          <Navbar />
        </div>
        <div className='absolute md:hidden top-6 left-6 z-30'>
          <HamburgerMenu />
        </div>
        <div className='flex flex-col md:absolute right-0 w-full md:w-10/12 2xl:w-11/12 gap-0.5 bg-gradient-to-tl from-indigo-600 via-purple-600 to-rose-600'>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
