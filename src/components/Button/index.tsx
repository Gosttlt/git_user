import React from 'react'
import s from './style.module.css'

interface IButtonProps {
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={s.button}>
      {children}
    </button>
  )
}
export default Button
