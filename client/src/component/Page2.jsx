import React from 'react'
import SipVideo from '../assets/SipVideo.mp4'
import { Sips } from '../assets/assets'
import { motion } from "motion/react"

const Page2 = () => {

  return (
    <div className='flex flex-col justify-center items-center md:flex-row mx-auto  '>

      <div className='m-20 w-full' id='about_us'>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col justify-center items-center mb-10 w-full px-5 dark:text-[#E8E8E8]'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>What can you sip today?</p>
          <p className='text-sm sm:text-base md:text-lg lg:text-[20px] mt-3 md:mt-4 sm:justify-center text-center max-w-3xl'>From everyday refreshment to premium pours, we bring together drinks that fit every taste, mood, and moment.</p>
        </motion.div>

        <div class="flex w-full justify-center gap-8 md:px-10 max-w-6xl 2xl:max-w-full mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hover:shadow-lg transition transform hover:scale-102 rounded-xl">

            <img src={Sips[0]} className='h-[500px] rounded-xl' />

            <h2 className="absolute top-0 left-0 text-white text-3xl font-bold p-2">
              Cold drinks
            </h2>
          </motion.div>

          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative hover:shadow-lg transition transform hover:scale-102 rounded-xl">

            <img src={Sips[1]} className='h-[500px] rounded-xl' />

            <h2 className="absolute bottom-0 left-0 text-white text-3xl font-bold p-2">
              Fruit Drinks
            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="relative hover:shadow-lg transition transform hover:scale-102 rounded-xl">

            <img src={Sips[2]} className='h-[500px] rounded-xl' />
            <h2 className="absolute top-0 left-0 text-white text-3xl font-bold p-2">
              Wines and Vodka
            </h2>

          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default Page2
