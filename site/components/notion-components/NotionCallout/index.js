import NotionText from '../NotionText'

const NotionCallout = (block) => {
  return (
    <div className='pl-4 py-4 bg-[#fafafa] my-5 flex'>
      <div className='pr-4'>{block?.callout?.icon?.emoji}</div>
      <p>
        <NotionText field={block?.callout?.text} />
      </p>
    </div>
  )
}

export default NotionCallout
