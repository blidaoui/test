"use client"
import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Expert from './components/Expert/index';
import Newsletter from './components/Newsletter/Newsletter';
import { Chatbox } from './components/ChatBot/base';
import Map from './components/map/page';



export default function Home() {
  return (
    <main id="home-section" >
      <Banner />
      <Newsletter />
      <Features />
      {/* <Expert /> */}
      {/* <Map /> */}
     
    </main>
  )
}
