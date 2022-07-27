import React, { useEffect } from 'react'
import Button from '../Button/Button.jsx'
import css from './popup.module.css'

const NativeModal = ({ button }) => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.button()
      }
    })
  }, [])

  return (
    <div className={css.popup}>
      <div className={css.overlay}>
        <div className={css.formBody}>
          <Button clasName={css.close} onClick={button}>
            x
          </Button>
          <img src="" alt="" loading="eager" />
        </div>
      </div>
    </div>
  )
}
export default NativeModal
