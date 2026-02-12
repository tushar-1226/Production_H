import React, { useState } from 'react'
import { CampaImg } from '../assets/assets'
import { ShoppingBag, Heart } from 'lucide-react'

const Aboutdrink = () => {

  const [initialImg, setInitialImg] = useState(CampaImg[0])

  const changeImg = (img) => {
    setInitialImg(img)
  }
  return (
    <div className='flex p-10'>
      <div className='flex flex-col'>
        <div className=" h-130 w-130 mb-5">
          <img src={initialImg} className='rounded-xl border-2' />
        </div>
        <div>
          <div className='flex h-23 gap-3 '>
            <img src={CampaImg[0]} onClick={() => changeImg(CampaImg[0])} className='border-2 border-gray-500 cursor-pointer' />
            <img src={CampaImg[1]} onClick={() => changeImg(CampaImg[1])} className='border-2 border-gray-500 cursor-pointer' />
            <img src={CampaImg[2]} onClick={() => changeImg(CampaImg[2])} className='border-2 border-gray-500 cursor-pointer' />
            <img src={CampaImg[3]} onClick={() => changeImg(CampaImg[3])} className='border-2 border-gray-500 cursor-pointer' />
            <img src={CampaImg[4]} onClick={() => changeImg(CampaImg[4])} className='border-2 border-gray-500 cursor-pointer' />
          </div>
        </div>
      </div>
      <div className=' mx-10'>
        <div>
          <p className="font-bold text-5xl">Campa Energy Gold Boost</p>
          <p className='text-xl py-5'>4.5⭐ 42 reviews</p>
          <p className='text-4xl'>$4.0</p>
          <div className='flex flex-col gap-2 py-5'>
            <div>
              <p className='font-semibold'>Different flavour</p>
            </div>
            <div className='flex gap-3'>
              <img src={CampaImg[5]} className='h-30 border-2 rounded-sm' />
              <img src={CampaImg[6]} className='h-30 border-2 rounded-sm' />
            </div>

          </div>
          <div className="flex items-center gap-3">


            <button className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl w-full">
              <ShoppingBag size={18} />
              Add to cart
            </button>


            <button className="bg-gray-300 p-3 rounded-xl">
              <Heart size={20} />
            </button>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Aboutdrink
