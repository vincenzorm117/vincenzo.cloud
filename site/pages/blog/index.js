import { promises as fs } from 'fs'
import path from 'path'
import NotionText from '@/components/notion-components/NotionText'

export default function Page({ pages, blocks }) {
  return (
    <article
      className='pt-16 sm:pt-24 pb-32 dark:bg-purple-dark dark:text-white-default min-h-full'
      style={{ minHeight: 'calc(100vh - 137px)' }}
    >
      <h1 className='text-center pb-20 text-5xl'>Blog</h1>
      <div className='flex flex-wrap max-w-3xl mx-auto px-10'>
        {Object.values(pages).map((page) => (
          <a
            href={`/blog/${page.slug}/`}
            key={page.id}
            className='block text-center w-full md:w-1/2'
          >
            {page?.local?.cover?.localUrl && (
              <img src={page.local.cover.localUrl} className='rounded-3xl' />
            )}
            <h2 className='text-2xl mt-3'>
              <NotionText field={page.properties.Name.title} />
            </h2>
          </a>
        ))}
      </div>
    </article>
  )
}

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
      blocks
    }
  }
}
