import css from './gallery.module.css'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazy-load'

// import { getPosts } from '../../shared/services/post.js';
const ImagineGallery = ({ onShow, items, error, Children }) => {
  const photos = items.map(({ createdAt, id, image }) => (
    <div key={id} className={css.box}>
      <ul className={css.list} onClick={() => onShow({ image, createdAt })}>
        <li className={css.el}>
          <LazyLoad height={500} offsetVertical={300}>
            <img src={image} alt={createdAt} loading="lazy" />
          </LazyLoad>
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
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),

  error: PropTypes.string,
  onLoader: PropTypes.func.isRequired,
  onBox: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
}
