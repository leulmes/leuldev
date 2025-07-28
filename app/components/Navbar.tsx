'use client'
import React from 'react'
import AnimatedBurger from './AnimatedBurger'
import { activeProps, activeProps3, navLinks } from '../types'
import Logo from './Logo'
import ScrollIntoView from 'react-scroll-into-view'

const NavLink = ({ title, href }: activeProps3) => {
  return (
    <div>
      <ScrollIntoView selector={href}>{title}</ScrollIntoView>
    </div>
  )
}

const Navbar = ({ menu, setMenu }: activeProps) => {
  const navItems = navLinks.map((link) => {
    return (
      <div className='cursor-pointer overflow-hidden' key={link.idx}>
        <NavLink title={link.title} href={link.href} />
      </div>
    )
  })

  return (
    <nav className='sticky top-0 z-50 flex h-16 items-center justify-between border-b-[0.1px] border-white bg-[#181818]'>
      <Logo />
      <div className='md:font-main hidden text-white md:mr-10 md:flex md:gap-6 md:text-2xl'>
        {navItems}
      </div>
      <AnimatedBurger menu={menu} setMenu={setMenu} />
    </nav>
  )
}

export default Navbar
