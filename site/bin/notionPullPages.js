const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
const { Client } = require('@notionhq/client')
const uuidv4 = require('uuid').v4

const NOTION_TYPE_BULLETED_LIST_ITEM = 'bulleted_list_item'
const NOTION_TYPE_NUMBERED_LIST_ITEM = 'numbered_list_item'

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
    // [Step] Setup page cover with local URL
    page.local = {}

    if (page?.cover?.file?.url) {
      page.local.cover = await DownloadImage(page.cover.file.url)
    }

    // [Step] Setup slug
    try {
      page.slug = page.properties.slug.rich_text
        .map((s) => s.plain_text)
        .join('')
    } catch (_) {
      page.slug = page.id
    }

    // [Step] Group lists
    for (let i = 0; i < page.blocks.length; i++) {
      const currBlock = page.blocks[i]

      // Skip block if not part of a list
      if (
        currBlock.type !== NOTION_TYPE_BULLETED_LIST_ITEM &&
        currBlock.type !== NOTION_TYPE_NUMBERED_LIST_ITEM
      ) {
        continue
      }

      const listType = currBlock.type
      const listTypeKey = listType.replace(/_item$/, '')

      const bulletItemBlock = {
        object: 'block',
        type: listTypeKey,
        id: uuidv4(),
        [listTypeKey]: []
      }

      for (let j = i; j < page.blocks.length; j++) {
        if (page.blocks[j].type === listType) {
          bulletItemBlock[listTypeKey].push(page.blocks[j])
        } else {
          break
        }
      }

      page.blocks.splice(
        i,
        bulletItemBlock[listTypeKey].length,
        bulletItemBlock
      )
    }
  }

  // [Step] Write files
  fs.writeFileSync(
    path.resolve(__dirname, '../.content/pages.json'),
    JSON.stringify(pages)
  )
  fs.writeFileSync(
    path.resolve(__dirname, '../.content/blocks.json'),
    JSON.stringify(cache.db)
  )
})()
