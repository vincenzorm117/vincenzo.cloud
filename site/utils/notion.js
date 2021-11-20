import { Client } from '@notionhq/client'

export const notion = new Client({ auth: process.env.NOTION_KEY })

export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID

export default notion

export const NOTION_TYPE_PARAGRAPH = 'paragraph'
export const NOTION_TYPE_TO_DO = 'to_do'
export const NOTION_TYPE_CHILD_PAGE = 'child_page'
export const NOTION_TYPE_BULLETED_LIST_ITEM = 'bulleted_list_item'
export const NOTION_TYPE_DIVIDER = 'divider'
export const NOTION_TYPE_TOGGLE = 'toggle'
export const NOTION_TYPE_QUOTE = 'quote'
export const NOTION_TYPE_CALLOUT = 'callout'
export const NOTION_TYPE_CHILD_DATABASE = 'child_database'
export const NOTION_TYPE_IMAGE = 'image'
export const NOTION_TYPE_HEADING_1 = 'heading_1'
export const NOTION_TYPE_HEADING_2 = 'heading_2'
export const NOTION_TYPE_HEADING_3 = 'heading_3'
export const NOTION_TYPE_COLUMN_LIST = 'column_list'
export const NOTION_TYPE_BREADCRUMB = 'breadcrumb'
export const NOTION_TYPE_TEMPLATE = 'template'
export const NOTION_TYPE_CODE = 'code'
