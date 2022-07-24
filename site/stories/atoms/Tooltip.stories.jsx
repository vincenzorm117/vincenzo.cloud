import Tooltip, { TYPES } from '@components/atoms/Tooltip'

export default {
  title: 'atom/Tooltip',
  component: Tooltip,
  argTypes: {
    type: {
      options: TYPES,
      control: { type: 'radio' },
    },
    tooltipClassName: {
      control: { type: 'text' },
    },
  },
}

const Template = (args) => (
  <div className='h-[200px] flex items-center justify-center'>
    <div className='inline-block'>
      <Tooltip {...args} />
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  children: <div className='p-2 bg-green-grey'>Content</div>,
  tooltipChildren: 'Tooltip Content',
  tooltipClassName: 'whitespace-pre bg-[red]',
}
