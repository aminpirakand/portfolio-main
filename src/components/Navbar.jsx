import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import links from '../data/data.js'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 z-10 bg-black fixed'>
     <div className='text-purple-100 hover:text-purple-600 cursor-pointer duration-300 '>
      <h1 className='text-5xl font-signature ml-2 '>Amin</h1>
     </div>
      <ul className='hidden md:flex '>
        {links.map(({ id, link })=> (
          <li key={id} className='px-4 mx-2 cursor-pointer uppercase  font-bold text-purple-200 hover:text-purple-400 duration-700 '>
          <Link to={link} smooth duration={500}> {link}</Link>
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
          <li key={id} className='px-4 py-6 cursor-pointer capitalize text-2xl font-extrabold text-purple-200 hover:text-purple-400 hover:scale-105  duration-200'>
            <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}> {link}</Link>
          </li>
        ))}
      </ul> }
      
    </div>
  )
}

export default Navbar