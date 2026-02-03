import React from 'react'

const Container = () => {
  const reasons = [
    { title: 'Premium Quality', desc: 'Where quality meets elegance.' },
    { title: 'Trusted Brands', desc: 'Brands have Global Recognition.' },
    { title: 'Wide Selection', desc: 'A flavour for every mood.' },
    { title: 'Customer Loved', desc: 'Rated by real drinkers.' }
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full py-8 md:py-12 gap-6 md:gap-10 bg-amber-600 px-4">

      <div className="text-center lg:text-left w-full lg:w-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-semibold leading-tight">
          Refined Sips <br />
          for Refined Tastes
        </h1>
      </div>

      <div className="flex justify-center w-full lg:w-auto">
        <div className="w-full max-w-[350px] min-h-[450px] lg:mt-10 category border-2 border-gray-200 rounded-2xl why_liquid mx-auto">
          <div className="m-5">
            <p className="flex justify-center text-xl sm:text-2xl">Why Liquid?</p>
          </div>
          <div className="flex flex-col gap-3 m-5">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="text-base sm:text-lg p-3 border border-2 category border-gray-500 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: "#111113" }}
              >
                <p>{reason.title}</p>
                <p className="text-sm sm:text-base">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Container