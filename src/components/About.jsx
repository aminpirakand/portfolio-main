import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-purple-950  to-black text-purple-100'>
      <div className ='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline cursor-pointer
          text-purple-100
          duration-100  '>About</p>
        </div>
        <p className='text-xl mt-2 '>
        "Hello, I'm a <b className=' text-purple-200'>front-end developer </b> with 2 years of experience. I specialize in HTML, CSS, and JavaScript to create interactive and user-friendly web interfaces. Collaborating with designers and back-end developers, I build responsive websites and deliver seamless user experiences. I enjoy bringing ideas to life. It's nice to meet you!"
        </p>
        <p className='text-xl'> "Hello, I'm a <b className=' text-purple-200  '>front-end developer </b> with 2 years of experience. I specialize in HTML, CSS, and JavaScript to create interactive and user-friendly web interfaces. Collaborating with designers and back-end developers, I build responsive websites and deliver seamless user experiences. I enjoy bringing ideas to life. It's nice to meet you!"</p>
      </div>
    </div>
  )
}

export default About