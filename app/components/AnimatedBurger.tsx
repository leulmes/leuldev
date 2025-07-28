'use client'
import React from 'react'
import { motion, MotionConfig } from 'motion/react'
import { activeProps } from '../types'

const AnimatedBurger = ({ menu, setMenu }: activeProps) => {
  // const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setMenu((pv) => !pv)}
        className='relative block h-20 w-20 cursor-pointer md:hidden'
        animate={menu ? 'open' : 'closed'}
      >
        <motion.span
          style={{
            left: '50%',
            top: '42%',
            x: '-50%',
            y: '-50%',
          }}
          className='absolute h-1 w-7 rounded border bg-white'
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['42%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '42%'],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            left: '50%',
            top: '50%',
            x: '-50%',
            y: '-50%',
          }}
          className='absolute h-1 w-7 rounded border bg-white'
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            left: '50%',
            bottom: '42%',
            x: '-50%',
            y: '50%',
          }}
          className='absolute h-1 w-7 rounded border bg-white'
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
              bottom: ['42%', '50%', '50%'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
              bottom: ['50%', '50%', '42%'],
            },
          }}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  )
}

export default AnimatedBurger
