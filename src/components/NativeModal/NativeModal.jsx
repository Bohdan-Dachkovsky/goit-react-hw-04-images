import React, { useEffect } from 'react'
import Button from '../Button/Button.jsx'
import css from './popup.module.css'

const NativeModal = ({ button, onClickPictures }) => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        button()
      }
    })
  }, [button])
  const { links, created_at } = onClickPictures
  return (
    <div className={css.popup}>
      <div className={css.overlay}>
        <div className={css.formBody}>
          <Button clasName={css.close} onClick={button}>
            x
          </Button>
          <img src={links.photos} alt={created_at} loading="eager" />
          <p>
            <i>Created in {created_at}</i>
          </p>
        </div>
      </div>
    </div>
  )
}
export default NativeModal
