import '../styles/_globals.scss'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import SectionFooter from 'components/sections/SectionFooter'
import Nav from 'components/molecules/Nav'
import GlobalProvider from '../providers/GlobalProvider'
import Mask from 'components/atoms/Mask'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const maskHook = useState(false)

  return (
    <GlobalProvider.Provider value={{ maskHook }}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content="Vincenzo Marconi's Personal Site" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Vincenzo</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#ec4747'
        />
        <meta name='msapplication-TileColor' content='#eeeeee' />
        <meta name='theme-color' content='#ffffff' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,700'
          rel='stylesheet'
        />
      </Head>
      <main className='min-h-[calc(100vh-137px)'>
        <Component {...pageProps} />
        <Nav />
      </main>
      <SectionFooter />
      <Mask />
    </GlobalProvider.Provider>
  )
}
