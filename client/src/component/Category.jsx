import React from 'react'

const Category = () => {
  return (

    <div className='flex gap-5 py-5 px-15'>
      <div className="bg-[#dbd8e3] px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5c5470] hover:text-white hover:scale-105 hover:shadow-[0_8px_20px_rgba(92,84,112,0.4)] active:scale-95">
        <h2 className="font-medium tracking-wide">Cold drinks</h2>
      </div>
      <div className="bg-[#dbd8e3] px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5c5470] hover:text-white hover:scale-105 hover:shadow-[0_8px_20px_rgba(92,84,112,0.4)] active:scale-95">
        <h2 className="font-medium tracking-wide">Energy Drinks</h2>
      </div>
      <div className="bg-[#dbd8e3] px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5c5470] hover:text-white hover:scale-105 hover:shadow-[0_8px_20px_rgba(92,84,112,0.4)] active:scale-95">
        <h2 className="font-medium tracking-wide">Fruit Juice</h2>
      </div>
      <div className="bg-[#dbd8e3] px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5c5470] hover:text-white hover:scale-105 hover:shadow-[0_8px_20px_rgba(92,84,112,0.4)] active:scale-95">
        <h2 className="font-medium tracking-wide">Wine and Vodka</h2>
      </div>
      <div className="bg-[#dbd8e3] px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5c5470] hover:text-white hover:scale-105 hover:shadow-[0_8px_20px_rgba(92,84,112,0.4)] active:scale-95">
        <h2 className="font-medium tracking-wide">Coffee & Tea</h2>
      </div>

    </div>

  )
}

export default Category
