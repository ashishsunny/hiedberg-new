import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { StickyProvider } from '../contexts/app/app.provider';
import Hero2 from '../sections/hero'
import Experience from '../sections/experience'
import Projects from '../components/projects'
import VideoPlayer from '../components/video-player'
import SecurePayment from '../components/secure'
export default function Home() {
  return (
    <div id='home'>
    <StickyProvider>
      <Hero2/>
      <Experience/>
      <SecurePayment page="home"/>
      <Projects/>
      <VideoPlayer/>
    </StickyProvider>
    </div>
  )
}
