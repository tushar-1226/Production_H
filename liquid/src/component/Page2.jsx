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

  const drinks = [
    {
      id: 1,
      image: 'can3.png',
      title: 'Wine & Spirits',
      description: 'We curate premium wines and spirits crafted for celebrations, nights out, and special occasions.'
    },
    {
      id: 2,
      image: 'tea.png',
      title: 'Coffee & Tea',
      description: 'From energizing coffee to calming tea, brewed to elevate your daily rituals.'
    },
    {
      id: 3,
      image: 'softdrink.png',
      title: 'Soft Drinks',
      description: 'Classic and modern refreshments that keep every moment light, fresh, and flavorful.'
    },
    {
      id: 4,
      image: 'energydrink.png',
      title: 'Signature & Special Drinks',
      description: 'Unique blends and exclusive drinks designed to create unforgettable experiences.'
    }
  ];

  return (
    <div className='flex flex-col mb-20   '>
      {/* <div className='text-5xl mb-10 our_story flex justify-center items-center '>
        <h1>The Story Behind Every Sip</h1>
      </div>
      <div className='our_story_text px-40 text-2xl -mt-7 '>
        <p>At the heart of our brand is our relationship with people. We proudly serve beverages for all ages — from playful childhood moments to meaningful adult celebrations. With 10,000+ daily orders and the trust of 100+ partner companies, our growth is driven by the smiles, loyalty, and confidence our customers place in us every single day.</p>
      </div>   */}

      <div className='m-20'>

        <div className='flex flex-col justify-center items-center mb-10'>
          <p className='text-5xl our_story'>What can you sip today?</p>
          <p className='text_para'>From everyday refreshment to premium pours, we bring together drinks that fit every taste, mood, and moment.</p>
        </div>

        <div className="grid grid-cols-4 gap-8 px-10">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className='category border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'>

              <div className='mb-4'>
                <img src={drink.image} alt={drink.title} className='h-32 w-auto object-contain' />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{drink.title}</h3>
                <p className="text-gray-600">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
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
