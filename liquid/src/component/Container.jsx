import React from 'react'

const Container = () => {
  const reasons = [
    { title: 'Premium Quality', desc: 'Where quality meets elegance.' },
    { title: 'Trusted Brands', desc: 'Brands have Global Recognition.' },
    { title: 'Wide Selection', desc: 'A flavour for every mood.' },
    { title: 'Customer Loved', desc: 'Rated by real drinkers.' }
  ]

  return (
    <div className="flex items-center justify-center w-full py-12 gap-10 bg-amber-600  ">

      <div>
        <h1 className="text-5xl uppercase font-semibold leading-tight ">
          Refined Sips <br />
          for Refined Tastes
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center pt-20 relative">
        <div className="flex w-80 relative">
          <svg width="350" height="350" className="absolute left-1/2 transform -translate-x-1/2 -top-12 -z-10" viewBox="0 0 350 350">
            <circle cx="175" cy="175" r="125" fill="#ff9a3c" />
            <defs>
              <path id="circlePath" d="M 175,175 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" />
            </defs>
            <text fontSize="18" fill="#E8E8E8" fontWeight="500" className="round-text">
              <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                <animate attributeName="startOffset" values="0%;100%" dur="10s" repeatCount="indefinite" />
                Spark • Chill • Lush • Zest • Sip • Nectar • Divine • Umami • Burst • Tingle • Crave • Punch • Gusto • Essence • Aroma • Trust • Spark • Chill • Lush • Zest • Sip • Nectar • Divine • Umami • Burst • Tingle • Crave • Punch • Gusto • Essence • Aroma • Trust
              </textPath>
            </text>
          </svg>
          <img src="logo1.png" className="w-full" alt="logo" />
        </div>
        <div className="-mt-9">
          <button className="review_card px-4 py-3 rounded-4xl">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-[350px] min-h-[450px] mt-10 category border-2 border-gray-200 rounded-2xl why_liquid">
          <div className="m-5">
            <p className="flex justify-center text-2xl">Why Liquid?</p>
          </div>
          <div className="flex flex-col gap-3 m-5">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="text-lg p-3 border border-2 category border-gray-500 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ backgroundColor: "#111113" }}
              >
                <p>{reason.title}</p>
                <p className="text-base">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container