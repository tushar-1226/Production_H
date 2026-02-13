// Aboutdrink.jsx - Refactored component
import React, { useState } from 'react'
import { ShoppingBag, Heart } from 'lucide-react'
import { drinksData } from '../data/drinkData'

const Aboutdrink = ({ drinkId = 1 }) => {
  // Find the drink by ID, default to first drink if not found
  const drink = drinksData.find(d => d.id === drinkId) || drinksData[0]
  
  const [initialImg, setInitialImg] = useState(drink.images[0])
  const [selectedFlavour, setSelectedFlavour] = useState(drink.flavours[0])

  const changeImg = (img) => {
    setInitialImg(img)
  }

  return (
    <div className='border-[4px] px-6 py-10 flex gap-12 border-gray-400 transition-opacity ease-in duration-500 opacity-100'>
      {/* Image Gallery */}
      <div className='flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full gap-4'>
          {drink.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => changeImg(img)}
              className='border-2 border-gray-500 cursor-pointer'
              alt={`${drink.name} view ${index + 1}`}
            />
          ))}
        </div>
        <div className='w-full sm:w-[80%]'>
          <img src={initialImg} className='w-full h-auto' alt={drink.name} />
        </div>
      </div>

      {/* Product Info */}
      <div className='flex-1'>
        <h1 className='text-3xl font-bold'>{drink.name}</h1>
        <div className='flex items-center gap-2 mt-3'>
          <p>{drink.rating}⭐</p>
          <p className='text-gray-600'>{drink.reviews} reviews</p>
        </div>
        <p className='text-3xl font-semibold mt-4'>${drink.price}</p>
        
        <p className='mt-5 text-gray-600'>{drink.description}</p>
        
        {/* Flavours */}
        <div className='mt-6'>
          <p className='font-semibold mb-3'>Different flavour</p>
          <div className='flex gap-3 flex-wrap'>
            {drink.flavours.map((flavour, index) => (
              <button
                key={index}
                onClick={() => setSelectedFlavour(flavour)}
                className={`px-4 py-2 border-2 rounded ${
                  selectedFlavour === flavour 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-300'
                }`}
              >
                {flavour}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4 mt-8'>
          <button className='bg-black text-white px-8 py-3 flex items-center gap-2'>
            <ShoppingBag size={20} />
            Add to cart
          </button>
          <button className='border-2 border-gray-300 px-4 py-3'>
            <Heart size={20} />
          </button>
        </div>

        {/* Coupons */}
        <div className='mt-8'>
          <h2 className='font-bold text-xl mb-3'>Coupons and Offers</h2>
          <ul className='space-y-2'>
            {drink.coupons.map((coupon, index) => (
              <li key={index} className='text-gray-700'>• {coupon}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutdrink