import React, { useState, useEffect } from 'react'
import { ShoppingBag, Heart, Star, Tag } from 'lucide-react'
import { drinksData } from '../data/drinkData'

const Aboutdrink = ({ drinkId = 1 }) => {
  const drink = drinksData.find(d => d.id === drinkId) || drinksData[0]
  
  const [initialImg, setInitialImg] = useState(drink.images[0])
  const [selectedFlavour, setSelectedFlavour] = useState(drink.flavours[0])

  useEffect(() => {
    setInitialImg(drink.images[0])
    setSelectedFlavour(drink.flavours[0])
  }, [drinkId, drink.images, drink.flavours])

  const changeImg = (img) => {
    setInitialImg(img)
  }

  return (
    <div className='mx-auto px-4 py-8'>
      <div className='bg-white dark:bg-[#1a1a1b] dark:text-white shadow-xl overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10'>
          
          
          <div className='flex flex-col-reverse sm:flex-row gap-4'>
            
            <div className='flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible'>
              {drink.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => changeImg(img)}
                  className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${initialImg === img ? 'border-gray-500 shadow-lg' : 'border-gray-200 hover:border-gray-400'}`}>
               
                  <img
                    src={img}
                    className='w-20 h-20 p-3 sm:w-24 sm:h-24 object-cover'
                    alt={`${drink.name}${index + 1}`}
                  />
                </div>
              ))}
            </div>

            
            <div className='flex-1 bg-gradient-to-br from-gray-50 to-gray-300 flex items-center justify-center'>
              <img 
                src={initialImg} 
                className='w-full h-auto max-h-[500px] object-contain transition-all duration-500 hover:scale-102' 
                alt={drink.name} 
              />
            </div>
          </div>

  
          <div className='flex flex-col'>
            
            <div className='mb-6'>
              <h1 className='text-4xl font-bold mb-3'>{drink.name}</h1>
              
            
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full'>
                  <Star size={18} className='fill-orange-500 text-orange-500' />
                  <span className='font-semibold'>{drink.rating}</span>
                </div>
                <p className=''>({drink.reviews} reviews)</p>
              </div>

              
              <div className='flex items-baseline gap-2'>
                <p className='text-4xl font-bold'>${drink.price}</p>
                <p className='text-lg line-through'>${(drink.price * 1.2).toFixed(2)}</p>
                <span className='bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-semibold'>17% OFF</span>
              </div>
            </div>

            
            <p className=' leading-relaxed mb-6 border-b pb-6'>{drink.description}</p>
            
            
            <div className='mb-8'>
              <p className='font-semibold text-lg mb-4'>Choose Your Flavor</p>
              <div className='flex gap-3 flex-wrap'>
                {drink.flavours.map((flavour, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFlavour(flavour)}
                    className={`px-5 py-2.5 border-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedFlavour === flavour 
                        ? 'bg-black text-white shadow-lg scale-105' 
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    {flavour}
                  </button>
                ))}
              </div>
            </div>

            
            <div className='flex gap-4 mb-8'>
              <button className='flex-1 bg-black text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-101'>
                <ShoppingBag size={22} />
                Add to Cart
              </button>
              <button className='border-2 border-gray-300 hover:border-gray-500  px-5 py-4 rounded-xl transition-all duration-300 group'>
                <Heart size={22} className='text-gray-600 group-hover:text-red-500 group-hover:fill-red-500 transition-all' />
              </button>
            </div>

            
            <div className='bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200'>
              <div className='flex items-center gap-2 mb-4'>
                <Tag className='text-green-600' size={24} />
                <h2 className='font-bold text-xl text-gray-900'>Available Offers</h2>
              </div>
              <ul className='space-y-3'>
                {drink.coupons.map((coupon, index) => (
                  <li key={index} className='flex items-start gap-3 text-gray-700'>
                    <span className='bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5'>
                      {index + 1}
                    </span>
                    <span className='leading-relaxed'>{coupon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutdrink