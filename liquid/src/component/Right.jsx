import React from 'react'

const reasons = [
  { title: 'Premium Quality', desc: 'Where quality meets elegance.' },
  { title: 'Trusted Brands', desc: 'Brands have Global Recognition.' },
  { title: 'Wide Selection', desc: 'A flavour for every mood.' },
  { title: 'Customer Loved', desc: 'Rated by real drinkers.' }
]

const Right = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-[450px] w-[350px] mt-10 category border-2 border-gray-200 rounded-4xl why_liquid'>
        <div className='m-5'>
          <p className='flex justify-center text-2xl'>Why Liquid?</p>
        </div>

        <div className='flex flex-col gap-3 m-5'>
          {reasons.map((reason, i) => (
            <div 
              key={i}
              className='text-lg p-3 bg-gray-100 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer'
            >
              <p>{reason.title}</p>
              <p className='text-base'>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Right