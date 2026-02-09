import React, { useState, useEffect, useRef } from 'react'
import assets from '../assets/assets'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const energydrinks = [
  {
    id: 1,
    title: "Campa Energy Drink",
    description: "Boosts Energy, Focus, And Instant Refreshment",
    price: 3.50,
    image: assets.Campa
  },
  {
    id: 2,
    title: "Monster Energy",
    description: "High Power Energy For Intense Performance",
    price: 4.00,
    image: assets.monster2
  },
  {
    id: 3,
    title: "Red Bull",
    description: "Gives You Wings With Instant Energy",
    price: 4.39,
    image: assets.Redbull
  },
  {
    id: 4,
    title: "Twist",
    description: "Refreshing Citrus Flavor With Instant Energy",
    price: 3.60,
    image: assets.Twist
  },
  {
    id: 5,
    title: "Metrik",
    description: "Strong Energy With Long-Lasting Focus",
    price: 5.60,
    image: assets.Metrik
  },
  {
    id: 6,
    title: "Guru",
    description: "Strong Energy With Long-Lasting Focus",
    price: 4.60,
    image: assets.Guru
  },
]

const EnergyDrink = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (direction) => {
    const scrollAmount = 300;

    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='px-9 py-3'>
        <p className='text-2xl font-semibold'>Energy Drink</p>
      </div>

      <div className="relative w-full px-5">
        
        {showLeftArrow && (
          <ChevronLeft 
            size={40}  
            onClick={() => handleScroll("left")} 
            className='absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
          />
        )}
        

        <div 
          ref={scrollRef} 
          onScroll={checkScrollPosition}
          className="flex w-full rounded-xl gap-8 border border-gray-900 mx-2 p-2 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {energydrinks.map((drink) => (
            <div key={drink.id} className='flex flex-col flex-shrink-0 justify-center items-center border-2 rounded-xl py-3 hover:shadow-2xl transition-all duration-600 ease-out hover:scale-102'>
              <div>
                <img src={drink.image} className='h-40 rounded-sm' alt={drink.title} />
              </div>

              <div className='flex flex-col justify-center items-center'>
                <div className='text-center p-2'>
                  <p className='font-extrabold'>{drink.title}</p>
                  <p className='max-w-[250px]'>{drink.description}</p>
                </div>

                <div className='flex gap-10'>
                  <div>
                    <button className='border-2 px-4 py-2 rounded-full cursor-pointer'>${drink.price}</button>
                  </div>
                  <div>
                    <button className='border-2 bg-gray-400 px-3 py-2 rounded-full cursor-pointer'>Shop now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {showRightArrow && (
          <ChevronRight 
            onClick={() => handleScroll("right")} 
            size={40} 
            className='absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
          />
        )}
      </div>
    </div>
  )
}

export default EnergyDrink