import React, { useEffect, useState } from 'react'
import BlogNavbar from './BlogNavbar'
import BlogFooter from './BlogFooter'

function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BlogNavbar />
      <div className='prose-gray mb-16 max-w-4xl px-4 pt-5 text-white md:px-10 '>
        {children}
      </div>
      <BlogFooter />
    </div>
  )
}

export default MdxLayout
