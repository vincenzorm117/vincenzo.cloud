import PropTypes from 'prop-types'

const TYPE_BUTTON = 'button'
const TYPE_LINK = 'link'

const Button = ({ type = TYPE_BUTTON, children = null }) => {
  if (type === 'link') return <a>{children}</a>

  return <button>{children}</button>
}

Button.propTypes = {
  type: PropTypes.oneOf([TYPE_BUTTON, TYPE_LINK])
}

Button.defaultProps = {
  type: TYPE_BUTTON
}

export default Button
