import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'

const energydrinks = [
  {
    id: 1,
    title: "Campa Energy Drink",
    description: "Boosts Energy, Focus, And Instant Refreshment",
    price: 3.50,
    image: assets.Campa
  },
  {
    id: 2,
    title: "Monster Energy",
    description: "High Power Energy For Intense Performance",
    price: 4.00,
    image: assets.monster2
  },
  {
    id: 3,
    title: "Red Bull",
    description: "Gives You Wings With Instant Energy",
    price: 4.39,
    image: assets.Redbull
  },
  {
    id: 4,
    title: "Twist",
    description: "Refreshing Citrus Flavor With Instant Energy",
    price: 3.60,
    image: assets.Twist
  },
  {
    id: 5,
    title: "Metrik",
    description: "Strong Energy With Long-Lasting Focus",
    price: 5.60,
    image: assets.Metrik
  },
]

const Banner = () => {


  return (
    <div className="flex w-full rounded-xl py-3 gap-8">

      {energydrinks.map((drink) => (
        <div key={drink.id} className='flex flex-col justify-center items-center border-2 rounded-xl py-3 hover:shadow-2xl transition-all duration-600 ease-out hover:scale-102'>
          <div>
            <img src={drink.image} className='h-40 rounded-sm' />
          </div>

          <div className='flex flex-col justify-center items-center'>

            <div className='text-center p-2'>
              <p className='font-extrabold'> {drink.title}</p>
              <p className='max-w-[250px]'>{drink.description}</p>
            </div>

            <div className='flex gap-10'>
              <div>
                <button className='border-2 px-4 py-2 rounded-full cursor-pointer'>${drink.price}</button>
              </div>
              <div>
                <button className=' border-2 bg-gray-400  px-3 py-2 rounded-full cursor-pointer'>Shop now</button>
              </div>
            </div>

          </div>
        </div>
      ))}

    </div>
  )
}

export default Banner