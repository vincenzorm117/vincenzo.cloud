import Tag from '@components/atoms/Tag'
import cn from 'classnames'

const ItemList = ({ list, allTags, depth }) => {
  const listTypes = ['list-disc', 'list-[circle]']

  if (Array.isArray(list)) {
    return (
      <ul className={cn('ml-[18px]', listTypes[depth % 2])}>
        {list.map((b, index) => {
          if (Array.isArray(b)) {
            return (
              <li key={index} className='py-[3px] pl-[2px] list-none'>
                <ItemList list={b} allTags={allTags} depth={depth + 1} />
              </li>
            )
          }
          return (
            <li key={index} className='py-[3px] pl-[2px]'>
              <ItemList list={b} allTags={allTags} depth={depth + 1} />
            </li>
          )
        })}
      </ul>
    )
  }
  return list.split(/(\{[^}]+\})/).map((x, index) => {
    if (x[0] === '{' && x[x.length - 1] === '}') {
      const tech = x.replace(/(^\{|\}$)/g, '')
      allTags.add(tech)
      return (
        <b
          key={index}
          className='dark:text-green-light text-green-dark whitespace-nowrap'>
          {tech}
        </b>
      )
    }
    return <span key={index} dangerouslySetInnerHTML={{ __html: x }} />
  })
}

const PortfolioItemInline = ({ data = {}, className = '' }) => {
  const { dates, title, body2, tags } = data

  const allTags = new Set(tags)
  if (!body2) {
    return null
  }

  return (
    <div className={className}>
      <div className='text-red-pink text-base uppercase pb-1'>
        {dates.start}
        {' - '}
        {dates.end}
      </div>
      <h2 className='text-purple-darkest dark:text-white-default text-2xl sm:text-[32px]'>
        {title} {data.type}
      </h2>
      <div className='text-[#8f8f8f] dark:text-white-b2 pt-3 pb-6 leading-[1.4] text-[16px] sm:text-[20px]'>
        <ItemList list={body2} allTags={allTags} depth={0} />
      </div>
      <div className='-mx-1 text-base text-[#54a057] dark:text-green-grey sm:text-lg'>
        {[...tags].map((tag, index) => (
          <Tag className='mx-1' key={index}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default PortfolioItemInline
