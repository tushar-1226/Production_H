import React from 'react'
import { Link } from 'react-router-dom'
import { Banners } from '../assets/assets'

const Container = () => {
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

      <div className="banner-wrapper overflow-hidden w-full">
        <div className="animate-scroll2 flex w-max">
          
          {Banners.map((banner, index) => (
            <img 
              key={`banner-1-${index}`} 
              src={banner} 
              alt={`Banner ${index + 1}`}
              className="h-96 w-auto"
            />
          ))}
                  
          {Banners.map((banner, index) => (
            <img 
              key={`banner-2-${index}`} 
              src={banner} 
              alt={`Banner ${index + 1}`}
              className="h-96 w-auto"
            />
          ))}
        </div>
      </div>

      <Link to='/shop' className='inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
        Shop
      </Link>
      
    </div>
  )
}

export default Container