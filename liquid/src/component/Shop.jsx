import React from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import assets from '../assets/assets';
import Banner from './Banner';



const Shop = () => {
  return (
    <div>
      <div className='flex justify-between items-center py-3 px-5'>
        <div>
          <span className='font-bold text-xl sm:text-2xl md:text-3xl'>
            LIQUID
          </span>
        </div>
        <div>
          <input typte='text' placeholder='Search' className='border border-2 rounded-sm pl-2 pr-15 py-2'></input>
        </div>
        <div className='flex justify-center items-center gap-9'>
          <Heart size={25} className='cursor-pointer hover:opacity-70 transition-opacity' />
          <ShoppingBag size={25} className='cursor-pointer hover:opacity-70 transition-opacity' />
          <img src={assets.UserPfp} className='w-10 h-10 rounded-full object-cover' />
        </div>


      </div>
      <Banner />
    </div>

  )
}

export default Shop
