import React from 'react'
import s from './style.module.css'

interface ITypographyProps {
  type?: 'default' | 'error' | 'success'
  size?: 'small' | 'medium' | 'large' | 'fullwidth'
  weight?: 'lighter' | 'normal' | 'bolder'
}

const Typography: React.FC<ITypographyProps> = ({
  children,
  type = 'default',
  size = 'medium',
  weight = 'normal',
}) => {
  return (
    <div className={`${s.typography} ${s[type]} ${s[size]} ${s[weight]}`}>
      {children}
    </div>
  )
}

export default Typography
