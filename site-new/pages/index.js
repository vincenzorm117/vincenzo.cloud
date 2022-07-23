import SectionHomeHero from '@components/organisms/SectionHomeHero'
import SectionSocial from '@components/organisms/SectionSocial'
import SectionIntro from '../components/organisms/SectionIntro'

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
