import cn from 'classnames'

const Tag = ({ color = 'green', className = '', children = null }) => {
  let styles = ''

  switch (color) {
    default:
      styles = 'border-green-grey text-green-grey'
  }

  return (
    <span
      className={cn(
        'inline-block py-[4px] px-[9px] bg-transparent border-[1px] rounded-md border-green-grey border-solid leading-[16px] m-1',
        styles,
        className
      )}
    >
      {children}
    </span>
  )
}

export default Tag
