import React from 'react'
import { Link } from 'react-router-dom'
import { Banners } from '../assets/assets'
import { Avatar } from '../assets/assets'
import { motion } from "motion/react"

const Container = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center pt-17'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-3xl font-semibold sm:text-5xl md:text-6xl xl:text-[84px] text-center xl:leading-[95px] dark:text-white max-w-5xl'>
          Refreshment Crafted for Every Mood
        </motion.h1>
      </div>

      <div className='flex relative justify-center mt-5 gap-2 items-start'>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className='mt-0'>
          <img src={Avatar[0]} className='h-[400px] object-cover rounded-xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className='mt-10'>
          <img src={Avatar[1]} className='h-[400px] object-cover rounded-xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className='mt-0'>
          <img src={Avatar[2]} className='h-[400px] object-cover rounded-xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className='mt-10'>
          <img src={Avatar[3]} className='h-[400px] object-cover rounded-xl' />
        </motion.div>

      </div>
    </div>
  )
}

export default Container