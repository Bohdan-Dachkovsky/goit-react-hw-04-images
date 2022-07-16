import React, { Component } from 'react'

// import PropTypes from 'prop-types';
import stylebar from './style-bar.module.css'

export default class Searchbar extends Component {
  state = {
    pool: '',
  }

  handleChange = (event) => {
    this.setState({
      pool: event.currentTarget.value.toLowerCase(),
    })
  }

  handleForm = (event) => {
    event.preventDefault()

    if (this.state.pool === '') {
      alert(`Фото ${this.state.pool} не загрузилися`)

      return
    }
    this.props.onSubmit(this.state.pool)
    // this.setState({ pool: '' })
  }

  render() {
    const { handleForm, handleChange } = this
    return (
      <header className={stylebar.searchbar}>
        <form onSubmit={handleForm} className={stylebar.form}>
          <button type="submit" className={stylebar.button}>
            <span className={stylebar.buttonLabel}>Search</span>
          </button>
          <label htmlFor="searchPhoto">
            <input
              className={stylebar.input}
              type="text"
              name="pool"
              id="searchPhoto"
              placeholder="Search images and photos"
              onChange={handleChange}
            />
          </label>
        </form>
      </header>
    )
  }
}
