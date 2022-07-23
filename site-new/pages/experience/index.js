import SectionEducation from '@components/organisms/SectionEducation'
import SectionExperienceInline from '@components/organisms/SectionExperienceInline'
import SectionUniversityExperience from '@components/organisms/SectionUniversityExperience'

const Page = () => (
  <>
    {/* <SectionExperience className='pt-16 sm:pt-24' /> */}
    <SectionExperienceInline className='pt-16 sm:pt-24' />
    <SectionEducation />
    <SectionUniversityExperience />
  </>
)

export default Page
