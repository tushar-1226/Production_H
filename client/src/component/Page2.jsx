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
          className='flex flex-col justify-center items-center mb-14 w-full px-5'>

          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-center leading-tight text-gray-900 dark:text-[#E8E8E8]'>
            What can you sip today?
          </h2>

          <p className='text-sm sm:text-base md:text-lg mt-4 text-center max-w-2xl text-gray-500 dark:text-gray-400 leading-relaxed'>
            From everyday refreshment to premium pours — every sip crafted for your mood and moment.
          </p>
        </motion.div>

        {/* Editorial List */}
        <div className='px-4 sm:px-8'>

          {/* Top border */}
          <div className='w-full h-px bg-gray-200 dark:bg-[#2a2a2e]' />

          {categories.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}>

              <Link to='/shop' className='block group'>
                <div className='relative flex items-center justify-between py-7 sm:py-9 cursor-pointer'>

            

                  <span className='text-xs font-mono text-gray-900 dark:text-[#3a3a40] w-10 shrink-0 pl-3
                     transition-colors duration-300'>
                    {cat.num}
                  </span>

                  <div className='flex-1 px-5 sm:px-10'>
                    <p className='text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-gray-900 dark:text-[#E8E8E8]
                       transition-colors duration-300 leading-tight'>
                      {cat.title}
                    </p>
                    <p className='mt-1.5 text-sm sm:text-base text-gray-400 dark:text-gray-900 max-w-md leading-relaxed'>
                      {cat.desc}
                    </p>
                  </div>

                </div>
              </Link>

              <div className='w-full h-px bg-gray-200 dark:bg-[#2a2a2e]' />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Page2
