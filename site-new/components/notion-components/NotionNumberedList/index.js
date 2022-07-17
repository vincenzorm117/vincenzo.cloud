import NotionText from '../NotionText'

const NotionNumberedList = (block) => {
  const list = block?.numbered_list ?? []

  return (
    <ol className='list-decimal pl-5'>
      {list.map((item, index) => (
        <li key={index}>
          <NotionText field={item?.numbered_list_item?.text} />
        </li>
      ))}
    </ol>
  )
}

export default NotionNumberedList
