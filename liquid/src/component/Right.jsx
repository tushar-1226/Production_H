import React from 'react'

const Right = () => {
  return (
    <div className='flex justify-center  '>
      <div className='h-[450px] w-[350px] mt-10 category border-2 border-gray-200 rounded-4xl why_liquid '>
        <div className='m-5'>
          <p className='flex justify-center text-2xl'>Why Liquid?</p>
        </div>

        <div className='flex flex-col gap-3 m-5  '>
          <div className='text-lg p-3 bg-gray-100 rounded-2xl  hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer' >
            <p>Premium Quality</p>
            <p className='text-base'>Where quality meets elegance.</p>
          </div>
          <div className='text-lg p-3 bg-gray-100 rounded-2xl  hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <p>Trusted Brands</p>
            <p className='text-base'>Brands have Global Recognition.</p>
          </div>
          <div className=' text-lg p-3 bg-gray-100 rounded-2xl  hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <p>Wide Selection</p>
            <p className='text-base'>A flavour for every mood.</p>
          </div>
          <div className='text-lg p-3 bg-gray-100 rounded-2xl  hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <p>Customer Loved</p>
            <p className='text-base'>Rated by real drinkers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Right
