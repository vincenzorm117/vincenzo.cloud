import NotionText from '../NotionText'

const NotionCallout = (block) => {
  return (
    <div className='pl-4 py-4 bg-[#fafafa] my-5'>
      <NotionText field={block?.callout?.text} />
    </div>
  )
}

export default NotionCallout
