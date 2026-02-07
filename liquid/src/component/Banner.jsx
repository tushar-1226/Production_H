import React from 'react'

const Banner = () => {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
                <h1 className="text-9xl liq-text opacity-90 text-gray-700">
                    LIQUID
                </h1>
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center pt-50">
                <div className="flex w-80 relative">
                    <svg
                        width="350"
                        height="350"
                        className="absolute left-1/2 -translate-x-1/2 -top-12 -z-10"
                        viewBox="0 0 350 350"
                    >
                        <circle cx="175" cy="175" r="125" fill="#fffff" />
                        <defs>
                            <path
                                id="circlePath"
                                d="M 175,175 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                            />
                        </defs>
                        <text fontSize="18" fill="#E8E8E8" fontWeight="500">
                            <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                                <animate
                                    attributeName="startOffset"
                                    values="0%;100%"
                                    dur="10s"
                                    repeatCount="indefinite"
                                />
                                Spark • Chill • Lush • Zest • Sip • Nectar • Divine • Umami • Burst •
                                Tingle • Crave • Punch • Gusto • Essence • Aroma • Trust
                            </textPath>
                        </text>
                    </svg>

                    <img src="logo1.png" className="w-full relative z-10" alt="logo" />
                </div>

            </div>

        </div>

    )
}

export default Banner

