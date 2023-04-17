import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import { SearchProvider } from '@/utils/searchContext';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Bring Popcorn</title>
      </Head>
      <SearchProvider>
        <Navbar>
          <div className='h-screen pt-14 lg:pt-20'>
            <Component {...pageProps} />
          </div>
        </Navbar>
      </SearchProvider>
      </div>
  )
};
