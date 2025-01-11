import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Tabs from '../components/Tabs'
import Marquee from '../components/Marquee'
import Categories from '../components/Salecomponents-category'
import Featured from '../components/Featured'
import Trending from '../components/Trending'
import End from '../components/End-banner'

export default function Homepage() {
  return (
    <div className='min-h-screen overflow-hidden'>
        <Navbar/>
        <Tabs/>
        <Body/>
        <Marquee/>
        <Categories/>
        <Featured/>
        <Trending/>
        <End/>
        <Footer/>
    </div>
  )
}
