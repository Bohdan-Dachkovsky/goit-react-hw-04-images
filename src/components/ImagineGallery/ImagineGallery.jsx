import css from './gallery.module.css'
import PropTypes from 'prop-types'

//	import { getPosts } from '../../shared/services/post.js';
const ImagineGallery = ({ onShow, items, error, Children }) => {
  const photos = items.map(({ id, user, largeImageURL, webformatURL }) => (
    <div key={id} className={css.box}>
      <ul className={css.list} onClick={() => onShow({ user, webformatURL })}>
        <li className={css.el}>
          <img src={largeImageURL} alt={user} loading="lazy" />
        </li>
      </ul>
    </div>
  ))
  return (
    <div className={css.distance}>
      {error && console.log('Виникла помилка, cпробуйте будь ласка пізніше')}

      <div className={css.container}>{Boolean(items.length) && photos}</div>
      {Children}
    </div>
  )
}
export default ImagineGallery
ImagineGallery.defaultProps = {
  items: [],
  searchName: '',
}

ImagineGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ),

  error: PropTypes.string,
  onLoader: PropTypes.func.isRequired,
  onBox: PropTypes.func,
  onShow: PropTypes.func,
}
