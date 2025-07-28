import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'motion/react'

interface ProjectInfo {
  name: string
  techStack: string
  description: string
  imageHref: string
  demoLink: string
  githubLink: string
}

const ProjectCard = ({
  name,
  techStack,
  description,
  imageHref,
  demoLink,
  githubLink,
}: ProjectInfo) => {
  return (
    <div className='flex h-[410px] w-[95%] flex-col items-center gap-2 rounded-3xl border border-white'>
      <Image
        src={imageHref}
        width={350}
        height={200}
        alt={name}
        className='mt-4 rounded-2xl border'
      ></Image>
      <div className='font-main mb-2 flex flex-col items-center justify-center gap-3 text-center text-white'>
        <h1 className='text-2xl'>{name}</h1>
        <h2 className='text-sm'>{techStack}</h2>
        <h3 className='text-base'>{description}</h3>
      </div>
      <div className='flex items-center gap-5 text-white'>
        <Link
          href={demoLink}
          className=''
          rel='noopener noreferrer'
          target='_blank'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: '0deg' }}
            className='font-main flex w-16 cursor-pointer items-center gap-2 rounded border bg-white px-2 py-0.5 text-black'
          >
            <p>Demo</p>
          </motion.button>
        </Link>

        <Link
          href={githubLink}
          className=''
          rel='noopener noreferrer'
          target='_blank'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: '0deg' }}
            className='flex w-16 cursor-pointer items-center justify-center rounded border bg-white px-2 py-0.5 text-black'
          >
            <FontAwesomeIcon icon={faGithub} className='text-2xl' />
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
