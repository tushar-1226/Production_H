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
    <div className='flex flex-col justify-center items-center md:flex-row mx-auto  '>

      <div className='m-20' id='about_us'>

        <div className='flex flex-col justify-center items-center mb-10'>
          <p className='text-5xl our_story '>What can you sip today?</p>
          <p className='text_para '>From everyday refreshment to premium pours, we bring together drinks that fit every taste, mood, and moment.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10   ">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className=' p-7 flex flex-col items-center text-center hover:shadow-lg bg-[#111113] border border-[#333333] text-[#E8E8E8] transition-all duration-300 ease-out cursor-pointer  hover:-translate-y-[6px]  hover:border-[#00FFD1]'>

              <div className='mb-4'>
                <img src={drink.image} alt={drink.title} className='h-32 w-auto object-contain' />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{drink.title}</h3>
                <p className="">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Page2
