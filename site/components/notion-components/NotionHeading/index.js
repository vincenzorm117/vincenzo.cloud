import {
  NOTION_TYPE_HEADING_1,
  NOTION_TYPE_HEADING_2,
  NOTION_TYPE_HEADING_3,
} from 'utils/notion'

import NotionText from '../NotionText'

const NotionHeading = (block) => {
  const { type } = block

  const str = <NotionText field={block?.[type]?.text} />

  switch (block.type) {
    case NOTION_TYPE_HEADING_3:
      return <h3 className='text-3xl mt-5 mb-2'>{str}</h3>
    case NOTION_TYPE_HEADING_2:
      return <h2 className='text-4xl mt-5 mb-2'>{str}</h2>
    case NOTION_TYPE_HEADING_1:
      return <h1 className='text-5xl mt-5 mb-2'>{str}</h1>
    default:
      return null
  }
}

export default NotionHeading
