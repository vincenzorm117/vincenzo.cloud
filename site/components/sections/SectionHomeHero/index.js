import BlinkingGrid from '@/components/atoms/BlinkingGrid'
import { useGlobalContext } from 'providers/GlobalProvider'

const SectionHomeHero = ({}) => {
  const { darkModeHook } = useGlobalContext()
  const isDark = darkModeHook?.[0]?.isDark ?? false

  const gridColors = isDark
    ? { colorDot: '#fff', bgColor: '#181818' }
    : { colorDot: '#181818', bgColor: '#fff' }

  return (
    <section className='relative'>
      <BlinkingGrid {...gridColors}>
        <div className='absolute w-full h-full flex flex-col items-center justify-center'>
          <div className='text-[#383838] dark:text-white-default'>
            <h2 className='text-[32px] leading-none'>Hi I'm</h2>
            <h1 className='text-[90px] leading-none'>Vincenzo</h1>
          </div>
        </div>
      </BlinkingGrid>
    </section>
  )
}
export default SectionHomeHero
