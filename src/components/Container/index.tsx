import React from 'react'
import s from './style.module.css'

const Container: React.FC = ({ children }) => {
  return <div className={s.container}>{children}</div>
}

export default Container
