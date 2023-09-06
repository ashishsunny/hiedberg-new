import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Hero from '../components/hero'
import Experience from '../sections/experience'
import Projects from '../components/projects'
export default function Home() {
  return (
        <>
          <Hero/>
          <Experience/>
          <Projects/>
        </>
  )
}
