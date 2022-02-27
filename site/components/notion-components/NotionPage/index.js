import NotionText from '../NotionText'
import NotionComponent from '@/components/notion-components'
import NotionTag from '../NotionTag'
import NotionProvider from '../../../providers/NotionProvider'

const NotionPage = ({ page, blocks }) => {
  const last_modified = new Date(page.last_edited_time)

  return (
    <NotionProvider.Provider value={{ page, blocks }}>
      {page?.local?.cover?.localUrl && (
        <div>
          <img
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
