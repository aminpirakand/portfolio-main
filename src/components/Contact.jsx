import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black via-black to-purple-950 w-full h-screen text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline cursor-pointer
          text-purple-100
          duration-100  '>Contact</p>
          <p className='py-6'>submit the form below to get in touch with me</p>
        </div>
        <div className='flex mx-auto justify-center items-center'>
          <form action="https://getform.io/f/efe6c05a-40d2-444f-a999-3ebe4f6c3d85" method='POST' className='flex flex-col w-full md:w1/2'>
            <input type="text" required name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input required type="text" name='email' placeholder='Enter your email' className='p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea required name="message" id="" cols="30" rows="10"
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your massage'></textarea>
              <button className='group text-white w-fit px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r sm:from-black sm:to-purple-950 cursor-pointer capitalize font-bold border-2
              hover:bg-gradient-to-r hover:from-black
              hover:to-purple-800
              hover:scale-110 duration-300
             '>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact