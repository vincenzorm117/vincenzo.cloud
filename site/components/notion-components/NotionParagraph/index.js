import NotionText from '../NotionText'

const NotionParagraph = (block) => {
  return (
    <p>
      <NotionText field={block?.paragraph?.text} />
    </p>
  )
}

export default NotionParagraph
