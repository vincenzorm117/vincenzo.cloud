import cn from 'classnames'
import { IconLink } from '@/components/atoms/Icon'
import PortfolioItem from '@/components/molecules/PortfolioItem'
import proExperiences from '@/data/professional-experience.json'
import styles from './styles.module.scss'

const SectionExperience = ({}) => (
  <section className='bg-purple-dark pb-20'>
    <h1 className='text-white-default text-6xl text-center pt-20'>
      Experience
    </h1>
    <p className='text-center pb-14 text-white-default'>
      <span className='text-[20px]'>Resume:</span>
      <a
        className={cn(styles.link, 'mx-[24px]')}
        href='/resume/VincenzoMarconi-Resume.pdf'
      >
        <IconLink className='inline-block fill-current' /> PDF
      </a>
      <a className={styles.link} href='/resume/VincenzoMarconi-Resume.docx'>
        <IconLink className='inline-block fill-current' /> DocX
      </a>
    </p>
    <div className='max-w-4xl mx-auto'>
      {proExperiences.map((e) => (
        <PortfolioItem data={e} className='py-10' />
      ))}
    </div>
  </section>
)
export default SectionExperience
