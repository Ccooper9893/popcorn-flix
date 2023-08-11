import '@/styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import { SearchProvider } from '@/utils/searchContext';
import Script from 'next/script';

const tagManagerArgs = {
  id: `GTM-${process.env.NEXT_PUBLIC_GTM_ID}`,
};

export default function App({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return (
    <div>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}/>
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
