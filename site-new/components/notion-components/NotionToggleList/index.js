import { IconRightArrow } from '@components/atoms/Icon'
import cn from 'classnames'
import { useState } from 'react'
import NotionComponent from '..'
import NotionText from '../NotionText'

const NotionToggleList = (block) => {
  const [isOpen, setIsOpen] = useState(false)
  const childBlocks = block?.child_blocks ?? []

  return (
    <div>
      <div>
        <button
          type='button'
          className='text-gray-a3 mr-[10px]'
          onClick={() => setIsOpen(!isOpen)}>
          <IconRightArrow className={cn('w-[10px]', isOpen && 'rotate-90')} />
        </button>
        <NotionText field={block?.toggle?.text} />
      </div>
      {isOpen && (
        <div className='pl-4'>
          {childBlocks.map((b) => (
            <NotionComponent key={b.id} block={b} />
          ))}
        </div>
      )}
    </div>
  )
}

export default NotionToggleList
