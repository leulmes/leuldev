import Link from 'next/link'
import React from 'react'

const updateDate = (): number => {
  const date = new Date()
  return date.getFullYear()
}
const BlogFooter = () => {
  return (
    <div className='#151312 flex h-14 items-center justify-center text-white border-t-[0.1px] border-white'>
      <div className='font-main pt-5 flex flex-col items-center justify-center text-lg'>
        <span>&copy; {updateDate()}</span>
        <span className='flex gap-1'>
          built with 💗 by
          <Link
            href={'https://github.com/leulmes/portfolio-site'}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer underline-offset-4 hover:underline'
          >
            ሌዑል መስፍን
          </Link>{' '}
        </span>
      </div>
    </div>
  )
}

export default BlogFooter
