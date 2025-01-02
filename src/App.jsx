import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import FormSection from './Components/FormSection'
import CardSection from './Components/CardSection'
import MobileAppSection from './Components/MobileAppSection'
import Footer from './Components/Footer'
import Features from './Components/Features'

function App() {
  return (
    <div className="font-sans">
      <Header />

      <HeroSection />
      <FormSection />
      <CardSection />
      <MobileAppSection />
      
      <Features />

      <Footer />
    </div>
  )
}

export default App