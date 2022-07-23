import cn from 'classnames'

const Tag = ({ className = '', children = null }) => (
  <span
    className={cn(
      'inline-block py-[4px] px-[9px] bg-transparent border-[1px] rounded-md border-[currentColor] border-solid leading-[16px] m-1',
      className
    )}>
    {children}
  </span>
)

export default Tag
