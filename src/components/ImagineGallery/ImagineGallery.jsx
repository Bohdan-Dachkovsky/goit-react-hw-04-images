import css from './gallery.module.css'
import PropTypes from 'prop-types'

//	import { getPosts } from '../../shared/services/post.js';
const ImagineGallery = ({ onShow, items, error, Children }) => {
  const photos = items.map(({ id, links, published_at }) => (
    <div key={id} className={css.box}>
      <ul className={css.list} onClick={() => onShow({ links, published_at })}>
        <li className={css.el}>
          <img src={links.photos} alt={published_at} loading="lazy" />
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
      links: PropTypes.shape({ photos: PropTypes.string.isRequired }),
      published_at: PropTypes.string.isRequired,
    }),
  ),

  error: PropTypes.string,
  onLoader: PropTypes.func.isRequired,
  onBox: PropTypes.func,
  onShow: PropTypes.func,
}
