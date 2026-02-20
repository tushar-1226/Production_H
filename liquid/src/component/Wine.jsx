import React, { useRef, useState, useEffect } from 'react'
import assets from '../assets/assets'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Wine = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const wine = [
    {
      id: 1,
      title: "Red Label Reserve",
      description: "Bold Flavor With A Vibrant Smoky Finish",
      price: 22.00,
      image: assets.Redlabel
    },
    {
      id: 2,
      title: "Black Label Signature",
      description: "Rich Aged Blend With Deep Smoky Character",
      price: 35.00,
      image: assets.Blacklabel
    },
    {
      id: 3,
      title: "Crimson Valley Reserve",
      description: "Rich & Full-Bodied Red Wine With Dark Berry Notes",
      price: 18.00,
      image: assets.Crimson
    },
    {
      id: 4,
      title: "Scarlet Crown Premium",
      description: "Smooth Texture With Cherry & Vanilla Finish",
      price: 22.00,
      image: assets.ScarletCrown
    },
    {
      id: 5,
      title: "Dark Ember Red",
      description: "Bold & Intense Flavor With Smoky Oak Finish",
      price: 20.00,
      image: assets.DarkAmber
    },
    {
      id: 6,
      title: "Ruby Crest Classic",
      description: "Soft Tannins With A Smooth Balanced Taste",
      price: 16.00,
      image: assets.RubyCrest
    },

  ]
  const handleScroll = (direction) => {
    const scrollAmount = 300;
    let move;

    if (direction === "right") {
      move = scrollAmount;
    } else {
      move = -scrollAmount;
    }

    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: move,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;


      setShowLeftArrow(scrollLeft > 0);


      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <div className='flex flex-col p'>
      <div className='px-9 py-3'>
        <p className='text-2xl font-semibold dark:text-white'>
          Liquour
        </p>
      </div>

      <div className='relative w-full px-5 '>

        {showLeftArrow && (
          <ChevronLeft
            size={40}
            onClick={() => handleScroll("left")}
            className='absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
          />
        )}

        <div ref={scrollRef}
          onScroll={checkScrollPosition} className="flex w-full rounded-xl gap-8 border border-gray-900  dark:border-gray-500 mx-2 p-2 overflow-x-auto scrollbar-hide scroll-smooth" >
          {wine.map((drinks) => (
            <div key={drinks.id} className='flex flex-col flex-shrink-0 justify-center items-center py-4  border-2 rounded-2xl dark:bg-[#1a1a1b] dark:border-gray-500 '>
              <div>
                <img src={drinks.image} alt={drinks.title} className='h-40 rounded-sm' />
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-center p-2 dark:text-white'>
                  <p className='font-extrabold'>{drinks.title}</p>
                  <p className='max-w-[250px]'>{drinks.description}</p>
                </div>

                <div className='flex justify-center items-center gap-10'>
                  <div>
                    <button className='border-2 px-4 py-2 rounded-full cursor-pointer dark:text-white'>${drinks.price}</button>
                  </div>
                  <div>
                    <Link to={`/wine/${drinks.id}`} className='border-2 bg-gray-400 dark:border-white px-3 py-2 rounded-full cursor-pointer'>Shop now</Link>
                  </div>
                </div>
              </div>

            </div>
          )
          )}

        </div>
        {showRightArrow && (
          <ChevronRight
            onClick={() => handleScroll("right")}
            size={40}
            className='absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
          />
        )}
      </div>
    </div >
  )
}


export default Wine
