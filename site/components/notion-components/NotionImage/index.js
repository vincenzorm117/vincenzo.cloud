import NotionText from '../NotionText'

const NotionImage = (block) => {
  return (
    <figure>
      <img src={block?.local?.localUrl} />
      {(block?.image?.caption ?? false) && (
        <figcaption>
          <NotionText field={block?.image?.caption} />
        </figcaption>
      )}
    </figure>
  )
}

export default NotionImage
