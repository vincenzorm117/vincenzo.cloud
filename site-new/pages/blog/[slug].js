import { promises as fs } from 'fs'
import path from 'path'
import NotionPage from '@/components/notion-components/NotionPage'

const Page = ({ page, blocks }) => <NotionPage page={page} blocks={blocks} />

export default Page

export async function getStaticPaths() {
  const pages = JSON.parse(
    (
      await fs.readFile(
        path.resolve(__dirname, '../../../../.content/pages.json')
      )
    ).toString()
  )

  return {
    paths: Object.values(pages).map((p) => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const blocks = JSON.parse(
    (
      await fs.readFile(
        path.resolve(__dirname, '../../../../.content/blocks.json')
      )
    ).toString()
  )
  const pages = JSON.parse(
    (
      await fs.readFile(
        path.resolve(__dirname, '../../../../.content/pages.json')
      )
    ).toString()
  )

  const page = Object.values(pages).find((p) => p?.slug === slug)

  return {
    props: {
      page,
      pages,
      blocks,
    },
  }
}
