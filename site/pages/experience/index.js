import SectionEducation from '@/components/sections/SectionEducation'
import SectionExperience from '@/components/sections/SectionExperience'
import SectionUniversityExperience from '@/components/sections/SectionUniversityExperience'

export default function Page() {
  return (
    <>
      <SectionExperience className='pt-16 sm:pt-24' />
      <SectionEducation />
      <SectionUniversityExperience />
    </>
  )
}
