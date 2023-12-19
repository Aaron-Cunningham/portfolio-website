"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithub, FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '../app/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const {ref} = useSectionInView('Home', 0.5)
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center scroll-mt-[100rem]' id="home">
      <div className='flex items-center justify-center'>
        
        <div className='relative'>
        <motion.div
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{
            type: "tween",
            duration: 0.2
        }}>          
        <Image src="/me.png" alt="Aaron photo" 
          width="192"
          height="192"
          quality="95"
          priority={true}
          className='h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
          </motion.div>
        </div>
      </div>

      <motion.h1 className='relative mb-10 mt-4  px- text-2x1 font-medium !leading-[1.5] sm:text-4x1'
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y:0 }}
      ><strong>Hello, I'm Aaron.</strong>  I'm a <strong>Front-End</strong> developer and full-time <strong>Computer Science student </strong> at <strong>Newcastle University 
        </strong> with <strong>3 years</strong> coding experience. I enjoy using and trying new technologies and I'm currently focusing on <strong><i>React.js</i></strong></motion.h1>
        
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium relative'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y:0 }}
            transition={{
                delay: 0.1
            }}
        >
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
             hover:bg-gray-950 active:scale-105 transition'>Contact me<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"
             onClick={() => {
              setActiveSection('Contact')
              setTimeOfLastClick(Date.now())
             }}/>
            </Link>

            <a className='group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
              active:scale-105 transition cursor-pointer' href='/CV.pdf' download={true}>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
            </a>


            <a className='bg-white  p-4 text-gray-700  group  flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
              active:scale-105 transition cursor-pointer' href='https://www.linkedin.com/in/aaron-cunningham-960b28211/' target='_blank' >
                <BsLinkedin/>
            </a>
            <a className='bg-white  p-4 text-gray-700 text-[1.25rem] group flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
              active:scale-105 transition cursor-pointer' href='https://github.com/Aaron-Cunningham' target='_blank'>
                <FaGithubSquare/>
            </a>

        </motion.div>
    </section>
  )
}


//<strong>Hello, I'm Aaron.</strong> I'm a full-time <strong>Computer Science student</strong> at <strong>Newcastle University.</strong> 
  //      3 years experience in-class. I enjoy trying new technologies. I'm currently focusing on <i>React.js</i></p>