import BlinkingGrid from '@components/atoms/BlinkingGrid'
import { useGlobalContext } from 'providers/GlobalProvider'

const SectionHomeHero = () => {
  const { darkModeHook } = useGlobalContext()
  const [{ isDark }] = darkModeHook

  const gridColors = isDark
    ? { colorDot: '#fff', bgColor: '#111', isDark }
    : { colorDot: '#181818', bgColor: '#fff', isDark }

  return (
    <section className='relative'>
      <BlinkingGrid {...gridColors}>
        <div className='absolute w-full h-full flex flex-col items-center justify-center'>
          <div className='text-[#383838] dark:text-white-default'>
            <h2 className='text-[32px] leading-none'>Hi I'm</h2>
            <h1 className='text-6xl sm:text-[90px] leading-none'>Vincenzo</h1>
          </div>
        </div>
      </BlinkingGrid>
    </section>
  )
}
export default SectionHomeHero
