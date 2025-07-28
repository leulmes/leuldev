import Link from 'next/link'
import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

const Logo = () => {
  return (
    <ScrollIntoView selector={"#first-section"} className='cursor-pointer'>
        <span className='font-pixelify ml-4 items-center text-3xl text-white md:ml-10 md:text-5xl'>
        leuldev
      </span>
    </ScrollIntoView>
    
  )
}

export default Logo
