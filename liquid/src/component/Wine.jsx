import React from 'react'
import assets from '../assets/assets'
import { Link } from 'react-router-dom'

const Wine = () => {

  const wine = [
    {
      id: 1,
      title: "Crimson Valley Reserve",
      description: "Rich & Full-Bodied Red Wine With Dark Berry Notes",
      price: 18.00,
      image: assets.Crimson
    },
    {
      id: 2,
      title: "Scarlet Crown Premium",
      description: "Smooth Texture With Cherry & Vanilla Finish",
      price: 22.00,
      image: assets.ScarletCrown
    },
    {
      id: 3,
      title: "Dark Ember Red",
      description: "Bold & Intense Flavor With Smoky Oak Finish",
      price: 20.00,
      image: assets.DarkAmber
    },
    {
      id: 4,
      title: "Ruby Crest Classic",
      description: "Soft Tannins With A Smooth Balanced Taste",
      price: 16.00,
      image: assets.RubyCrest
    }
  ]
  return (
    <div className='flex flex-col p'>
      <div className='px-9 py-3'>
        <p className='text-2xl font-semibold dark:text-white'>
          Liquour
        </p>
      </div>

      <div className='px-5'>
        <div className="flex w-full rounded-xl gap-8 border border-gray-900  dark:border-gray-500 mx-2 p-2 overflow-x-auto scrollbar-hide scroll-smooth" >
          {wine.map((drinks) => (
            <div key={drinks.id} className='flex flex-col justify-center items-center py-4  border-2 rounded-2xl'>
              <div>
                <img src={drinks.image} alt={drinks.title} className='h-40 rounded-sm' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-center p-2'>
                  <p className='font-extrabold'>{drinks.title}</p>
                  <p className='max-w-[250px]'>{drinks.description}</p>
                </div>

                <div className='flex justify-center items-center gap-10'>
                  <div>
                    <button className='border-2 px-4 py-2 rounded-full cursor-pointer'>${drinks.price}</button>
                  </div>
                  <div>
                    <Link to={`/cold/${drinks.id}`} className='border-2 bg-gray-400 px-3 py-2 rounded-full cursor-pointer'>Shop now</Link>
                  </div>
                </div>
              </div>

            </div>
          )
          )}

        </div>
      </div>
    </div >
  )
}

export default Wine
