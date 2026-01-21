import React from 'react'

const Center = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-20 relative '>
            <div className='flex w-80 relative'>
                
                <svg width="350" height="350" className="absolute left-1/2 transform -translate-x-1/2 -top-12 -z-10" viewBox="0 0 350 350">
                    {/* Circle */}
                    <circle cx="175" cy="175" r="125" fill="#ff9a3c" />
                    
                    {/* Path for text - outside the circle */}
                    <defs>
                        <path id="circlePath" d="M 175,175 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" />
                    </defs>
                    
                    {/* Text following the path */}
                    <text fontSize="18" fill="#2c3e50" fontWeight="500" className='round-text'>
                        <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                            <animate attributeName="startOffset" values="0%;100%" dur="10s" repeatCount="indefinite" />
                            Spark • Chill • Lush • Zest • Sip • Nectar • Divine • Umami • Burst • Tingle • Crave • Punch • Gusto • Essence • Aroma • Trust • Spark • Chill • Lush • Zest • Sip • Nectar • Divine • Umami • Burst • Tingle • Crave • Punch • Gusto • Essence • Aroma • Trust 
                        </textPath>
                    </text>
                </svg>
                
                <img src='logo1.png' className='w-full' alt="logo"></img>
            </div>
            <div className='-mt-9'>
                <button className='shopnow px-4 py-3 rounded-4xl'>
                    Shop Now 
                </button>
            </div>
        </div>
    )
}

export default Center