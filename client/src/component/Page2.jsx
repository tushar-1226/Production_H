import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Cold Drinks',
    subtitle: 'Crisp, chilled and ready to refresh. From sparkling waters to classic sodas.',
    tag: 'Bestseller',
    accent: '#00FFD1',
    gradient: 'from-cyan-500/10 to-teal-400/5',
    borderGlow: 'hover:border-cyan-400/60 dark:hover:border-[#00FFD1]/50',
    tagColor: 'bg-cyan-100 text-cyan-700 dark:bg-[#00FFD1]/10 dark:text-[#00FFD1]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 3v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 7h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 11l1.5 1.5L13 10"/>
      </svg>
    )
  },
  {
    title: 'Fruit Drinks',
    subtitle: 'Bright, natural flavors from real fruit. Squeezed fresh, packed with vitality.',
    tag: 'Fan Favorite',
    accent: '#f97316',
    gradient: 'from-orange-400/10 to-yellow-300/5',
    borderGlow: 'hover:border-orange-400/60 dark:hover:border-orange-400/50',
    tagColor: 'bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2v6"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8a5 5 0 0 0 10 0"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12c0 4 3 8 7 8s7-4 7-8"/>
      </svg>
    )
  },
  {
    title: 'Wines & Spirits',
    subtitle: 'Curated premium selection for special moments. Aged to perfection.',
    tag: 'Premium',
    accent: '#a855f7',
    gradient: 'from-purple-500/10 to-pink-400/5',
    borderGlow: 'hover:border-purple-400/60 dark:hover:border-purple-400/50',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-300',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 2h8v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V2z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12v6"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20h12"/>
      </svg>
    )
  }
]

const Page2 = () => {
  return (
    <section className='relative flex flex-col justify-center items-center mx-auto overflow-hidden py-4'>

      {/* Decorative background blobs */}
      <div className='absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none'
        style={{ background: 'radial-gradient(circle, #00FFD1 0%, transparent 70%)' }} />
      <div className='absolute bottom-10 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 dark:opacity-10 pointer-events-none'
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />

      <div className='relative m-12 w-full max-w-6xl' id='about_us'>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className='flex flex-col justify-center items-center mb-14 w-full px-5'>

          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5
            bg-[#00FFD1]/10 text-teal-700 dark:text-[#00FFD1] border border-[#00FFD1]/20'>
            <span className='w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-[#00FFD1] animate-pulse' />
            Our Collection
          </span>

          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-center leading-tight dark:text-[#E8E8E8]'>
            What can you{' '}
            <span className='relative inline-block'>
              <span className='relative z-10 bg-gradient-to-r from-teal-500 via-cyan-400 to-emerald-400
                dark:from-[#00FFD1] dark:via-cyan-300 dark:to-teal-400
                bg-clip-text text-transparent'>sip today?</span>
              <span className='absolute -bottom-1 left-0 w-full h-[3px] rounded-full
                bg-gradient-to-r from-teal-400 to-cyan-300 dark:from-[#00FFD1] dark:to-cyan-400 opacity-50' />
            </span>
          </h2>

          <p className='text-sm sm:text-base md:text-lg mt-4 text-center max-w-2xl text-gray-500 dark:text-gray-400 leading-relaxed'>
            From everyday refreshment to premium pours — every sip crafted for your mood and moment.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.13 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl
                bg-white dark:bg-[#111113]
                border border-gray-200/80 dark:border-[#2a2a2e]
                ${c.borderGlow}
                shadow-sm hover:shadow-xl dark:hover:shadow-black/40
                transition-all duration-300 cursor-pointer`}>

              {/* Card gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Glow dot top-right */}
              <div className='absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none'
                style={{ background: c.accent }} />

              <div className='relative p-7 flex flex-col justify-between min-h-[280px]'>

                {/* Top: Icon + Tag */}
                <div>
                  <div className='flex items-start justify-between mb-5'>
                    {/* Icon bubble */}
                    <div className='p-3 rounded-xl border border-gray-200 dark:border-[#2a2a2e]
                      bg-gray-50 dark:bg-[#1a1a1d]
                      group-hover:border-current transition-colors duration-300'
                      style={{ color: c.accent }}>
                      {c.icon}
                    </div>

                    {/* Tag badge */}
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${c.tagColor}`}>
                      {c.tag}
                    </span>
                  </div>

                  <h3 className='text-gray-900 dark:text-[#E8E8E8] text-xl font-bold mb-2 tracking-tight'>
                    {c.title}
                  </h3>
                  <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>
                    {c.subtitle}
                  </p>
                </div>

                {/* Bottom: CTA */}
                <div className='mt-7 flex items-center justify-between'>
                  <p className='text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest'>
                    Explore collection
                  </p>
                  <Link to='/shop'>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className='flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                        bg-gray-900 text-white dark:bg-[#00FFD1] dark:text-black
                        hover:opacity-90 transition-all duration-200 shadow-sm'>
                      Shop
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.button>
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='flex justify-center mt-12'>
          <Link to='/shop'>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className='flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-sm
                border border-gray-300 dark:border-[#2a2a2e]
                text-gray-800 dark:text-[#E8E8E8]
                bg-white dark:bg-[#111113]
                hover:border-teal-400 dark:hover:border-[#00FFD1]/60
                hover:text-teal-600 dark:hover:text-[#00FFD1]
                transition-all duration-300 shadow-sm'>
              View all drinks
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Page2
