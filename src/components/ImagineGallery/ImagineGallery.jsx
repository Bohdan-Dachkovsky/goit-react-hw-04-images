import React, { Component } from 'react'
import css from './gallery.module.css'
import PropTypes from 'prop-types'

// import { getPosts } from '../../shared/services/post.js';
export default class ImagineGallery extends Component {
  render() {
    const { onShow, items, error } = this.props
    const photos = items.map(({ id, largeImageURL, webformatURL, tags }) => (
      <div
        key={id}
        onClick={() => onShow({ largeImageURL, tags })}
        className={css.box}
      >
        <ul className={css.list}>
          <li className={css.el}>
            <img src={webformatURL} alt={tags} />
          </li>
        </ul>
      </div>
    ))
    return (
      <div className={css.distance}>
        {error && console.log('Виникла помилка, cпробуйте будь ласка пізніше')}

        <div className={css.container}>{items.length && photos}</div>
        {this.props.children}
      </div>
    )
  }
}
ImagineGallery.defaultProps = {
  searchName: '',
}

ImagineGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  error: PropTypes.string,
  onLoader: PropTypes.func.isRequired,
  onBox: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
}
