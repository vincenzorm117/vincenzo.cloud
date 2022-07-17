import Tag from '@/components/atoms/Tag'

const PortfolioItem = ({ data = {}, className = '' }) => {
  const { dates, title, body, tags } = data

  return (
    <div className={className}>
      <div className='text-red-pink text-base uppercase pb-1'>{dates}</div>
      <h2 className='text-purple-darkest dark:text-white-default text-2xl sm:text-[32px]'>
        {title}
      </h2>
      <ul className='text-[#8f8f8f] dark:text-white-b2 pt-3 pb-6 leading-[1.4] text-[16px] sm:text-[20px]'>
        {body.map((b, index) => (
          <li
            key={index}
            className='py-[3px] pl-[15px]  text-[#8f8f8f] dark:text-white-b2 relative before:block before:absolute before:top-[14px] before:left-0 before:rounded-full before:border-solid before:border-[1px] before:border-currentColor before:h-[3px] before:w-[3px]'
            dangerouslySetInnerHTML={{ __html: b }}
          />
        ))}
      </ul>
      <div className='-mx-1 text-base text-[#54a057] dark:text-green-grey sm:text-lg'>
        {tags.map((tag, index) => (
          <Tag className='mx-1' key={index}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default PortfolioItem
