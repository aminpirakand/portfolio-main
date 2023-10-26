import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/git.png'
import bootstrap from '../assets/bootstrap.png'

const Experience = () => {
  const experience =[
    {
      id:1,
      src: html,
      title:"html",
      style:'shadow-orange-500'
    },
    {
      id:2,
      src: css,
      title:"css",
      style:'shadow-blue-500'
    },
    {
      id:3,
      src: javascript,
      title:"javascript",
      style:'shadow-yellow-400'
    },
    {
      id:4,
      src: react,
      title:"react",
      style:'shadow-blue-500'

    },
    {
      id:5,
      src: tailwind,
      title:"tailwind",
      style:'shadow-sky-400 '
    },
    {
      id:6,
      src: node,
      title:"node",
      style:'shadow-green-600'

    },
    {
      id:7,
      src: github,
      title:"github",
      style:'shadow-white'


    },
    {
      id:8,
      src: bootstrap,
      title:"bootstrap",
      style:'shadow-purple-500'
      

    }
  ]
  return (
    <div name="experience" className='bg-gradient-to-b from-purple-950 to-black w-full text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-8'>
          <p className='text-4xl font-bold inline cursor-pointer
            text-purple-100
            duration-100  '> Experience </p>
          <p className='py-6'>these are the technologies i've worked with </p>        
        </div>
        <div className='grid justify-center items-center md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0 '>
          {experience.map(({id,title,src,style})=>(
            <div key={id} className={`flex flex-col justify-center  items-center shadow-md  shadow-black rounded-lg border-2 border-purple-950 h-full w-full p-2 ${style} cursor-pointer rounded-md duration-300 hover:scale-105`}>
            <div className="flex justify-center items-center mt-2 mb-4 font-bold ">
            <p className="capitalize">{title}</p>
            </div>
            <img  src={src} alt=""
            className="rounded-md  w-32
            "/>
          </div>
          ))}
        </div>
      </div>
    </div> 
    
  )
}

export default Experience