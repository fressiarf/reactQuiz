import React from 'react'
import Navbar from '../components/Navbar'
import InfoMain from '../components/InfoMain'
import '../style/home.css'

function Home() {
  return (
    <div className="home-container">
        <Navbar/>
        <InfoMain />

    </div>
  )
}

export default Home