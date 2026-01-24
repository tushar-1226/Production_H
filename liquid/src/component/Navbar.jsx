import React from 'react'
import { Search,Heart, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full flex justify-between items-center p-2 pl-10 pr-10 navbar z-10 '>
      <div className='flex gap-10 font-medium text-[17px]'>
        <a href='#shop'>Shop</a>
        <a href='#about_us'>About us</a>
        <a href='#flavours'>Flavours</a>
        <a href='#learn'>Learn</a>
      </div>
      <div>
        <span className='liquid'>
          LIQUID
        </span>
      </div>
      <div className='flex gap-10 font-medium text-[17px]'>
        <a href='#our_story'>Our story</a>
        <a href='#contact'>Contact</a>
        <Search  />
        <Heart />
        <ShoppingBag />
      </div>
    </div>
  )
}

export default Navbar