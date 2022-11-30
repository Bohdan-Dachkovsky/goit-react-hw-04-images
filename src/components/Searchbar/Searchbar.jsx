import React, { useState } from 'react'

import PropTypes from 'prop-types'
import stylebar from './style-bar.module.css'

const Searchbar = (onSubmit) => {
  const [input, onInput] = useState({
    search: '',
  })

  const handleChange = (event) => {
    onInput({
      search: event.currentTarget.value.toLowerCase(),
    })
  }

  const handleForm = (event) => {
    event.preventDefault()
    if (input.search === '') {
      alert(`Фото ${input.search} не загрузилися`)
      return
    }
    onSubmit(input.search)
    onInput('')
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
            name="search"
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
