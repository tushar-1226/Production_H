import React, { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import ThemeToggleBtn from './ThemeToggleBtn';
import { Link } from 'react-router-dom';


const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='fixed top-0 w-full  rounded-none bg-[#eaf6f6]/50 text-black  dark:bg-[#0A0A0B]/30 dark:text-white p-2 backdrop-blur-md z-50'>
      <div className='flex justify-between items-center p-3 px-4 md:p-2 md:px-10'>

        <div className='flex-1 lg:flex-none lg:text-left'>
          <span className='font-bold text-xl sm:text-2xl md:text-3xl'>
            LIQUID
          </span>
        </div>


        <div className='hidden lg:flex gap-6 xl:gap-10 font-medium text-[15px] xl:text-[17px]'>
                    <a href='#home' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Home</a>

          <Link to='/shop' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Shop</Link>
          <a href='#about_us' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>About us</a>
          <a href='#contact' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Contact</a>

          <a href='#our_story' className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>Our story</a>

        </div>




        <div className='hidden lg:flex gap-3 xl:gap-4 font-medium text-[15px] xl:text-[17px] items-center'>

          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          <button className='bg-black/80 text-white dark:bg-[#eaf6f6] dark:text-black rounded-full p-2 px-3'>SignUp</button>
          <button className='bg-black/80 text-white dark:bg-[#eaf6f6] dark:text-black rounded-full p-2 px-3'>Login</button>

        </div>


        <div className='lg:hidden flex items-center gap-3 sm:gap-4'>
          <button onClick={toggleMenu} className='p-1 sm:p-2 hover:bg-[#1a1a1b] rounded transition-colors'>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className='lg:hidden bg-[#0A0A0B] border-t border-[#333333] py-4 px-4 animate-fadeIn'>
          <nav className='flex flex-col gap-3 sm:gap-4 font-medium text-[16px] sm:text-[17px]'>
            <a href='#shop' onClick={closeMenu} className='py-1'>Shop</a>
            <a href='#about_us' onClick={closeMenu} className='py-1'>About us</a>
            <a href='#our_story' onClick={closeMenu} className='py-1'>Our story</a>
            <a href='#contact' onClick={closeMenu} className='py-1'>Contact</a>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar