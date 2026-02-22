import React from 'react'

const Category = () => {
  const categories = [
    "Energy Drink",
    "Cold Drink",
    "Soft Drink",
    "Wine",
    "Vodka",
    "Coffee & Tea"
  ]

  return (

    <div className='px-8 pt-5 pb-2'>
      <ul className='flex gap-4'>
        {categories.map((item, index) => (
          <li
            key={index}
            className='bg-gray-300 dark:bg-[#1a1a1b] dark:border-gray-400 dark:text-white border-2 border-gray-700 p-2 rounded-full cursor-pointer'
          >
            {item}
          </li>
        ))}
      </ul>

    </div>

  )
}

export default Category
