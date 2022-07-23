import NotionText from '../NotionText'

const NotionParagraph = (block) => (
  <p>
    <NotionText field={block?.paragraph?.text} />
  </p>
)

export default NotionParagraph
