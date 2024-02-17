import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className='text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
    </div>
  )
}

export default App;