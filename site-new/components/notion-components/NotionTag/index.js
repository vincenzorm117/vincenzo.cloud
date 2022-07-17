import cn from 'classnames'

const NotionTag = ({ tag }) => (
  <span
    className={cn(
      `notion-${tag.color}_background`,
      'text-black-default px-[5px] inline-block mx-1 rounded leading-5'
    )}>
    {tag.name}
  </span>
)

export default NotionTag
