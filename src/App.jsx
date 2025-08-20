import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-gradient-to-br from-[#0A192F] via-[#0F2747] to-[#0A192F] min-h-screen'>
    <Navbar/>
    <Banner/>
    <AboutUs/>
    <Services/>
    <Portfolio/>
    <Footer/>
  </div>
  )
}

export default App
