import React from 'react'
import assets from '../assets/assets'


const ThemeToggleBtn = ({theme, setTheme}) => {
  return (
    <div>
      <img  src={assets.moonIcon} className='size-8.5 p-1.5 border border-gray-500 rounded-full'/>
    </div>
  )
}

export default ThemeToggleBtn
