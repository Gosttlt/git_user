import React, { useState } from 'react'
import ModalWrapper from './ModalWrapper'
import s from './style.module.css'

interface IModalProps {
  button?: JSX.Element
}

const Modal: React.FC<IModalProps> = ({ children, button }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>{button}</div>
      {isOpen && (
        <ModalWrapper>
          <div className={s.modal}>
            {children}
            <div
              className={s.close}
              onClick={() => {
                setIsOpen(false)
              }}
            >
              x
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  )
}

export default Modal
