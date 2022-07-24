import { IconMoon, IconSun } from '@components/atoms/Icon'
import SocialLinks from '@components/molecules/SocialLinks'
import { useGlobalContext } from 'providers/GlobalProvider'

const SectionFooter = () => {
  const { darkModeHook } = useGlobalContext()
  const [{ isDark }, dispatch] = darkModeHook

  return (
    <footer className='bg-[#b6995e14] dark:bg-purple-darkest dark:text-white-default text-purple-darkest  pb-4'>
      <div className='container mx-auto'>
        <div className='pt-10 pb-20 sm:pb-16 flex justify-center'>
          <SocialLinks />
        </div>
        <div className='flex justify-center'>
          {isDark ? (
            <button
              type='button'
              className='text-[#fff] bg-[#43435c] w-[26px] rounded-full  box-content p-[7px]'
              onClick={() => dispatch({ isDark: false })}>
              <IconMoon />
            </button>
          ) : (
            <button
              type='button'
              className='text-[#c4a500] bg-[#ffee93] w-[26px] rounded-full box-content p-[7px]'
              onClick={() => dispatch({ isDark: true })}>
              <IconSun />
            </button>
          )}
        </div>
        <div className='text-center text-brown-darkest text-[13px] mt-10'>
          &copy; {new Date().getFullYear()} Vincenzo Marconi
        </div>
      </div>
    </footer>
  )
}
export default SectionFooter
