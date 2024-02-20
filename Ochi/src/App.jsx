import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Projects from './components/Projects';
import Cards from './components/Cards';

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/> 
      <Projects/>
      <Cards/>
    </div>
  )
}

export default App;