import NotionText from '@components/notion-components/NotionText'
import { promises as fs } from 'fs'
import path from 'path'

const Page = ({ pages, blocks }) => {
  const pagesArray = Object.values(pages)

  for (const page of pagesArray) {
    page.local.last_edited = new Date(page.last_edited_time)
  }

  return (
    <article className='pt-16 sm:pt-24 pb-32 dark:bg-purple-dark dark:text-white-default min-h-full flex-1 w-full'>
      <h1 className='text-center pb-20 text-5xl'>Blog</h1>
      <div className='flex justify-center'>
        <ul className='inline-flex flex-col max-w-6xl mx-auto px-10'>
          {pagesArray.map((page) => (
            <li key={page.id} className='mb-10'>
              <h2>
                <a
                  href={`/blog/${page.slug}/`}
                  className='block w-full text-3xl'>
                  <NotionText field={page.properties.Name.title} />
                </a>
              </h2>
              <time
                dateTime={page.last_edited_time.replace(/T.*$/, '')}
                className='text-gray-a3'>
                {page.local.last_edited.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Page

export async function getStaticProps(context) {
  const blocks = JSON.parse(
    (
      await fs.readFile(
        path.resolve(__dirname, '../../../.content/blocks.json')
      )
    ).toString()
  )
  const pages = JSON.parse(
    (
      await fs.readFile(path.resolve(__dirname, '../../../.content/pages.json'))
    ).toString()
  )

  return {
    props: {
      pages,
      blocks,
    },
  }
}
