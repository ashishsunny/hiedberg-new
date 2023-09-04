import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Experience from '../sections/experience'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Experience/>
    </Layout>
  )
}
