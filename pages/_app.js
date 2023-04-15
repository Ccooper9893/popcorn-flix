import '@/styles/globals.css'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Popcorn Flix</title>
      </Head>
      <Navbar>
        <div className='h-screen mt-4'>
      <Component {...pageProps} />
      </div>
      </Navbar>
    </Layout>
  )
}
