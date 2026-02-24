import React from 'react'
import { Search, Heart, ShoppingBag } from 'lucide-react';
import assets from '../assets/assets';

const ShopNavbar = () => {
  return (
    <div className='flex w-full justify-between items-center py-3 px-2 md:px-5 mb-5 dark:text-white '>
      <div>
        <span className='font-bold text-xl sm:text-2xl md:text-3xl'>
          LIQUID
        </span>
      </div>

      <div className='w-full flex justify-center'>
        <input
          type='text'
          placeholder='Search'
          className="w-[150px] min-[410px]:w-[200px] sm:w-[300px] lg:w-[500px] border-2 rounded-4xl  pl-2 sm:pl-4 py-1 sm:py-2"
        />
      </div>

      <div className='flex justify-center items-center gap-4 md:gap-9'>
        <Heart size={35} sm:size={40} className='cursor-pointer hover:opacity-70 transition-opacity' />
        <ShoppingBag size={35} sm:size={40}  className='cursor-pointer hover:opacity-70 transition-opacity' />
        <img src={assets.userPfp} className='w-10 h-10 rounded-full object-cover' alt='User profile' />
      </div>
    </div>
  )
}

export default ShopNavbar
