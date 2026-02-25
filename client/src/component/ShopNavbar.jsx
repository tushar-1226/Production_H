import React from 'react'
import { Search, Heart, ShoppingBag } from 'lucide-react';
import assets from '../assets/assets';
import { Link } from 'react-router-dom';

const ShopNavbar = () => {
  return (
    <div className='flex bg-[#eaf6f6]/50 backdrop-blur-md fixed w-full justify-between items-center py-3 px-2 md:px-5 mb-5 dark:text-white z-10 '>
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

      <div className="flex justify-center items-center gap-4 md:gap-9">

        <div className="relative group">
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition" />

          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap ">
            Wishlist
          </span>
        </div>


        <div className="relative group">

          <Link to='/cart'>

          <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70 transition"/>
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap ">Cart </span>
          </Link>
      
        </div>


        <div className="relative w-8 group">

          <img src={assets.userPfp} className=" rounded-full object-contain cursor-pointer" alt="User profile"/>

          <span className="absolute top-10 -left-3 -translate-x-1/2 bg-[#eaf6f6] text-black  px-3 py-3 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            <p className='p-2 hover:bg-[]'>My Profile</p>
            <p className='p-2'>My Orders</p>
            <p className='p-2'>Wishlist</p>
            <p className='p-2'>Cart</p>
            <p className='p-2'>Settings</p>
            <p className='p-2'>Support</p>
            <p className='p-2'>Logout</p>
          </span>

        </div>

      </div>
    </div>
  )
}

export default ShopNavbar
