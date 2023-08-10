import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import { SearchProvider } from '@/utils/searchContext';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Bring Popcorn</title>
      </Head>
      <GoogleAnalytics trackPageViews />
      <SearchProvider>
        <Navbar>
          <div className='h-screen pt-16 lg:pt-20'>
            <Component {...pageProps} />
          </div>
        </Navbar>
      </SearchProvider>
      </div>
  )
};
