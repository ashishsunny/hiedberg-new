import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Hero2 from '../sections/hero'
import Experience from '../sections/experience'
import Projects from '../components/projects'
import VideoPlayer from '../components/video-player'
import SecurePayment from '../components/secure'

export default function Home() {
  return (
        <>
          <Hero2/>
          <Experience/>
          <SecurePayment page="home"/>
          <Projects/>
          <VideoPlayer/>
        </>
  )
}
