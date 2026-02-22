import React from 'react'
import { Link } from 'react-router-dom'
import { Banners } from '../assets/assets'

const Container = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] text-center font-medium xl:leading-[95px] dark:text-white max-w-5xl'>Refreshment Crafted for Every <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'> Mood</span></h1>


      {/* <Link to='/shop' className='inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
        Shop
      </Link> */}
      
    </div>
  )
}

export default Container