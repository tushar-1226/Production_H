import React from 'react'
import { Store, MapPinHouse, ScrollText } from "lucide-react";


const Page2 = () => {

  const brandLogos = [
    { name: "Red Bull", src: "/redbull.png" },
    { name: "Smirnoff", src: "/smirnoff.png" },
    { name: "Starbucks", src: "/starbucks.png" },
    { name: "Nescafe", src: "/nescafe.png" },
    { name: "Fanta", src: "/fanta.png" },
    { name: "Coca-Cola", src: "/cocacola.png" },
    { name: "Sprite", src: "/sprite.png" },
    { name: "Pepsi", src: "/pepsi.png" },
    { name: "Monster", src: "/monster.png" },
  ];

  return (
    <div className='flex flex-col pb-10 pt-40 '>
      <div className='text-5xl mb-10 our_story flex justify-center items-center '>
        <h1>The Story Behind Every Sip</h1>
      </div>
      <div className='our_story_text px-40 text-2xl -mt-7'>
        <p>At the heart of our brand is our relationship with people. We proudly serve beverages for all ages — from playful childhood moments to meaningful adult celebrations. With 10,000+ daily orders and the trust of 100+ partner companies, our growth is driven by the smiles, loyalty, and confidence our customers place in us every single day.</p>
      </div>


      <div className='flex justify-center items-center p-20 gap-40 leo'>

        <div className='flex items-center gap-4 justify-between '>
          <div>
            <p className='text-5xl font-bold text-gray-700'>10,000+</p>
            <p className='text-2xl text-gray-500'>orders</p>
          </div>
          <Store className='w-16 h-16 ' />
        </div>

        <div className='flex items-center gap-4'>
          <div>
            <p className='text-5xl font-bold text-gray-700'>45+</p>
            <p className='text-2xl text-gray-500'>cities</p>
          </div>
          <MapPinHouse className='w-16 h-16' />
        </div>

        <div className='flex items-center gap-4'>
          <div>
            <p className='text-5xl font-bold text-gray-700'>1000+</p>
            <p className='text-2xl text-gray-500'>drinks</p>
          </div>
          <ScrollText className='w-16 h-16' />
        </div>
      </div>
      
      <div className='flex justify-center m-20'>
        <video
          className='opacity-85 h-auto w-[800px]'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div>
          <p className='flex justify-center items-center text-3xl py-5 our_collabs'>
            Our Top Collabs
          </p>
        </div >
        <div className='flex justify-center items-center gap-3'>
          {brandLogos.map((brands, index) => (

            <img src={brands.src} className='h-20 w-auto object-contain transition-all duration-300 ease-out hover:scale-[1.05]' />
          ))}

        </div>

      </div>
    </div>
  )
}

export default Page2
