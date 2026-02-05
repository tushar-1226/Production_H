import React, { useEffect } from 'react'
import assets from '../assets/assets'


const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {

    if (theme == "dark") {
      document.documentElement.classList.add("dark")
    }
    else {
      document.documentElement.classList.remove("dark")
    }
  })
  return (
    <>
      <button>
        {theme === 'dark' ? (
          <img onClick={() => setTheme('light')} src={assets.sunIcon}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
        ) : (
          <img onClick={() => setTheme('dark')} src={assets.moonIcon}
            className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
        )}
      </button>
    </>  
  )
}

export default ThemeToggleBtn
