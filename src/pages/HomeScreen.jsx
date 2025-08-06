import React from 'react'
import Hero from '../components/Hero.jsx'
import Second from '../components/Second.jsx'
import Third from '../components/Third.jsx'
import Footer from '../components/Footer.jsx'
import Videos from '../components/Videos.jsx'

const HomeScreen = () => {
  return (
    <div className='container'>
        <Second />
        <Hero />
        <Videos />
        <Third />
        <Footer />
    </div>
  )
}

export default HomeScreen