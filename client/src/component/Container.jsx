import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../assets/assets'

const Container = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center pt-20'>
        <h1 className='text-4xl font-semibold sm:text-5xl md:text-6xl xl:text-[84px] text-center xl:leading-[95px] dark:text-white max-w-5xl'>Refreshment Crafted for Every Mood</h1>
      </div>
      <div className='flex relative justify-center gap-2'>

        <div>
          <img src={Avatar[0]} className='h-[400px]' />
        </div>

        <div>
          <img src={Avatar[1]} className='h-[400px]' />
        </div>

        <div>
          <img src={Avatar[2]} className='h-[400px]' />
        </div>

        <div>
          <img src={Avatar[3]} className='h-[400px]' />
        </div>

      </div>
    </div>
  )
}

export default Container