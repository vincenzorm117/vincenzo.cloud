import cn from 'classnames'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'

const SectionRepos = ({ className = '' }) => {
  const [repos, setRepos] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/vincenzorm117/repos')
      .then((r) => r.json())
      .then((reposResponse) => {
        for (const repo of reposResponse) {
          repo.pushed_at = new Date(repo.pushed_at)
        }
        reposResponse.sort((repoA, repoB) => repoB.pushed_at - repoA.pushed_at)
        setRepos(reposResponse)
      })
  }, [])

  if (repos === null) {
    return null
  }

  return (
    <section className={cn('dark:bg-purple-dark pt-20 pb-10 px-6', className)}>
      <h1 className='text-cyan-dark text-5xl text-center'>Repos</h1>
      <ul className='max-w-4xl mx-auto my-20 rounded-lg bg-gray-light dark:bg-[#15161e]'>
        {repos.map((repo, index) => (
          <li
            key={repo.id}
            className={cn(
              'border-gray-e2 dark:border-[#383c51] border-solid',
              index !== 0 && 'border-t-[1px]'
            )}>
            <a
              href={repo.html_url}
              target='_blank'
              className='py-5 px-10 block'>
              <h2 className='text-black-chrome dark:text-white-default uppercase text-[18px] sm:text-[22px] leading-tight font-semibold overflow-hidden text-overflow tracking-wider'>
                {repo.name}
              </h2>
              {!isEmpty(repo.description) && (
                <p className='text-base sm:text-md text-gray-a3 dark:text-[#a3a3a3]'>
                  {repo.description}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default SectionRepos
