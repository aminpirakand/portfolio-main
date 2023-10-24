import React from 'react'
import profile from '../assets/portfolio/profile1.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black  via-black to-purple-950'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full sm:mt-0'>
        <h2 className='text-4xl sm:text-5xl md:text-7xl font-bold text-white '>i'm a <span className='text-purple-800'>front-end</span> developer</h2>
        <p className='text-gray-400 py-4 max-w-md' >
        "Hello, I'm a <b className=' text-purple-200 '>front-end developer </b> with 2 years of experience. I specialize in HTML, CSS, and JavaScript to create interactive and user-friendly web interfaces. Collaborating with designers and back-end developers, I build responsive websites and deliver seamless user experiences. I enjoy bringing ideas to life. It's nice to meet you!"
        </p>
        <div>
          <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r sm:from-black sm:to-purple-950 cursor-pointer capitalize font-bold border-2
          hover:bg-gradient-to-r hover:from-black
         hover:to-purple-800
        
          '>portfolio 
          <span className='group-hover:rotate-90 duration-300'>
          <MdOutlineKeyboardArrowRight size={25} className='ml-1'/> 
          </span>
          </button>
        </div>
      </div>
      <div className=''>
        <img src={profile} alt="img profile" className=' rounded-xl mx-auto w-2/3 md:w-full'/>
      </div>
      </div>
    </div>
  )
}

export default Home