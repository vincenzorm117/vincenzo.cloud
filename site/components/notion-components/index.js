import { useNotionContext } from 'providers/NotionProvider'
import {
  NOTION_TYPE_BREADCRUMB,
  NOTION_TYPE_BULLETED_LIST_ITEM,
  NOTION_TYPE_CODE,
  NOTION_TYPE_DIVIDER,
  NOTION_TYPE_HEADING_1,
  NOTION_TYPE_HEADING_2,
  NOTION_TYPE_HEADING_3,
  NOTION_TYPE_PARAGRAPH
} from 'utils/notion'
import NotionBulletedList from './NotionBulletedList'
import NotionCode from './NotionCode'
import NotionDivider from './NotionDivider'
import NotionHeading from './NotionHeading'
import NotionParagraph from './NotionParagraph'

const NotionComponent = ({ block }) => {
  switch (block.type) {
    case NOTION_TYPE_PARAGRAPH:
      return NotionParagraph(block)
    case NOTION_TYPE_DIVIDER:
      return NotionDivider(block)
    case NOTION_TYPE_BULLETED_LIST_ITEM:
      return NotionBulletedList(block)
    case NOTION_TYPE_HEADING_1:
    case NOTION_TYPE_HEADING_2:
    case NOTION_TYPE_HEADING_3:
      return NotionHeading(block)
    case NOTION_TYPE_CODE:
      return NotionCode(block)
    default:
      return (
        <div className='p-4 bg-purple-dark text-white-default'>
          Unknown Block ({block.id})
        </div>
      )
      return null
  }
}

export default NotionComponent
