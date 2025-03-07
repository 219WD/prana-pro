import React from 'react'
import Hero from '../components/Hero.jsx'
import Second from '../components/Second.jsx'
import Third from '../components/Third.jsx'
import Footer from '../components/Footer.jsx'

const HomeScreen = () => {
  return (
    <div className='container'>
        <Hero />
        <Second />
        <Third />
        <Footer />
    </div>
  )
}

export default HomeScreen