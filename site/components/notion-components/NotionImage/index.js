import NotionText from '../NotionText'

const NotionImage = (block) => (
  <figure>
    <img src={block?.local?.localUrl} alt={block?.image?.caption ?? ''} />
    {(block?.image?.caption ?? false) && (
      <figcaption>
        <NotionText field={block?.image?.caption} />
      </figcaption>
    )}
  </figure>
)

export default NotionImage
