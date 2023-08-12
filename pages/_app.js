import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import { SearchProvider } from '@/utils/searchContext';
import Script from 'next/script';
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize GTM
    TagManager.initialize({ gtmId: process.env.GTM });
  }, []);
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
      <Script strategy="afterInteractive" id="gtm-script">
        
        {`
          // Empty script tag because GTM is loaded through react-gtm-module
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
