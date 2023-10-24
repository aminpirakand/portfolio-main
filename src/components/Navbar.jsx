import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import links from '../data/data.js'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  
  return (
    <div className='flex justify-between items-center w-full h-20 px-4  bg-black fixed'>
     <div className='text-purple-100 hover:text-purple-600 cursor-pointer duration-300'>
      <h1 className='text-5xl font-signature ml-2 '>Amin</h1>
     </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link })=> (
          <li key={id} className='px-4 mx-2 cursor-pointer capitalize font-extrabold text-purple-300 hover:text-purple-600 hover:scale-105 duration-300'>
           {link}
          </li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className=' cursor-pointer pr-4 z-10 text-purple-300 md:hidden '>
       {nav ?  <FaTimes size={30}/> :  <FaBars size={30}/>}
      </div>
      {nav && <ul className='flex flex-col justify-start items-center absolute top-20 left-0 w-full mx-auto h-screen bg-gradient-to-b from-black to-purple-950 md:hidden'>
      <div>
    
     </div>
      {links.map(({ id, link })=> (
          <li key={id} className='px-4 py-6 cursor-pointer capitalize text-2xl font-extrabold text-purple-200 hover:text-purple-400 hover:scale-105  duration-200'>{link}</li>
        ))}
      </ul> }
      
    </div>
  )
}

export default Navbar