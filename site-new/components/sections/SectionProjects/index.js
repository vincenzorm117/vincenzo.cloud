import { Fragment } from 'react'
import cn from 'classnames'
import PortfolioItem from '@/components/molecules/PortfolioItem'
import projectData from '@/data/projects.json'

const SectionProjects = ({ className = '' }) => (
  <section
    className={cn(
      'bg-white-default text-purple-dark dark:bg-purple-dark dark:text-white-default pb-20 px-6',
      className
    )}>
    <h1 className='text-6xl text-center'>Projects</h1>
    {projectData.map((p) => (
      <Fragment key={p.title}>
        <h2 className='text-center  uppercase text-xl mt-20 font-sans font-light tracking-widest'>
          {p.title}
        </h2>
        <div className='max-w-4xl mx-auto'>
          {p.projects.map((e, index) => (
            <PortfolioItem key={index} data={e} className='py-8 sm:py-10' />
          ))}
        </div>
      </Fragment>
    ))}
  </section>
)
export default SectionProjects
