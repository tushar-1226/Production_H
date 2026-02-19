import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'


const Colddrink = () => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);


    const colddrinks = [
        {
            id: 1,
            title: "Sprite",
            description: "Boosts Energy, Focus, And Instant Refreshment",
            price: 3.50,
            image: assets.Sprite
        },
        {
            id: 2,
            title: "Coca Cola",
            description: "High Power Energy For Intense Performance",
            price: 4.00,
            image: assets.CocaCola
        },
        {
            id: 3,
            title: "Pepsi",
            description: "High Power Energy For Intense Performance",
            price: 4.00,
            image: assets.Pepsi
        },
        {
            id: 4,
            title: "Fanta",
            description: "High Power Energy For Intense Performance",
            price: 4.00,
            image: assets.Fanta
        },
        {
            id: 5,
            title: "Thumbs Up",
            description: "High Power Energy For Intense Performance",
            price: 3.00,
            image: assets.ThumbsUp
        },
        {
            id: 6,
            title: "Mountain Dew",
            description: "High Power Energy For Intense Performance",
            price: 3.00,
            image: assets.MountainDew
        }
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
        <div className='flex flex-col w-full mb-10'>
            <div className='px-9 py-3'>
                <p className='text-2xl font-semibold dark:text-white'>Cold Drink</p>
            </div>
            <div className="relative w-full px-5">

                {showLeftArrow && (
                    <ChevronLeft
                        size={40}
                        onClick={() => handleScroll("left")}
                        className='absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-gray-300 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all'
                    />
                )}

                <div ref={scrollRef}
                    onScroll={checkScrollPosition}
                    className="flex w-full rounded-xl gap-8 border border-gray-900  dark:border-gray-500 mx-2 p-2 overflow-x-auto scrollbar-hide scroll-smooth">

                    {colddrinks.map((drink) => (
                        <div key={drink.id} className='flex flex-col flex-shrink-0 justify-center items-center border-2 dark:border-gray-400 dark:text-white dark:bg-[#1a1a1b] rounded-xl py-3 hover:shadow-2xl transition-all duration-600 ease-out hover:scale-102'>
                            <div>
                                <img src={drink.image} alt={drink.title} className='h-40 rounded-sm' />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-center p-2'>
                                    <p className='font-extrabold'>{drink.title}</p>
                                    <p className='max-w-[250px]'>{drink.description}</p>
                                </div>

                                <div className='flex justify-center items-center gap-10'>
                                    <div>
                                        <button className='border-2 px-4 py-2 rounded-full cursor-pointer'>${drink.price}</button>
                                    </div>
                                    <div>
                                        <Link to={`/cold/${drink.id}`} className='border-2 bg-gray-400 px-3 py-2 rounded-full cursor-pointer'>Shop now</Link>
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

export default Colddrink