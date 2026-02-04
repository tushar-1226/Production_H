import React from 'react'

const Container = () => {
  const reasons = [
    { title: 'Premium Quality', desc: 'Where quality meets elegance.' },
    { title: 'Trusted Brands', desc: 'Brands have Global Recognition.' },
    { title: 'Wide Selection', desc: 'A flavour for every mood.' },
    { title: 'Customer Loved', desc: 'Rated by real drinkers.' }
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full py-12 md:py-20 gap-10 lg:gap-20 px-6 md:px-12">

      <div className="text-center lg:text-left w-full lg:w-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-bold leading-tight text-white drop-shadow-sm">
          Refined Sips <br />
          for Refined Tastes
        </h1>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <div className="w-full max-w-[380px] border-2 border-gray-600 rounded-2xl why_liquid mx-auto bg-[#111113] text-white shadow-2xl">
          <div className="p-6 sm:p-8">
            <p className="flex justify-center text-2xl sm:text-3xl font-semibold mb-6">Why Liquid?</p>
            <div className="flex flex-col gap-4">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="p-4 border border-gray-600 rounded-xl hover:shadow-lg hover:scale-105 hover:border-[#00FFD1] transition-all duration-300 cursor-pointer bg-[#1a1a1d]"
                >
                  <p className="text-lg font-medium text-[#00FFD1]">{reason.title}</p>
                  <p className="text-sm sm:text-base text-gray-300 mt-1">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Container