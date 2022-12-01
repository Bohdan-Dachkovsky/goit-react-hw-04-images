import React from 'react'
import PropTypes from 'prop-types'
// import styles from './ContactForm.module.css';
import bcss from './button.module.css'
const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className={bcss.button} type="submit">
        {props.children}
      </button>
    </>
  )
}
export default Button

Button.propTypes = {
  props: PropTypes.func.isRequired,
}
