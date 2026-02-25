import React from 'react'
import { ArrowLeft } from 'lucide-react'
import assets from '../assets/assets'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className='relative flex items-center justify-center w-full p-5'>
          <ArrowLeft onClick={() => navigate(-1)}  className='absolute h-10 w-10 p-2 left-5 bg-gray-300  rounded-full m-7 cursor-pointer' />
          <p className='text-4xl font-semibold'>Your Cart</p>
        </div>
      </div>
      <div>


        <div className="mx-12 my-6 flex max-w-4xl bg-gray-300 rounded-xl shadow-md p-4 md:p-6 gap-4">

          <div className="h-50 flex-shrink-0">
            <img src={assets.Sprite} alt="Drink" className="w-full h-full object-contain" />
          </div>
          <div className='flex flex-col'>
            <div>
              <p className='text-xl px-2 font-semibold'>Sprite Drinks</p>
              <p className='px-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil esse soluta repudiandae natus, veritatis laborum.</p>
            </div>
            <div className='p-2'>
              <p>99 rs</p>
            </div>
            <div className="flex items-center px-2 gap-3">
              <button className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span className="font-medium">1</span>
              <button className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>
            <div className='flex gap-10 mt-4'>
              <div>
                <button className='bg-gray-400 p-2 rounded-xl'>Remove</button>
              </div>
              <div>
                <button className='bg-gray-400 p-2 rounded-xl'>Buy this Now</button>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default Cart
