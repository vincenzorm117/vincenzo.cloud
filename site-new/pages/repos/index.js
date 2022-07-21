import SectionGists from '@components/sections/SectionGists'
import SectionRepos from '@components/sections/SectionRepos'

const Page = () => (
  <>
    <SectionRepos className='pt-16 sm:pt-24' />
    <SectionGists className='pt-2 sm:pt-10' />
  </>
)

export default Page
