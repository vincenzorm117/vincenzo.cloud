import cn from 'classnames'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'

const SectionGists = ({ className = '' }) => {
  const [gists, setGists] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/vincenzorm117/gists')
      .then((r) => r.json())
      .then((gistsResponse) => {
        const newGists = gistsResponse
          .map((g) => {
            g.updated_at = new Date(g.updated_at)
            return g
          })
          .filter((g) => !isEmpty(g.description.trim()))

        newGists.sort((repoA, repoB) => repoB.updated_at - repoA.updated_at)
        setGists(newGists)
      })
  }, [])

  if (gists === null) {
    return null
  }

  return (
    <section className={cn('dark:bg-purple-dark pb-20 px-6', className)}>
      <h2 className='text-cyan-dark text-5xl text-center'>Gists</h2>
      <ul className='max-w-4xl mx-auto mt-20 rounded-lg bg-gray-light dark:bg-[#15161e]'>
        {gists.map((gist, index) => (
          <li
            key={gist.id}
            className={cn(
              'border-gray-e2 dark:border-[#383c51] border-solid',
              index !== 0 && 'border-t-[1px]'
            )}>
            <a
              href={gist.html_url}
              target='_blank'
              className='block py-5 px-10 '>
              {!isEmpty(gist.description) && (
                <p className='text-base sm:text-md text-gray-a3'>
                  {gist.description}
                </p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default SectionGists
