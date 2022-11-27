import PropTypes from 'prop-types'
import button from './btn.module.css'
const LoaderButton = ({ loadPage }) => {
  return (
    <button
      className={button.style}
      onClick={() => {
        loadPage()
      }}
    >
      Load More
    </button>
  )
}
export default LoaderButton
LoaderButton.propTypes = {
  loadPage: PropTypes.func,
}
