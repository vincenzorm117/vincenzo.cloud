import NotionText from '../NotionText'

const NotionToDo = (block) => {
  return (
    <div>
      <input
        className='inline-block mr-2'
        type='checkbox'
        checked={block?.to_do?.checked}
      />
      <NotionText field={block?.to_do?.text} />
    </div>
  )
}

export default NotionToDo
