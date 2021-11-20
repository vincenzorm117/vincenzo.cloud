import { useNotionContext } from 'providers/NotionProvider'
import {
  NOTION_TYPE_BREADCRUMB,
  NOTION_TYPE_BULLETED_LIST,
  NOTION_TYPE_CALLOUT,
  NOTION_TYPE_CODE,
  NOTION_TYPE_DIVIDER,
  NOTION_TYPE_HEADING_1,
  NOTION_TYPE_HEADING_2,
  NOTION_TYPE_HEADING_3,
  NOTION_TYPE_IMAGE,
  NOTION_TYPE_NUMBERED_LIST,
  NOTION_TYPE_PARAGRAPH,
  NOTION_TYPE_QUOTE,
  NOTION_TYPE_TOGGLE,
  NOTION_TYPE_TO_DO
} from 'utils/notion'
import NotionBulletedList from './NotionBulletedList'
import NotionCallout from './NotionCallout'
import NotionCode from './NotionCode'
import NotionDivider from './NotionDivider'
import NotionHeading from './NotionHeading'
import NotionImage from './NotionImage'
import NotionNumberedList from './NotionNumberedList'
import NotionParagraph from './NotionParagraph'
import NotionQuote from './NotionQuote'
import NotionToDo from './NotionToDo'
import NotionToggleList from './NotionToggleList'

const NotionComponent = ({ block }) => {
  switch (block.type) {
    case NOTION_TYPE_PARAGRAPH:
      return NotionParagraph(block)
    case NOTION_TYPE_DIVIDER:
      return NotionDivider(block)
    case NOTION_TYPE_BULLETED_LIST:
      return NotionBulletedList(block)
    case NOTION_TYPE_NUMBERED_LIST:
      return NotionNumberedList(block)
    case NOTION_TYPE_HEADING_1:
    case NOTION_TYPE_HEADING_2:
    case NOTION_TYPE_HEADING_3:
      return NotionHeading(block)
    case NOTION_TYPE_IMAGE:
      return NotionImage(block)
    case NOTION_TYPE_CALLOUT:
      return NotionCallout(block)
    case NOTION_TYPE_QUOTE:
      return NotionQuote(block)
    case NOTION_TYPE_TOGGLE:
      return NotionToggleList(block)
    case NOTION_TYPE_TO_DO:
      return NotionToDo(block)
    case NOTION_TYPE_CODE:
      return NotionCode(block)
    default:
      return (
        <div className='p-4 bg-purple-dark text-white-default'>
          <h2>Unknown Block</h2>
          {block.id} <br />
          {block.type}
        </div>
      )
  }
}

export default NotionComponent
