import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ParrotCarousel from './components/ParrotCarousel'
import WhyParrots from './components/WhyParrots'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Hero />
      <ParrotCarousel />
      <WhyParrots />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App

