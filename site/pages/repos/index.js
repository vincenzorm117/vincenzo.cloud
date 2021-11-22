import SectionGists from '@/components/sections/SectionGists'
import SectionRepos from '@/components/sections/SectionRepos'

export default function Page() {
  return (
    <>
      <SectionRepos className='pt-16 sm:pt-24' />
      <SectionGists className='pt-2 sm:pt-10' />
    </>
  )
}
