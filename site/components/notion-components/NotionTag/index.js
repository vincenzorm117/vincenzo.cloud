import NotionText from '../NotionText'
import NotionComponent from '@/components/notion-components'
import cn from 'classnames'

const NotionTag = ({ tag }) => {
  return (
    <span
      className={cn(
        `notion-${tag.color}_background`,
        'text-black-default px-[5px] inline-block mx-1 rounded leading-5'
      )}
    >
      {tag.name}
    </span>
  )
}

export default NotionTag
