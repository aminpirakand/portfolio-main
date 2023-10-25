import React from 'react'
import divar1 from '../assets/portfolio/divar1.jpg'
import portfolio1 from '../assets/portfolio/portfolio1.jpg'
import snakegame1 from '../assets/portfolio/snake-game1.jpg'
import shopingcart from '../assets/portfolio/shopingcart.png'

const Portfolio = () => {
  const Portfolios =[
    {
      id:1,
      src: portfolio1,
      
    },
    {
      id:2,
      src: divar1,
      
    },
    {
      id:3,
      src: snakegame1,
  
    },
    {
      id:4,
      src: shopingcart,
    }
  ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black via-black to-purple-950 w-full text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline cursor-pointer
          text-purple-100
          duration-100  '>Portfolio</p>
          <p className='py-6'>Check out some of my work right here !</p>
        </div>
        <div  className='grid sm-grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0'>
        {Portfolios.map(({id,src,title})=>(
          <> 
            <div key={id} className=' relative shadow-xl  shadow-black rounded-lg border-2 border-purple-950 p-2  '>
            <img src={src} alt=""
            className=' cursor-pointer rounded-md duration-300 hover:scale-105 w-full h-36 ' />
            <div className='flex items-center justify-center shadow-purple-700 rounded-b-md'>
              <button className='w-full px-4 m-4 font-bold uppercase'>Code</button>
            </div>
          </div>   
          </>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio