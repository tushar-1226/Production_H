import React from 'react'
import { Banners } from '../assets/assets'

const Banner = () => {
    return (
        <div className='flex justify-center gap-5 p-5 pt-24 '>
            <div className="relative  hover:shadow-lg transition transform hover:scale-102 rounded-xl">
                <img src={Banners[0]} className="min-[440px]:h-[600px] sm:h-[500px] rounded-xl" />

                
                <h2 className="absolute top-0 left-0 p-2 text-white text-3xl font-bold">
                    Stay refreshed with every sip of pure coolness
                </h2>
            </div>
            <div className="hidden sm:block  relative hover:shadow-lg transition transform hover:scale-102 rounded-xl">
                <img src={Banners[1]} className=" sm:h-[500px] rounded-xl" />

                <h2 className="absolute bottom-0 left-0 p-2 text-white text-3xl font-bold">
                    Beat the summer heat with chilled refreshing drinks
                </h2>
            </div>
            <div className="hidden lg:block relative hover:shadow-lg transition transform hover:scale-102 rounded-xl">
                <img src={Banners[2]} className="h-[300px] sm:h-[500px] rounded-xl" />

                <h2 className="absolute top-0 left-0 p-2 text-white text-3xl font-bold">
                    Enjoy every moment with energy packed refreshing beverages
                </h2>
            </div>
            <div className="hidden 2xl:block relative hover:shadow-lg transition transform hover:scale-102 rounded-xl">
                <img src={Banners[3]} className="h-[500px] rounded-xl" />

                <h2 className="absolute bottom-0 left-0 p-2 text-white text-3xl font-bold">
                    Discover your favorite drinks crafted for ultimate refreshment
                </h2>
            </div>
        </div>
    )
}

export default Banner
