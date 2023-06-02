import React from 'react'
import heroImg from '../Image/banner-bg.png'

const Hero = () => {


  return (
    <div className='w-[100%] h-[50vh]'>
      <div className=''>
        <img src={heroImg} alt="" className='w-[100%] h-[100%] object-cover absolute top-0 -z-20'/>
        <div className='grid justify-items-center gap-4 mt-[9rem]'>
          <h2 className='text-center text-4xl text-white'>GET START <br /> YOUR FAVRIOT SHOPING </h2>
          <button className='text-2xl font-bold text-white bg-[#30302e] px-5 py-3 rounded'>Shop Now</button>
        </div>
      </div>

    </div>
  )
}

export default Hero