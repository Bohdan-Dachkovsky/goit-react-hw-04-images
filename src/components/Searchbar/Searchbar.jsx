import React, { useState } from 'react'

import PropTypes from 'prop-types'
import stylebar from './style-bar.module.css'

const Searchbar = (onSubmit) => {
  const [input, onInput] = useState({
    pool: '',
  })

  const handleChange = (event) => {
    onInput({
      pool: event.currentTarget.value.toLowerCase(),
    })
  }

  const handleForm = (event) => {
    event.preventDefault()
    if (input.pool === '') {
      alert(`Фото ${input.pool} не загрузилися`)
      return
    }
    this.props.onSubmit(input.pool)
  }

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
export default Searchbar
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
