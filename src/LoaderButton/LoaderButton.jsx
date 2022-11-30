import PropTypes from 'prop-types'
import button from './btn.module.css'
const LoaderButton = ({ onClick }) => {
  return (
    <button className={button.style} onClick={() => onClick()}>
      Load More
    </button>
  )
}
export default LoaderButton
LoaderButton.propTypes = {
  loadPage: PropTypes.func,
}
