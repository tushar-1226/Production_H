import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'



const Banner = () => {


  return (
<div className="group flex flex-col justify-center items-center w-full max-w-[260px] rounded-xl py-3 border-2 hover:shadow-2xl transition-all duration-600 ease-out hover:scale-102">
      

        <div>
          <img src={assets.Campa} className='h-50 rounded-sm' />
        </div>

        <div className='flex flex-col justify-center items-center'>

          <div className='text-center p-2'>
            <p className='font-extrabold'> Campa Energy drink</p>
            <p className=''>Boosts Energy, Focus, And Instant Refreshment</p>
          </div>

          <div className='flex gap-10'>
            <div>
              <button className='border-2 px-4 py-2 rounded-full cursor-pointer'>$3.50</button>
            </div>
            <div>
              <button className=' border-2 bg-gray-400  px-3 py-2 rounded-full cursor-pointer'>Shop now</button>
            </div>
          </div>

        </div>

      

    </div>
  )
}

export default Banner