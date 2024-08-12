import '../styles/main.scss'
import '../styles/assets.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
