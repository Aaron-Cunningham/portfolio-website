"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/app/lib/data'
import { useSectionInView } from '@/app/lib/hooks'
import { motion } from 'framer-motion';

const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100

    },
    animate:{
        opacity: 1,
        y: 0
    }
    
}

export default function Skills() {
    const { ref } = useSectionInView('Skills', 0.5)
  return (
    <section ref={ref} id="skills"className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>

        <ul className='flex gap-2 flex-wrap justify-center text-lg text-gray-800'>{
                skillsData.map((skill, index) => (
                    <motion.li className='border bg-white border-black/[0.1] rounded-xl px-5 py-3 ' key={index}
                    variants={fadeInAnimationsVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}>
                        {skill}
                        </motion.li>
                ))
            }
        </ul>
    </section>
  )
}
