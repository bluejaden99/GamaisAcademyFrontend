import React from 'react'
import Forehead from './LocalComponent/Forehead'
import LandingCarousel from './LocalComponent/LandingCarousel'
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'


function LandingPage() {
    
    
    return (
        <>
            <Navbar/>
            <Forehead/>
            <LandingCarousel/>
            {/* <Footer/> */}
        </>
    )
}

export default LandingPage;