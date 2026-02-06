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
      title: 'Special Drinks',
      description: 'Unique blends and exclusive drinks designed to create unforgettable experiences.'
    }
  ];

  return (
    <div className='flex flex-col justify-center items-center md:flex-row mx-auto  '>

      <div className='m-20 w-full' id='about_us'>

        <div className='flex flex-col justify-center items-center mb-10 w-full px-5 dark:text-[#E8E8E8]'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>What can you sip today?</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-[20px] mt-3 md:mt-4 sm:justify-center text-center max-w-3xl'>From everyday refreshment to premium pours, we bring together drinks that fit every taste, mood, and moment.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 md:px-10 max-w-6xl 2xl:max-w-full mx-auto">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className='p-3 md:p-7 md:max-w-sm lg:max-w-md flex flex-col lg:flex-row justify-center items-center text-center hover:shadow-lg dark:bg-[#111113] border border-[#333333] dark:text-[#E8E8E8] transition-all duration-300 ease-out cursor-pointer  hover:-translate-y-[6px]  hover:border-[#00FFD1]'>

              <div className='mb-4'>
                <img src={drink.image} alt={drink.title} className='h-32 w-auto object-contain' />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-2">{drink.title}</h3>
                <p className="hidden lg:block max-w-xl">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Page2
