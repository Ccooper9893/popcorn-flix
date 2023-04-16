import '@/styles/globals.css';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { SearchProvider } from '@/utils/searchContext';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Popcorn Flix</title>
      </Head>
      <SearchProvider>
        <Navbar>
          <div className='h-screen mt-6'>
            <Component {...pageProps} />
          </div>
        </Navbar>
      </SearchProvider>
    </Layout>
  )
};
