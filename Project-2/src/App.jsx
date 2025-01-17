import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto px-6 pt-20'>
        <HeroSection />
        <Feature />
      </div>
    </div>
  )
}

export default App
