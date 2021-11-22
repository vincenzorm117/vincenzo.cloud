import PortfolioItem from '@/components/molecules/PortfolioItem'
import universityExperiences from '@/data/university-experience.json'

const SectionUniversityExperience = () => (
  <section className='py-10 px-10 bg-white-default dark:bg-purple-dark'>
    <div className='max-w-4xl mx-auto'>
      {universityExperiences.map((e, index) => (
        <PortfolioItem key={index} data={e} className='py-10' />
      ))}
    </div>
  </section>
)
export default SectionUniversityExperience
