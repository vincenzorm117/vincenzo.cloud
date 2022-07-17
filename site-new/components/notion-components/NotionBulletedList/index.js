import NotionText from '../NotionText'

const NotionBulletedList = (block) => {
  const list = block?.bulleted_list ?? []

  return (
    <ul className='list-disc pl-5'>
      {list.map((item, index) => (
        <li key={index}>
          <NotionText field={item?.bulleted_list_item?.text} />
        </li>
      ))}
    </ul>
  )
}

export default NotionBulletedList
