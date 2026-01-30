import React, { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='fixed top-0 w-full navbar mt-1 z-10'>
      <div className='flex justify-between items-center p-2 px-4 md:px-10'>
        
        <div className='hidden md:flex gap-10 font-medium text-[17px]'>
          <a href='#shop'>Shop</a>
          <a href='#about_us'>About us</a>
          <a href='#flavours'>Flavours</a>
          <a href='#learn'>Learn</a>
        </div>

        <div>
          <span className='liquid text-2xl md:text-3xl'>
            LIQUID
          </span>
        </div>

        <div className='hidden md:flex gap-10 font-medium text-[17px] items-center'>
          <a href='#our_story'>Our story</a>
          <a href='#contact'>Contact</a>
          <Search size={20} />
          <Heart size={20} />
          <ShoppingBag size={20} />
        </div>

        <div className='md:hidden flex items-center gap-4'>
          <Search size={20} />
          <Heart size={20} />
          <ShoppingBag size={20} />
          <button onClick={toggleMenu} className='p-2'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden bg-[#0A0A0B] border-t border-[#333333] py-4 px-4'>
          <nav className='flex flex-col gap-4 font-medium text-[17px]'>
            <a href='#shop' onClick={closeMenu}>Shop</a>
            <a href='#about_us' onClick={closeMenu}>About us</a>
            <a href='#flavours' onClick={closeMenu}>Flavours</a>
            <a href='#learn' onClick={closeMenu}>Learn</a>
            <hr className='border-[#333333]' />
            <a href='#our_story' onClick={closeMenu}>Our story</a>
            <a href='#contact' onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar