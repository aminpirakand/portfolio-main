import React from 'react'
import { HiOutlineMail,HiOutlineDocumentText } from 'react-icons/hi';
import {AiOutlineLinkedin,AiOutlineGithub,AiOutlineInstagram} from 'react-icons/ai'

const SocialLinks = () => {
  const Links =[
    {
      id:1,
      child:(
        <>
          LinkdIn <AiOutlineLinkedin size={30}/>
        </>
      ),
      href:'https://linkedin.com/in/aminpirakand'
    },
    {
      id:2,
      child:(
        <>
          GitHub <AiOutlineGithub size={30}/>
        </>
      ),
      href:'https://github.com/aminpirakand',
    },
    {
      id:3,
      child:(
        <>
          Instagram <AiOutlineInstagram size={30}/>
        </>
      ),
      href:'https://instagram.com/mern_stack.js/',
    },
    {
      id:4,
      child:(
        <>
          Resume <HiOutlineDocumentText size={30}/>
        </>
      ),
      href:'/AminPirakand-CV.pdf',
      download: true

    },
    {
      id:5,
      child:(
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href:'mailto:amin.pirakand@yahoo.com',
    }
  ]
  return (
    <div className='relative'>
      <div  className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {Links.map(({id,child,href,download})=>(
          <li key={id} className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover: rounded-md duration-700 '>
          <a href={href} rel="noreferrer" target="_blank"
          className='flex justify-between items-center w-full text-purple-100 '
          download={download}
          > 
            {child} 
          </a>
        </li> 
        ))}
        
      </ul>
      </div>
      <div className='absolute sm:hidden bottom-8'>
      <ul>
      {Links.map(({id,child,href,download})=>(
          <li key={id} className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover: rounded-md duration-700 '>
          <a href={href} rel="noreferrer" target="_blank"
          className='flex justify-between items-center w-full text-purple-100 '
          download={download}
          > 
            {child} 
          </a>
        </li> 
        ))}
      </ul>
    </div>
    </div>
    
  )
}

export default SocialLinks