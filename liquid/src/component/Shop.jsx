import React from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import assets from '../assets/assets';
import Banner from './EnergyDrink';
import EnergyDrink from './EnergyDrink';
import Colddrink from './Colddrink';
import Category from './Category';



const Shop = () => {
  return (
    <div className='w-full'>
      <div className='flex w-full justify-between items-center py-3 px-2 md:px-5 mb-5 dark:text-white border-b border-gray-500  '>
        <div>
          <span className='font-bold text-xl sm:text-2xl md:text-3xl'>
            LIQUID
          </span>
        </div>
        <div>
          <input typte='text' placeholder='Search' className='border border-2 rounded-sm pl-1 py-1 md:pl-2 md:pr-15 md:py-2'></input>
        </div>
        <div className='flex justify-center items-center gap-4 md:gap-9'>
          <Heart size={25} className='cursor-pointer hover:opacity-70 transition-opacity' />
          <ShoppingBag size={25} className='cursor-pointer hover:opacity-70 transition-opacity' />
          <img src={assets.userPfp} className='w-10 h-10 rounded-full object-cover' />
        </div>


      </div>
      <Category/>
      <EnergyDrink />
      <Colddrink/>
    </div>

  )
}

export default Shop
