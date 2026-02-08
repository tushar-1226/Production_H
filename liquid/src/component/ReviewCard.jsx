import React from 'react'

const ReviewCard = () => {


  const reviews = [
    {
      id: 1,
      name: 'Ethan Walker',
      location: 'Brooklyn, New York, USA',
      image: 'pfp1.jpg',
      rating: 5,
      review: "Liquid genuinely surprised me. The variety is thoughtfully curated, from everyday comfort drinks to premium selections you don't usually find in one place. The experience feels smooth, intentional, and trustworthy — exactly what you expect from a modern brand that actually understands taste."
    },
    {
      id: 2,
      name: 'Daniel Thompson',
      location: 'London, United Kingdom',
      image: 'pfp2.jpg',
      rating: 5,
      review: "What I love about Liquid is how effortless everything feels. The design is clean, the choices are refined, and every drink I've tried feels high quality. It's not just about selling beverages — it's about creating a reliable experience you come back to."
    },
    {
      id: 3,
      name: 'Isabella Rossi',
      location: 'Milan, Italy',
      image: 'pfp4.jpg',
      rating: 5,
      review: "There's a certain elegance to Liquid that instantly stands out. The platform feels modern and carefully designed, and the drinks reflect that same quality. Every order feels considered, not rushed. It's become my go-to for discovering new flavors. A brand that truly understands taste and trust"
    },
    {
      id: 4,
      name: 'Olivia Martin',
      location: 'Barcelona, Spain',
      image: 'pfp5.jpg',
      rating: 5,
      review: "What I love about Liquid is how effortless everything feels. The design is clean, the choices are refined, and every drink I've tried feels high quality. It's not just about selling beverages — it's about creating a reliable experience you come back to."
    }
  ]

  const duplicatedReviews = [...reviews, ...reviews];

  return (

    <div id='our_story' className='w-full mb-20'>
      <div className='flex flex-col justify-center items-center mb-10 px-4 w-full dark:text-[#E8E8E8] '>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          What people say after every Sip?
        </p>
        <p className=" text-sm sm:text-base md:text-lg lg:text-[20px] mt-3 md:mt-4 sm:justify-center text-center max-w-3xl">
          Real stories from people who choose Liquid for everyday refreshment and special moments alike.
        </p>
      </div>



      <div className="relative w-full">
        
        
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        
        <div className="overflow-hidden py-8">
          <div className="flex gap-6 animate-scroll hover:pause-animation">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex flex-col min-w-[340px] sm:min-w-[380px] md:min-w-[420px] justify-center p-3 dark:bg-[#111113] border border-[#333333] dark:text-[#E8E8E8] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-[6px] hover:border-[#00FFD1]"
              >
                <div className='flex items-center pb-3'>
                  <div>
                    <img
                      src={review.image}
                      alt={review.name}
                      className='w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full mr-4'
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(review.name) + '&background=random';
                      }}
                    />
                  </div>
                  <div>
                    <p className='text-lg mb-1'>{'⭐'.repeat(review.rating)}</p>
                    <p className='font-semibold text-base sm:text-lg'>{review.name}</p>
                    <p className='text-xs sm:text-sm text-gray-400'>{review.location}</p>
                  </div>
                </div>
                <p className='text-sm sm:text-base leading-relaxed'>{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused !important;
        }
      `}</style>





    </div>

  )
}

export default ReviewCard
