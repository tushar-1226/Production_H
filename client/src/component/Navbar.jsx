import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';
import ThemeToggleBtn from './ThemeToggleBtn';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
  { label: 'Home', href: '#home', isLink: false },
  { label: 'Shop', href: '/shop', isLink: true },
  { label: 'About Us', href: '#about_us', isLink: false },
  { label: 'Contact', href: '#contact', isLink: false },
  { label: 'Our Story', href: '#our_story', isLink: false },
];

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/80 dark:bg-[#0A0A0B]/90 shadow-lg shadow-black/10 dark:shadow-black/40'
            : 'bg-[#eaf6f6]/50 dark:bg-[#0A0A0B]/30'}
          backdrop-blur-md`}
      >
        <div className='flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 md:py-4'>

          {/* Logo */}
          <Link to='/' onClick={closeMenu} className='font-bold text-xl sm:text-2xl md:text-3xl tracking-widest text-black dark:text-white'>
            LIQUID
          </Link>

          {/* Desktop Nav Links */}
          <div className='hidden lg:flex gap-6 xl:gap-10 font-medium text-[15px] xl:text-[17px] text-black dark:text-white'>
            {navLinks.map(({ label, href, isLink }) =>
              isLink ? (
                <Link key={label} to={href}
                  className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>
                  {label}
                </Link>
              ) : (
                <a key={label} href={href}
                  className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full'>
                  {label}
                </a>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className='hidden lg:flex gap-3 xl:gap-4 items-center'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            <Link to="/auth"
              className='bg-black text-white dark:bg-white dark:text-black rounded-full px-5 py-2 text-[14px] xl:text-[15px] font-semibold hover:opacity-80 transition-opacity'>
              Get Started
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className='lg:hidden flex items-center gap-3'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            <button
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className='p-2 rounded-lg text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors'>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className='fixed top-[60px] sm:top-[68px] left-0 right-0 z-40 lg:hidden
              bg-white/95 dark:bg-[#0A0A0B]/95 backdrop-blur-md
              border-t border-black/10 dark:border-white/10
              shadow-xl shadow-black/10 dark:shadow-black/50'
          >
            <div className='flex flex-col px-5 py-4 gap-1'>
              {navLinks.map(({ label, href, isLink }) =>
                isLink ? (
                  <Link key={label} to={href} onClick={closeMenu}
                    className='py-3 px-3 text-[16px] font-medium text-black dark:text-white
                      rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors border-b border-black/5 dark:border-white/5 last:border-0'>
                    {label}
                  </Link>
                ) : (
                  <a key={label} href={href} onClick={closeMenu}
                    className='py-3 px-3 text-[16px] font-medium text-black dark:text-white
                      rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors border-b border-black/5 dark:border-white/5 last:border-0'>
                    {label}
                  </a>
                )
              )}

              {/* Get Started — mobile CTA */}
              <div className='pt-3 pb-1'>
                <Link to="/auth" onClick={closeMenu}
                  className='flex items-center justify-center w-full
                    bg-black dark:bg-white text-white dark:text-black
                    rounded-full py-3 text-[15px] font-semibold
                    hover:opacity-85 active:scale-[0.98] transition-all duration-200'>
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            className='fixed inset-0 z-30 lg:hidden bg-black/20 dark:bg-black/40 backdrop-blur-[1px]'
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar