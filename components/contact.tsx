"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/app/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';


export default function Contact() {
    const { ref } = useSectionInView('Contact')

  return (
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-20 w-[min(100,38rem)] text-center '
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration:1
    }}
    viewport={{
        once:true
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-5'>You can contact me directly at <a className='underline' href='mailto:a.cunningham7@newcastle.ac.uk'>a.cunningham7@newcastle.ac.uk</a> or through this form</p>

        <form className='mt-10 flex flex-col' action={async (FormData) => {
            await sendEmail(FormData)
        }}>
            <input placeholder='Your email' className='h-14 rounded-lg border border-black/10 px-4' name="senderEmail" type='email' required maxLength={200}/>
            <textarea placeholder='Your message' className='h-52 my-3 rounded-lg border-black p-4' name="senderMessage" required maxLength={5000}/>
            <button type='submit' className='group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>
                Submit <FaPaperPlane className='text-es opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
            </button>
        </form>
    </motion.section>
    
  )
}
