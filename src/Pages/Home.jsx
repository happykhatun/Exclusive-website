import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Bannar from '../Components/Bannar'
import FlashSales from '../Components/FlashSales'
import Categories from '../Components/Categories'
import ThisMonth from '../Components/ThisMonth'
import OurProducts from '../Components/OurProducts'
import Featured from '../Components/Featured'
import Footer from '../Components/Footer'
import Music from '../Components/Music'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Bannar/>
    <FlashSales/>
    <Categories/>
    <ThisMonth/>
    <Music/>
    <OurProducts/>
    <Featured/>
    <Footer/>
    
      
    </>
  )
}

export default Home
