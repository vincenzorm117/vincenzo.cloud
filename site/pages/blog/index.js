import { promises as fs } from 'fs'
import path from 'path'
import NotionText from '@/components/notion-components/NotionText'

export default function Page({ pages, blocks }) {
  return (
    <div className='bg-purple-dark text-white-dark py-32'>
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
            <h2 className='text-3xl'>
              <NotionText field={page.properties.Name.title} />
            </h2>
          </a>
        ))}
      </div>
    </div>
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
