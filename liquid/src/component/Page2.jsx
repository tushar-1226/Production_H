import React from 'react'

const Page2 = () => {
  return (
    <div className='flex justify-center items-center '>
      <video 
        className='w-[900px] h-[800px] ' 
        autoPlay 
        loop 
        muted 
        playsInline
      >
      <source src="/video2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default Page2
