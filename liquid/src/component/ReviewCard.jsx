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

  return (
    <div>
      <div >
        <div className='flex flex-col justify-center items-center mb-10'>
          <p className='text-5xl our_story'>What people say after every Sip?</p>
          <p className='text_para'>Real stories from people who choose Liquid for everyday refreshment and special moments alike.</p>
        </div>

        <div className=' flex ml-10  gap-10 mb-30'>

          <div className='flex ml-10 gap-10'>
            {reviews.map((review) => (
              <div key={review.id} className='review_card flex flex-col justify-center px-7 h-[370px] w-[320px] bg-amber-600'>
                <div className='flex items-center pb-3'>
                  <div>
                    <img src={review.image} alt={review.name} className='w-15 rounded-full mr-4' />
                  </div>
                  <div>
                    {'⭐'.repeat(review.rating)}
                    <p>{review.name}</p>
                    <p>{review.location}</p>
                  </div>
                </div>
                <p>{review.review}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ReviewCard
