import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import { SearchProvider } from '@/utils/searchContext';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    return (
    <div>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Head>
        <title>Bring Popcorn</title>
      </Head>
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
