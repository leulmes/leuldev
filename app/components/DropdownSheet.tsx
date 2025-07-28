'use client'
import React from 'react'
import { motion } from 'motion/react'
import { activeProps, activeProps2, navLinks } from '../types'
import ScrollIntoView from 'react-scroll-into-view'

const navVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const navLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
}

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
}

const MobileNavLink = ({ title, href, menu, setMenu }: activeProps2) => {
  return (
    <motion.div variants={navLinkVars}>
      <ScrollIntoView selector={href} onClick={() => setMenu(!menu)}>
        {title}
      </ScrollIntoView>
    </motion.div>
  )
}

const DropdownSheet = ({ menu, setMenu }: activeProps) => {
  const navItems = navLinks.map((link) => {
    return (
      <div className='cursor-pointer overflow-hidden' key={link.idx}>
        <MobileNavLink
          title={link.title}
          href={link.href}
          menu={menu}
          setMenu={setMenu}
        />
      </div>
    )
  })

  return (
    <motion.nav
      variants={navVars}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex h-screen w-full origin-top items-center justify-center bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter'
    >
      <motion.div
        variants={containerVars}
        initial='initial'
        animate='open'
        exit='initial'
        className='font-main mb-48 flex flex-col items-center justify-center gap-3 overflow-hidden text-3xl text-white'
      >
        {navItems}
      </motion.div>
    </motion.nav>
  )
}

export default DropdownSheet
