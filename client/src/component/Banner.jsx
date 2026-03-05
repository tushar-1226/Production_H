import React, { useEffect, useRef, useState } from 'react'
import { Banners, Sips } from '../assets/assets'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Banner = () => {
  const images = [...Banners, ...Sips].slice(0, 7)
  const [idx, setIdx] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [images.length])

  const startAuto = () => {
    stopAuto()
    intervalRef.current = setInterval(() => {
      setIdx(prev => (prev + 1) % images.length)
    }, 4000)
  }

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const goPrev = (e) => {
    e?.stopPropagation()
    setIdx(i => (i - 1 + images.length) % images.length)
    startAuto()
  }

  const goNext = (e) => {
    e?.stopPropagation()
    setIdx(i => (i + 1) % images.length)
    startAuto()
  }

  const goTo = (i, e) => {
    e?.stopPropagation()
    setIdx(i)
    startAuto()
  }

  const handleImgClick = () => {
    setIdx(i => (i + 1) % images.length)
    startAuto()
  }

  return (
    <section className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden ">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`banner-${i}`}
          onClick={handleImgClick}
          className={`absolute  inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out cursor-pointer ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      <div className="absolute inset-0 bg-black/20 z-10" />

      <div className="absolute inset-0 flex items-center justify-center z-20 ">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow">Discover Delicious Drinks</h1>
          <p className="mt-2 text-sm md:text-lg drop-shadow">Explore categories — slides change every 2 seconds.</p>
        </div>
      </div>

<ChevronLeft
  onClick={goPrev}
  size={50}
  className="absolute top-1/2 -translate-y-1/2 left-5 bg-gray-100/40 rounded-full p-1 cursor-pointer z-30"
/>

<ChevronRight
  onClick={goNext}
  size={50}
  className="absolute top-1/2 -translate-y-1/2 right-5 bg-gray-100/40 rounded-full p-1 cursor-pointer z-30"
/>
      <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 flex gap-2 cursor-pointer">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => goTo(i, e)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Banner
