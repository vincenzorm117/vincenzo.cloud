import SectionFooter from '@components/organisms/SectionFooter'
import Mask from 'components/atoms/Mask'
import Nav from 'components/molecules/Nav'
import Head from 'next/head'
import { useEffect, useMemo, useReducer, useState } from 'react'
import GlobalProvider from '../providers/GlobalProvider'
import '../styles/_globals.scss'

const darkModeReducer = (state, action) => {
  if (typeof action?.isDark === 'boolean') {
    const { isDark } = action
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return { isDark }
  }
  throw new Error('Invalid value for darkModeReducer')
}

const MyApp = ({ Component, pageProps }) => {
  const maskHook = useState(false)
  const darkModeHook = useReducer(darkModeReducer, { isDark: true })

  const globalProviderValue = useMemo(
    () => ({ maskHook, darkModeHook }),
    [maskHook, darkModeHook]
  )

  useEffect(() => {
    const [, dispatch] = darkModeHook
    dispatch({
      // isDark: window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark: true,
    })
  }, [])

  return (
    <>
      <Head>
        <title>Vincenzo</title>
      </Head>
      <GlobalProvider.Provider value={globalProviderValue}>
        <main className='flex flex-col dark:bg-purple-dark dark:text-white-default min-h-[calc(100vh_-_250px)]'>
          <Component {...pageProps} />
          <Nav />
        </main>
        <SectionFooter />
        <Mask />
      </GlobalProvider.Provider>
    </>
  )
}

export default MyApp
