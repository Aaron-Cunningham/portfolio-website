import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import SectionDividor from '@/components/section-dividor'
import Skills from '@/components/skills'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDividor/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>

    </main>
  )
}
