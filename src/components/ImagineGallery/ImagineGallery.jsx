import React, { Component } from 'react'
import css from './gallery.module.css'
// import PropTypes from 'prop-types';
import axios from 'axios'
// import { getPosts } from '../../shared/services/post.js';
export default class ImagineGallery extends Component {
  state = {
    // apiInfo: '',
    search: '',
    items: [],
    error: null,
    page: 6,
    isLoading: false,
  }

  componentDidMount() {
    const { searchName } = this.props
    const { page } = this.state
    axios
      .get(
        `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${searchName}&page=${page}&per_page=12&image_type=photo`,
      )
      .then(({ data }) => {
        console.log(data)
        this.setState({ items: data.hits })
      })
      .catch((error) => console.log(error.messages))
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchName } = this.props
    const { page } = this.state

    console.log(page)
    if (page !== prevState.page) {
      axios
        .get(
          `https://pixabay.com/api/?key=26335917-be25fd704b1936d7f202ea389&q=${searchName}&page=${page}&per_page=12&image_type=photo`,
        )
        .then(({ data }) => {
          console.log(data)
          this.setState({ items: data.hits })
        })
        .catch((error) => console.log(error.messages))
    }
  }
  // modalOpen = (prevState) => {
  //   this.setState({
  //     showModal: !prevState,
  //   })
  // }

  //  fetchPosts() {
  //   const { page, items } = this.state;
  //   // let { search } = this.props.searchName;
  //   try {
  //     const data = await getPosts(page);
  //     this.setState(({ items }) => {
  //       return { items: [...items, ...data] };
  //     });
  //   } catch (error) {6
  //     this.setState({ error: error });
  //   }
  // }

  loadPage = (prevState) => {
    this.setState({ page: prevState.page + 1 })
  }

  render() {
    const { items, error } = this.state
    const { onShow } = this.props
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
        <button className={css.btn} onClick={this.loadPage}>
          Load More
        </button>
      </div>
    )
  }
}
