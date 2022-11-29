import React, { useEffect } from 'react'
import Button from '../Button/Button.jsx'
import css from './popup.module.css'

const NativeModal = ({ button, onClickPictures }) => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'CapsLock') {
        button()
      }
    })
  }, [button])
  const { user, webformatURL } = onClickPictures
  return (
    <div className={css.popup}>
      <div className={css.overlay}>
        <div className={css.formBody}>
          <Button clasName={css.close} onClick={button}>
            x
          </Button>
          <img src={webformatURL} alt={user} loading="eager" />
          <p>
            <i>Created in {user}</i>
          </p>
        </div>
      </div>
    </div>
  )
}
export default NativeModal
