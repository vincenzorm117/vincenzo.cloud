import cn from 'classnames'
import PropTypes from 'prop-types'

const TYPE_TOP = 'top'
const TYPE_TOP_LEFT = 'top-left'
const TYPE_TOP_RIGHT = 'top-right'
const TYPE_BOTTOM = 'bottom'
const TYPE_BOTTOM_LEFT = 'bottom-left'
const TYPE_BOTTOM_RIGHT = 'bottom-right'
const TYPE_LEFT = 'left'
const TYPE_LEFT_TOP = 'left-top'
const TYPE_LEFT_BOTTOM = 'left-bottom'
const TYPE_RIGHT = 'right'
const TYPE_RIGHT_TOP = 'right-top'
const TYPE_RIGHT_BOTTOM = 'right-bottom'

export const TYPES = [
  TYPE_TOP,
  TYPE_TOP_LEFT,
  TYPE_TOP_RIGHT,
  TYPE_BOTTOM,
  TYPE_BOTTOM_LEFT,
  TYPE_BOTTOM_RIGHT,
  TYPE_LEFT,
  TYPE_LEFT_TOP,
  TYPE_LEFT_BOTTOM,
  TYPE_RIGHT,
  TYPE_RIGHT_TOP,
  TYPE_RIGHT_BOTTOM,
]

const TYPE_STYLES = {}
TYPE_STYLES[TYPE_TOP] = 'bottom-[100%] -translate-x-1/2 left-1/2'
TYPE_STYLES[TYPE_TOP_LEFT] = 'bottom-[100%] left-0'
TYPE_STYLES[TYPE_TOP_RIGHT] = 'bottom-[100%] right-0'
TYPE_STYLES[TYPE_BOTTOM] = 'top-[100%] -translate-x-1/2 left-1/2'
TYPE_STYLES[TYPE_BOTTOM_LEFT] = 'top-[100%] left-0'
TYPE_STYLES[TYPE_BOTTOM_RIGHT] = 'top-[100%] right-0'
TYPE_STYLES[TYPE_LEFT] = 'right-[100%] -translate-y-1/2 top-1/2'
TYPE_STYLES[TYPE_LEFT_TOP] = 'right-[100%] top-0'
TYPE_STYLES[TYPE_LEFT_BOTTOM] = 'right-[100%] bottom-0'
TYPE_STYLES[TYPE_RIGHT] = 'left-[100%] -translate-y-1/2 top-1/2'
TYPE_STYLES[TYPE_RIGHT_TOP] = 'left-[100%] top-0'
TYPE_STYLES[TYPE_RIGHT_BOTTOM] = 'left-[100%] bottom-0'

const Tooltip = ({
  HtmlTag = 'div',
  className = '',
  tooltipClassName = 'whitespace-pre',
  type = TYPE_TOP,
  tooltipChildren = null,
  children = null,
}) => (
  <HtmlTag className={cn('relative', className)}>
    {children}
    <div className={cn('absolute', TYPE_STYLES[type], tooltipClassName)}>
      {tooltipChildren}
    </div>
  </HtmlTag>
)

Tooltip.propTypes = {
  type: PropTypes.oneOf(TYPES),
  tooltipClassName: PropTypes.string,
}

Tooltip.defaultProps = {
  type: TYPE_TOP,
  tooltipClassName: 'whitespace-pre',
}

export default Tooltip
