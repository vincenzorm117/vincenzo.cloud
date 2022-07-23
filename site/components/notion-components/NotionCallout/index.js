import NotionText from '../NotionText'

const NotionCallout = (block) => (
  <div className='pl-4 py-4 bg-[#fafafa] dark:bg-[#2e2e2e] my-5 flex'>
    <div className='pr-4'>{block?.callout?.icon?.emoji}</div>
    <p>
      <NotionText field={block?.callout?.text} />
    </p>
  </div>
)

export default NotionCallout
