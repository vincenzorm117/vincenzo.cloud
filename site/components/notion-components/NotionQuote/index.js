import NotionText from '../NotionText'

const NotionQuote = (block) => {
  return (
    <blockquote className='border-l-[6px] border-solid border-red-pink bg-[#fafafa] pl-4 py-4'>
      <NotionText field={block?.quote?.text} />
    </blockquote>
  )
}

export default NotionQuote
