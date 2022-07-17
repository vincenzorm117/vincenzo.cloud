import cn from 'classnames'
import { IconLink } from '@/components/atoms/Icon'
import PortfolioItem from '@/components/molecules/PortfolioItem'
import proExperiences from '@/data/professional-experience.json'
import styles from './styles.module.scss'

const SectionExperience = ({ className = '' }) => (
  <section
    className={cn('py-6 px-6 bg-white-default dark:bg-purple-dark', className)}>
    <h1 className='dark:text-white-default text-purple-dark text-6xl text-center'>
      Experience
    </h1>
    <p className='text-center pb-8 sm:pb-14 text-purple-dark dark:text-white-default'>
      <span className='text-[20px]'>Resume:</span>
      <a
        className={cn(styles.link, 'mx-[24px]')}
        href='/resume/VincenzoMarconi-Resume.pdf'>
        <IconLink className='inline-block fill-current' /> PDF
      </a>
      <a className={styles.link} href='/resume/VincenzoMarconi-Resume.docx'>
        <IconLink className='inline-block fill-current' /> DocX
      </a>
    </p>
    <div className='max-w-4xl mx-auto'>
      {proExperiences.map((e, index) => (
        <PortfolioItem key={index} data={e} className='py-8 sm:py-10' />
      ))}
    </div>
  </section>
)
export default SectionExperience
