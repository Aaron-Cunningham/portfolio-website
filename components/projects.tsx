"use client";
import React, {useEffect, useRef} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/app/lib/data'
import Project from './project';
import { useSectionInView } from '@/app/lib/hooks';

export default function Projects() {
  
  const { ref } = useSectionInView('Projects')

  return (
    <section ref={ref} id="projects" className='scroll-mt-28 text-center mb-28'>
    <SectionHeading>Projects</SectionHeading>
    <div>
        {
            projectsData.map((project, index) =>(
                <React.Fragment key={index}>
                <Project {...project}/>
                </React.Fragment>

            ))}
    </div>
    </section>
  );
}
