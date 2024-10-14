import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import VideoIcon from "./Icons/VideoIcon";
import UsersRoundIcon from './Icons/UsersRoundIcon';
import MonitorUpIcon from './Icons/MonitorUpIcon';
import Footer from './Footer';
import ChevronRightIcon from './Icons/ChevronRightIcon';
import {Link} from "react-router-dom"




const Landing = () => {
  return (
    <div>

      <Navbar />
      <div className='bg-gradient-to-r from-white  to-violet-700 flex flex-row justify-between px-10 py-40 items-center toplayout '>


        <div className='w-[50%] justify-center items-center flex '>
          <div className='flex flex-col gap-5'>
            <div>
              <h1 className='font-extrabold text-6xl font-mono'>EVENTCONNECT</h1>
              <p className='text-lg font-semibold'>Connect, Collaborate, Create: Your Virtual Meeting Space Awaits!</p>
            </div>
            <div className='flex flex-row gap-10'>
             
              <Link  to="/auth"><button className='border-none flex justify-center items-center gap-4 bg-purple-950 text-xl hover:bg-purple-800 duration-150 text-white p-3 font-semibold rounded-lg'>Get Started <ChevronRightIcon/></button></Link>
            </div>
          </div>
        </div>


        <div className='w-[50%]'>
          <img src="/startingpic.png" className='w-full' alt="" />
        </div>
      </div>


      <div className='flex flex-col w-[80%] mx-auto my-20 gap-12 '>
        <h1 className='text-center font-extrabold text-4xl text-purple-950'>Enhance user engagement with<br /> customized video calling experiences</h1>
        <div className='flex flex-row gap-5 justify-center flex-wrap ' >
          <Card title={"Live Video Streaming"} info={"Stream interactive live video sessions"} ele={<VideoIcon />} />
          <Card ele={<UsersRoundIcon />} title={"Group Chat"} info={"A person can chat in group my making group"} />
          <Card ele={<MonitorUpIcon />} title={"Screen Sharing"} info={"Share your entire screen with everyone"} />
        </div>
      </div>

      <div className='text-center font-bold text-3xl w-[65%] border mx-auto my-24 rounded-xl border-violet-400 p-10'>
      "In A World Where We Are Often Apart, Let Technology Bring Us Together."
      </div>

      <Footer />
      

    </div>
  )
}

export default Landing
