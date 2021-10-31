import React, { useEffect } from 'react'
import s from './style.module.css'
import ReactDOM from 'react-dom'

const $modal = document.createElement('div') as HTMLElement
const ModalWrapper: React.FC = ({ children }) => {
  useEffect(() => {
    document.body.append($modal)
    return () => {
      document.body.removeChild($modal)
    }
  }, [])

  return (
    <>
      {ReactDOM.createPortal(<div className={s.modal}>{children}</div>, $modal)}
    </>
  )
}

export default ModalWrapper
