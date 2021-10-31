import React from 'react'
import s from './style.module.css'

const Preloader: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>Loading...</div>
      <div className={s.spinner}>
        <div />
      </div>
    </div>
  )
}
export default Preloader
