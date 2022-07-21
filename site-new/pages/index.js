import SectionHomeHero from '@components/sections/SectionHomeHero'
import SectionSocial from 'components/sections/SectionSocial'
import SectionIntro from '../components/sections/SectionIntro'

const Home = () => (
  <>
    <SectionHomeHero />
    <div className='relative shadow-[0_-16px_34px_0px_#dadada7d] dark:shadow-none'>
      <SectionSocial />
    </div>
    <SectionIntro />
  </>
)

export default Home
