import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto px-6 pt-20'>
        <HeroSection />
        <Feature />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App
