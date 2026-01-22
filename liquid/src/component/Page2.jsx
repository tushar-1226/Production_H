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
    <div className='flex flex-col pb-10 pt-40  '>
      <div className='text-5xl mb-10 our_story flex justify-center items-center '>
        <h1>The Story Behind Every Sip</h1>
      </div>
      <div className='our_story_text px-40 text-2xl -mt-7'>
        <p>At the heart of our brand is our relationship with people. We proudly serve beverages for all ages — from playful childhood moments to meaningful adult celebrations. With 10,000+ daily orders and the trust of 100+ partner companies, our growth is driven by the smiles, loyalty, and confidence our customers place in us every single day.</p>
      </div>


      <div className='flex justify-center items-center p-5 my-20 mx-60 gap-15 stats'>

        <div className='flex items-center gap-4 justify-between ml-0 pl-0 '>
          <div>
            <p className='text-4xl text-gray-700'>10,000+</p>
            <p className='text-2xl text-gray-500'>orders</p>
          </div>
          <img src='order.png' className='w-25'/>
        </div>

        <div className='bg-gray-400 h-20 w-0.5 b'></div>

        <div className='flex items-center gap-4'>
          <div>
            <p className='text-4xl font-bold text-gray-700'>45+</p>
            <p className='text-2xl text-gray-500'>cities</p>
          </div>
          <img src='location.png' className='w-25'/>
        </div>

        <div className='bg-gray-400 h-20 w-0.5 b'></div>

        <div className='flex items-center gap-4'>
          <div>
            <p className='text-4xl font-bold text-gray-700'>1000+</p>
            <p className='text-2xl text-gray-500'>drinks</p>
          </div>
          <img src='drink.png' className='w-25'/>
        </div>
      </div>

      {/* <div className='flex justify-center m-20'>
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
      </div> */}
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
      <div className='m-30'>
        <div className='flex flex-col justify-center items-center mb-10'>
          <p className='text-5xl our_story'>What can you sip today?</p>
          <p className='text_para'>From everyday refreshment to premium pours, we bring together drinks that fit every taste, mood, and moment.</p>
        </div>
        <div className="grid grid-cols-4 gap-8 px-10">
          
          <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <div className='mb-4'>
              <img src='can3.png' className='h-32 w-auto object-contain'/>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Wine & Spirits</h3>
              <p className="text-gray-600">We curate premium wines and spirits crafted for celebrations, nights out, and special occasions.</p>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <div className='mb-4'>
              <img src='tea.png' className='h-32 w-auto object-contain'/>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Coffee & Tea</h3>
              <p className="text-gray-600">From energizing coffee to calming tea, brewed to elevate your daily rituals.</p>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <div className='mb-4'>
              <img src='softdrink.png' className='h-32 w-auto object-contain'/>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Soft Drinks</h3>
              <p className="text-gray-600">Classic and modern refreshments that keep every moment light, fresh, and flavorful.</p>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>
            <div className='mb-4'>
              <img src='energydrink.png' className='h-32 w-auto object-contain'/>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Signature & Special Drinks</h3>
              <p className="text-gray-600">Unique blends and exclusive drinks designed to create unforgettable experiences.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Page2
