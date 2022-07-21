import { IconMoon, IconSun } from '@components/atoms/Icon'
import cn from 'classnames'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useGlobalContext } from 'providers/GlobalProvider'
import { useCallback, useEffect, useState } from 'react'
import styles from './styles.module.scss'

const links = [
  { text: 'Home', href: '/' },
  { text: 'Experience', href: '/experience' },
  { text: 'Projects', href: '/projects' },
  { text: 'Repos/Gists', href: '/repos' },
  { text: 'Blog', href: '/blog' },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { maskHook, darkModeHook } = useGlobalContext()
  const [, setMaskIsOpen] = maskHook
  const [{ isDark }, dispatch] = darkModeHook

  const router = useRouter()

  const toggleNav = useCallback(
    (value) => {
      setIsOpen(value)
      setMaskIsOpen(value)
    },
    [setIsOpen, setMaskIsOpen]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', () => toggleNav(false))
  }, [router, toggleNav])

  return (
    <nav
      onMouseLeave={() => toggleNav(false)}
      className={cn(
        'fixed z-20 bottom-0 right-0 pb-[25px] pr-[25px] flex flex-col justify-end',
        isOpen ? 'h-[320px] w-[220px]' : ''
      )}>
      <ul
        className={cn(
          'text-right pb-5 transition-opacity',
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none hidden'
        )}>
        {links.map((link) => (
          <li
            className='text-[20px] py-2 uppercase font-display font-bold text-white-ce tracking-widest'
            key={link.text}>
            <Link href={link.href} onClick={() => toggleNav(false)}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className='group'>
        <button
          type='button'
          aria-label='Nav menu'
          onClick={() => toggleNav(!isOpen)}
          className='block ml-auto rounded-full bg-cyan-default shadow-md hover:shadow-lg transition-shadow duration-200 relative h-[50px] w-[50px] z-20'>
          <div className={isOpen ? styles.burgerActive : styles.burger} />
        </button>
        {isDark ? (
          <button
            type='button'
            className='text-[#fff] bg-[#43435c] absolute right-[92px] bottom-[32px] w-[26px] rounded-full  box-content p-[7px] shadow-md hover:shadow-lg duration-200 transition-all transform translate-x-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0'
            onClick={() => dispatch({ isDark: false })}>
            <IconMoon />
          </button>
        ) : (
          <button
            type='button'
            className='text-[#c4a500] bg-[#ffee93]  absolute right-[92px] bottom-[32px] w-[26px] rounded-full  box-content p-[7px] shadow-md hover:shadow-lg duration-200 transition-all transform translate-x-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0'
            onClick={() => dispatch({ isDark: true })}>
            <IconSun />
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
