import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const categories = [
  {
    num: '01',
    title: 'Cold Drinks',
    desc: 'Crisp, chilled and ready to refresh — from sparkling waters to classic sodas.',
  },
  {
    num: '02',
    title: 'Fruit Drinks',
    desc: 'Bright, natural flavors squeezed from real fruit, packed with vitality.',
  },
  {
    num: '03',
    title: 'Shakes',
    desc: 'Thick, creamy and indulgent — from classic chocolate to exotic blends.',
  },
  {
    num: '04',
    title: 'Wines & Spirits',
    desc: 'Curated premium selection for special moments, aged to perfection.',
  },
]

const Page2 = () => {
  return (
    <section className='relative flex flex-col justify-center items-center mx-auto py-4'>

      <div className='relative m-12 w-full max-w-6xl' id='about_us'>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='flex flex-col justify-center items-center mb-10 px-4 w-full dark:text-[#E8E8E8] '>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            What can you sip today?
          </h2>

          <p className=" text-sm sm:text-base md:text-lg lg:text-[20px] mt-3 md:mt-4 sm:justify-center text-center max-w-3xl">
            From everyday refreshment to premium pours — every sip crafted for your mood and moment.
          </p>
        </motion.div>

        {/* Editorial List -> Responsive 2x2 grid */}
        <div className='px-4 sm:px-8'>

          {/* Grid container */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 + i * 0.06 }}>

                <Link to='/shop' className='block group'>
                  <div className='relative rounded-lg border border-2 border-gray-100 dark:border-[#2b2b2f] p-5 sm:p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 dark:bg-transparent'>

                    <div className='flex items-start '>
                      {/* Number */}
                      <span className='text-xs font-mono text-gray-400 dark:text-[#4a4a4f] w-12 shrink-0'>
                        {cat.num}
                      </span>

                      {/* Title + Description */}
                      <div className='flex-1 pl-4'>
                        <p className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-[#E8E8E8]  transition-colors duration-200'>
                          {cat.title}
                        </p>
                        <p className='mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed'>
                          {cat.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Page2
