import NotionText from '../NotionText'
import NotionComponent from '@/components/notion-components'
import NotionTag from '../NotionTag'
import { useEffect, useState } from 'react'
import Loading from '@/components/atoms/Loading'
import NotionProvider from '../../../providers/NotionProvider'

const NotionPage = ({ page, blocks }) => {
  const last_modified = new Date(page.last_edited_time)

  return (
    // <GlobalProvider.Provider value={{ maskHook }}></GlobalProvider.Provider>
    <NotionProvider.Provider value={{ page, blocks }}>
      {page?.local?.cover?.localUrl && (
        <div className=''>
          <img
            className='max-h-[30vh] object-cover shadow-lg'
            src={page?.local?.cover?.localUrl}
          />
        </div>
      )}
      <div className='pb-20 px-10 max-w-5xl mx-auto min-h-screen'>
        <h1 className='text-center text-6xl mt-10'>
          <NotionText field={page?.properties?.Name?.title} />
        </h1>
        <div className='text-center text-gray-dark mb-10'>
          <time dateTime={page.last_edited_time.replace(/T.*$/, '')}>
            {last_modified.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
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
        <div className='mt-32'>
          {page.blocks.map((b) => (
            <NotionComponent key={b.id} block={b} />
          ))}
        </div>
      </div>
    </NotionProvider.Provider>
  )
}

export default NotionPage
