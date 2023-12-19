"use client";
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '../app/lib/hooks';



export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    ref={ref}
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: 0.175}}
    id='about'>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
      After <strong>5 successful</strong> years in the <strong>Military</strong>, I decided I wanted to pursue a career in tech as it's always been a passion of mine.
      After completing my Computing course at college, I was able to get an offer from my first choice University. Since then I have been taught many different topics such as
      <i><strong> Networks</strong>, <strong>Web security</strong>, <strong>Algoritms</strong>, <strong>OOP, </strong></i> and <i><strong>IPC. </strong></i>
      In my free time, I'm improving my <i><strong>React.js, HTML, and CSS </strong></i> skill set. 
      
      </p>
      <p>

      </p>
  </motion.section>

  )

}
