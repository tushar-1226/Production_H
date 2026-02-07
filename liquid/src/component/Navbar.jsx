import React, { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import ThemeToggleBtn from './ThemeToggleBtn';


const Navbar = ({theme, setTheme}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='fixed top-0 w-full border border-[#333333] rounded-none bg-white text-black  dark:bg-[#0A0A0B] dark:text-white p-2 z-50'>
      <div className='flex justify-between items-center p-3 px-4 md:p-2 md:px-10'>

        
        <div className='hidden lg:flex gap-6 xl:gap-10 font-medium text-[15px] xl:text-[17px]'>

          <a href='#shop' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Shop</a>

          

          <a href='#about_us' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>About us</a>
          <a href='#flavours' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Flavours</a>
          <a href='#learn' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Learn</a>
        </div>

        <div className='flex-1 lg:flex-none text-center lg:text-left'>
          <span className='font-bold text-xl sm:text-2xl md:text-3xl'>
            LIQUID
          </span>
        </div>

        
        <div className='hidden lg:flex gap-6 xl:gap-10 font-medium text-[15px] xl:text-[17px] items-center'>
          <a href='#our_story' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Our story</a>
          <a href='#contact' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Contact</a>

          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          <Search size={20} className='cursor-pointer hover:opacity-70 transition-opacity' />
          <Heart size={20} className='cursor-pointer hover:opacity-70 transition-opacity' />
          <ShoppingBag size={20} className='cursor-pointer hover:opacity-70 transition-opacity' />
        </div>

        
        <div className='lg:hidden flex items-center gap-3 sm:gap-4'>
          <Search size={18} className='sm:w-5 sm:h-5 cursor-pointer' />
          <Heart size={18} className='sm:w-5 sm:h-5 cursor-pointer' />
          <ShoppingBag size={18} className='sm:w-5 sm:h-5 cursor-pointer' />
          <button onClick={toggleMenu} className='p-1 sm:p-2 hover:bg-[#1a1a1b] rounded transition-colors'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      
      {menuOpen && (
        <div className='lg:hidden bg-[#0A0A0B] border-t border-[#333333] py-4 px-4 animate-fadeIn'>
          <nav className='flex flex-col gap-3 sm:gap-4 font-medium text-[16px] sm:text-[17px]'>
            <a href='#shop' onClick={closeMenu} className='py-2 hover:text-amber-600 transition-colors'>Shop</a>
            <a href='#about_us' onClick={closeMenu} className='py-2 hover:text-amber-600 transition-colors'>About us</a>
            <a href='#flavours' onClick={closeMenu} className='py-2 hover:text-amber-600 transition-colors'>Flavours</a>
            <a href='#learn' onClick={closeMenu} className='py-2 hover:text-amber-600 transition-colors'>Learn</a>
            <hr className='border-[#333333] my-1' />
            <a href='#our_story' onClick={closeMenu} className='py-2 hover:text-amber-600 transition-colors'>Our story</a>
            <a href='#contact' onClick={closeMenu} className='py-2 hover:text-amber-600 transition-colors'>Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar