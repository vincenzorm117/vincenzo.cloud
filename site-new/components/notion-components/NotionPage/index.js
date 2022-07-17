import { useMemo } from 'react'
import NotionComponent from '@/components/notion-components'
import NotionProvider from '../../../providers/NotionProvider'
import NotionTag from '../NotionTag'
import NotionText from '../NotionText'

const NotionPage = (props) => {
  const notionState = useMemo(() => props, Object.values(props))
  const { page } = notionState

  const lastModified = new Date(page.last_edited_time)

  return (
    <NotionProvider.Provider value={notionState}>
      {page?.local?.cover?.localUrl && (
        <div>
          <img
            alt=''
            className='max-h-[30vh] object-cover shadow-lg'
            src={page?.local?.cover?.localUrl}
          />
        </div>
      )}
      <div className='pb-20 px-10 max-w-5xl mx-auto'>
        <h1 className='text-center text-6xl mt-12'>
          <NotionText field={page?.properties?.Name?.title} />
        </h1>
        <div className='text-center dark:text-gray-a3 text-gray-dark mb-10 mt-4'>
          <time dateTime={page.last_edited_time.replace(/T.*$/, '')}>
            {lastModified.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
        {(page?.properties?.Tags?.multi_select?.length ?? 0) > 0 && (
          <div className='text-center mb-3'>
            {page?.properties?.Tags?.multi_select.map((tag) => (
              <NotionTag key={tag.id} tag={tag} />
            ))}
          </div>
        )}
        <div className='mt-32 text-gray-darkest dark:text-gray-light'>
          {page.blocks.map((b) => (
            <NotionComponent key={b.id} block={b} />
          ))}
        </div>
      </div>
    </NotionProvider.Provider>
  )
}

export default NotionPage
