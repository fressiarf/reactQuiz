import React from 'react'
import Navbar from '../components/Navbar'
import InfoMain from '../components/InfoMain'
import '../style/home.css'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="home-container">
      <div className="home-content-wrapper">
        <Navbar />
        <InfoMain />
        <Footer />
      </div>
    </div>
  )
}

export default Home