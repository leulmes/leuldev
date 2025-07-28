'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import DropdownSheet from './components/DropdownSheet'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import ContactPage from './components/ContactPage'
import {
  GithubIcon,
  DemoIcon,
  LinkedinIcon,
  DownloadIcon,
} from './components/SvgIcons'
import Footer from './components/Footer'
import { posts } from '@/posts'
// hi
export default function Home() {
  const [menu, setMenu] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  //   useEffect(() => {
  //     // review this
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: 'smooth' })
  //     }
  //   }, [])
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById('#first-section')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  // if menu is toggled
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden' // hides overflow content + removes scrollbar
    } else {
      document.body.style.overflow = '' // shows scrollbars
    }
    // cleanup function
    return () => {
      document.body.style.overflow = '' // shows scrollbars
    }
  }, [menu])

  return (
    <div ref={ref} className='scroll-smooth'>
      <Navbar menu={menu} setMenu={setMenu} />
      <AnimatePresence>
        {menu && (
          <div className='fixed z-10 h-screen w-full'>
            <DropdownSheet menu={menu} setMenu={setMenu} />
          </div>
        )}
      </AnimatePresence>

      <div className='md:flex md:flex-col md:items-center md:justify-center'>
        <div
          id='first-section'
          className='-mt-44 mb-80 flex flex-col items-center justify-center gap-8 text-white md:-mt-0 md:flex-row'
        >
          <Image
            src='/profile.png'
            width={350}
            height={350}
            alt='Picture of the author'
            className='mb-4 rounded-full md:mb-0'
            priority
          />

          {/* Text Column */}
          <div className='flex flex-col items-center gap-2 text-center md:text-left'>
            <div className='font-main text-3xl font-bold md:mt-52'>
              <span className=''>Selam </span>
              <span className='animate-wave inline-block'>👋🏾</span>
            </div>
            <span className='font-main text-3xl'>I&apos;m Leul Mesfin</span>
            <div className='font-main text-xl'>
              <span>I blog here & showcase my projects</span>
            </div>

            <div className='mt-1 flex items-center gap-3'>
              <Link
                href='https://github.com/leulmes'
                className='cursor-pointer'
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='flex cursor-pointer items-center p-2'
                >
                  <GithubIcon />
                </motion.button>
              </Link>
              <Link
                href='https://www.linkedin.com/in/leul-mesfin'
                className='cursor-pointer'
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='flex cursor-pointer items-center p-2'
                >
                  <LinkedinIcon />
                </motion.button>
              </Link>
              <Link
                href='/resume.pdf'
                className='cursor-pointer'
                target='_blank'
                rel='noopener noreferrer'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='flex cursor-pointer items-center p-2'
                >
                  <DownloadIcon />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <div id='second-section' className='mb-28 flex flex-col items-center'>
          <h1 className='font-main mt-20 pb-6 text-5xl font-bold text-white'>
            <span>Blog</span>
          </h1>
          <ul className='font-main list-disc pl-5 text-xl text-white'>
            {posts.map((p) => (
              <li key={p.id} className='cursor-pointer hover:underline'>
                <Link key={p.id} href={`/blog/${p.slug}`}>
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id='third-section' className='mb-28 flex flex-col items-center'>
          <h1 className='font-main mt-20 text-5xl font-bold text-white'>
            <span>Projects</span>
          </h1>
          <div className='mr-3 ml-3 max-w-[36rem]'>
            <h1 className='font-main pt-14 text-4xl font-bold text-white'>
              <span>Music Transfer</span>
            </h1>
            <div className='flex gap-1 text-sm font-medium text-white'>
              <span className=''>React,</span>
              <span className=''>TypeScript,</span>
              <span className=''>Java,</span>
              <span className=''>Spring Boot,</span>
              <span className=''>Tailwind CSS</span>
            </div>
            <div className='mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter'>
              <p className='font-main text-white'>
                Crafted a React web app that transfers my Spotify playlists to
                Apple Music.
              </p>
            </div>
          </div>
          <div className='mt-2 mr-3 ml-3 max-w-[36rem]'>
            <Image
              src='/musicTransfer.jpg'
              width={600}
              height={350}
              alt='mt'
              className='rounded-2xl'
            ></Image>
            <div className='my-3 mr-3 ml-3 flex items-center space-x-5'>
              <Link
                href='https://www.youtube.com/watch?v=wukNB-JNbXw'
                className=''
                rel='noopener noreferrer'
                target='_blank'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='cursor-pointer rounded bg-white text-sm text-black'
                >
                  <DemoIcon />
                </motion.button>
              </Link>
              <Link
                href='https://github.com/leulmes/playlist-transfer'
                className=''
                rel='noopener noreferrer'
                target='_blank'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='cursor-pointer text-white'
                >
                  <GithubIcon />
                </motion.button>
              </Link>
            </div>
          </div>
          <div className='mr-3 ml-3 max-w-[36rem] text-right'>
            <h1 className='font-main pt-14 text-4xl font-bold text-white'>
              <span>Gainz</span>
            </h1>
            <div className='flex justify-end gap-1 text-sm font-medium text-white'>
              <span>React Native,</span>
              <span>TypeScript,</span>
              <span>Python,</span>
              <span>AWS,</span>
              <span>Clerk,</span>
              <span>Tamagui</span>
            </div>
            <div className='mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter'>
              <p className='font-main text-white'>
                Co-developed a social media and fitness mobile application. This
                app users to create, modify, and track workouts. Users can also
                share workouts and engage with their friends.
              </p>
            </div>
          </div>
          <div className='mt-2 mr-3 ml-3 max-w-[36rem]'>
            <Image
              src='/gainz.png'
              width={600}
              height={350}
              alt='mt'
              className='rounded-2xl'
            ></Image>
            <div className='my-3 mr-3 ml-3 flex items-center justify-end space-x-5'>
              <Link
                href='https://www.youtube.com/watch?v=iAC8FYCfB2A'
                className=''
                rel='noopener noreferrer'
                target='_blank'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='cursor-pointer rounded bg-white text-sm text-black'
                >
                  <DemoIcon />
                </motion.button>
              </Link>
              <Link
                href='https://github.com/kushaldevv/gainzApp'
                className=''
                rel='noopener noreferrer'
                target='_blank'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='cursor-pointer text-white'
                >
                  <GithubIcon />
                </motion.button>
              </Link>
            </div>
          </div>
          <div className='mr-3 ml-3 max-w-[36rem]'>
            <h1 className='font-main pt-14 text-4xl font-bold text-white'>
              <span>Terp Exchange</span>
            </h1>
            <div className='flex gap-1 text-sm font-medium text-white'>
              <span className=''>Swift,</span>
              <span className=''>Google Firebase</span>
            </div>
            <div className='mt-5 items-center rounded-lg bg-gradient-to-br from-[#36333950] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-5 backdrop-blur-md backdrop-filter'>
              <p className='font-main text-white'>
                Co-engineered a mobile marketplace for UMD students. Built with
                Swift, and leveraged Google Firebase to establish a robust
                UMD-affiliated auth system.
              </p>
            </div>
          </div>
          <div className='mt-2 mr-3 ml-3 max-w-[36rem]'>
            <Image
              src='/terpExchange.jpg'
              width={600}
              height={350}
              alt='te'
              className='rounded-2xl'
            ></Image>
            <div className='my-3 mr-3 ml-3 flex items-center space-x-5'>
              <Link
                href='https://www.youtube.com/watch?v=CR91i9f5n8U'
                className=''
                rel='noopener noreferrer'
                target='_blank'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='cursor-pointer rounded bg-white text-sm text-black'
                >
                  <DemoIcon />
                </motion.button>
              </Link>
              <Link
                href='https://github.com/kushaldevv/terpXchange'
                className=''
                rel='noopener noreferrer'
                target='_blank'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: '0deg' }}
                  className='cursor-pointer text-white'
                >
                  <GithubIcon />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <div id='fourth-section' className='mb-28 flex flex-col items-center'>
          <h1 className='font-main mt-20 text-5xl font-bold text-white'>
            <span>Contact</span>
          </h1>
          <h2 className='font-main mt-3 mb-3 text-base font-bold text-white'>
            <span>Get in touch.</span>
          </h2>
          <ContactPage />
        </div>
        <Footer />
      </div>
    </div>
  )
}
