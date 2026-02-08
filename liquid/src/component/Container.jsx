import React from 'react'
import { useNavigate } from 'react-router-dom'
import { banners } from '../assets/assets'

const Container = () => {
  const navigate = useNavigate()

  return (
    <div className="">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll2 {
          animation: scroll 60s linear infinite;
        }

      `}</style>

      <div className="banner-wrapper overflow-hidden width-full">
        <div className="animate-scroll2 flex w-max">
          
          
          {banners.map((banner, index) => (
            <img 
              key={`banner-1-${index}`} 
              src={banner} 
              alt={`Banner ${index + 1}`}
              className="h-100 "
            />
          ))}
                  
          {banners.map((banner, index) => (
            <img 
              key={`banner-2-${index}`} 
              src={banner} 
              alt={`Banner ${index + 1}`}
              className="h-100"
            />
          ))}
        </div>
      </div>

      <button 
        className='bg-gray-300 p-2 mt-4 rounded hover:bg-gray-400 transition' 
        onClick={() => navigate('/shop')}
      >
        Go to Shop
      </button>
    </div>
  )
}

export default Container