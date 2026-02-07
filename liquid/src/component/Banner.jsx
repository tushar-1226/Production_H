import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'

const dadu_drink = [
  assets.dadu1, 
  assets.dadu2, 
  assets.dadu3
]

const monster_drink = [
  assets.monster1, 
  assets.monster2, 
  assets.monster3, 
  assets.monster4, 
  assets.monster5, 
  assets.monster6, 
  assets.monster7
]

const Banner = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % dadu_drink.length)
    }, 3000) 

    const interval2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % monster_drink.length)
    }, 3000) 

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [])

  return (
    <div className='flex gap-5'>
      <div className="relative">
        <img 
          src={dadu_drink[currentIndex1]} 
          alt="Dadu drink"
          className="h-96 object-cover transition-opacity duration-500"
        />
      </div>
      <div className="relative">
        <img 
          src={monster_drink[currentIndex2]} 
          alt="Monster drink"
          className="h-96 object-cover transition-opacity duration-500"
        />
      </div>
    </div>
  )
}

export default Banner