import React, { useState } from 'react'
import { CampaImg } from '../assets/assets'


const Aboutdrink = () => {

  const [initialImg, setInitialImg] = useState(CampaImg[0])

  const changeImg = (img) => {
      setInitialImg(img)
  }
  return (
    <div className='flex flex-col'>
      <div className=" h-120 w-120 mb-5">
        <img src={initialImg} className='' />
      </div>
      <div>
          <div className='flex h-30 gap-3 '>
            <img src={CampaImg[0]} onClick={() => changeImg(CampaImg[0])} className='border-2 border-gray-500 cursor-pointer'/>
            <img src={CampaImg[1]} onClick={() => changeImg(CampaImg[1])} className='border-2 border-gray-500 cursor-pointer'/>
            <img src={CampaImg[2]} onClick={() => changeImg(CampaImg[2])} className='border-2 border-gray-500 cursor-pointer'/>
            <img src={CampaImg[3]} onClick={() => changeImg(CampaImg[3])} className='border-2 border-gray-500 cursor-pointer'/>
            <img src={CampaImg[4]} onClick={() => changeImg(CampaImg[4])} className='border-2 border-gray-500 cursor-pointer'/>
          </div>
      </div>
    </div>
    
  )
}

export default Aboutdrink
