'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const BlogNavbar = () => {  
  return (
    <nav className='sticky top-0 z-50 flex h-16 items-center justify-between  bg-[#181818]'>
      <Link href={'/'} className='cursor-pointer'>
        <Logo />
      </Link>
    </nav>
  )
}

export default BlogNavbar
