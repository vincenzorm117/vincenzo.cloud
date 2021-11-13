import cn from 'classnames'
import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'

const SectionGists = ({}) => {
  const [gists, setGists] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/vincenzorm117/gists')
      .then((r) => r.json())
      .then((gistsResponse) => {
        for (let gist of gistsResponse) {
          gist.updated_at = new Date(gist.updated_at)
        }
        gistsResponse = gistsResponse.filter(
          (g) => !isEmpty(g.description.trim())
        )

        gistsResponse.sort(
          (repoA, repoB) => repoB.updated_at - repoA.updated_at
        )
        setGists(gistsResponse)
      })
  }, [])

  if (gists === null) {
    return null
  }

  return (
    <section>
      <h2 className='text-cyan-dark text-5xl text-center pt-20'>Gists</h2>
      <ul className='max-w-4xl mx-auto my-20 rounded-lg bg-gray-light'>
        {gists.map((gist, index) => (
          <li
            key={gist.id}
            className={cn(
              'py-5 px-10 border-gray-e2 border-solid',
              index !== 0 && 'border-t-[1px]'
            )}
          >
            <a href={gist.html_url} target='_blank'>
              {!isEmpty(gist.description) && (
                <p className='text-md text-gray-a3'>{gist.description}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default SectionGists
