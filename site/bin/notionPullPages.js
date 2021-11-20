const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
const { Client } = require('@notionhq/client')
const uuidv4 = require('uuid').v4

class Cache {
  db = {}

  constructor() {}

  add(obj) {
    if (!this.db.hasOwnProperty(obj.id)) {
      this.db[obj.id] = obj
    }
  }

  get(id) {
    return this.db[id]
  }
}

const DownloadImage = async (url) =>
  new Promise((resolve, reject) => {
    const fileExtension = url.match(/(\.[a-zA-Z0-9]+)(?:\?.*)$/)?.[1] ?? ''
    const { get } = /^https/i.test(url) ? https : http
    const localFileName = `${uuidv4()}${fileExtension}`
    const localFilePath = path.resolve(
      __dirname,
      `../public/blog/${localFileName}`
    )

    const file = fs.createWriteStream(localFilePath)
    const request = get(url, (response) => {
      response.pipe(file)
      file.on('finish', () => {
        file.close(() => {
          resolve({
            localFileName,
            localUrl: `/blog/${localFileName}`
          })
        })
      })
    }).on('error', function (err) {
      fs.unlink(localFilePath)
      reject(err)
    })
  })

const BlockGetAllChildren = async (res, notion) => {
  const response = await notion.blocks.children.list({
    block_id: res.id,
    page_size: 100
  })

  let curr = response
  while (curr.has_more === true) {
    curr = await notion.blocks.children.list({
      block_id: res.id,
      page_size: 100,
      start_cursor: curr.next_cursor
    })

    response.results = response.results.concat(curr.results)
  }

  return response
}

;(async () => {
  const cache = new Cache()
  const pages = {}
  const queue = []

  const notion = new Client({ auth: process.env.NOTION_KEY })

  const db = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID
  })

  for await (const res of db.results) {
    cache.add(res)

    if (res.object !== 'page') {
      continue
    }

    pages[res.id] = res

    const response = await BlockGetAllChildren(res, notion)

    res.blocks = response.results

    for (const block of response.results) {
      cache.add(block)

      if (block.has_children === true) {
        queue.push(block)
      }
    }
  }

  while (queue.length > 0) {
    const currBlock = queue.pop()

    const response = await BlockGetAllChildren(currBlock, notion)

    for (const block of response.results) {
      cache.add(block)

      if (block.has_children === true) {
        queue.push(block)
      }
    }
  }

  for (const page of Object.values(pages)) {
    page.local = {}

    if (page?.cover?.file?.url) {
      page.local.cover = await DownloadImage(page.cover.file.url)
    }

    try {
      page.slug = page.properties.slug.rich_text
        .map((s) => s.plain_text)
        .join('')
    } catch (_) {
      page.sluug = page.id
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, '../.content/pages.json'),
    JSON.stringify(pages)
  )
  fs.writeFileSync(
    path.resolve(__dirname, '../.content/blocks.json'),
    JSON.stringify(cache.db)
  )
})()
