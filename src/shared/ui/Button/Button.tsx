import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { ReactComponent as Arrow } from '@shared/assets/images/svg/arrow.svg'
import cls from './Button.module.scss'
import cn from 'classnames'

type variantType = 'outline_transparent_arrow' | 'default'

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  variant?: variantType
}

const Button = (props: ButtonI) => {
  const { variant = 'outline_transparent_arrow', children, className, ...otherProps } = props

  if (variant === 'outline_transparent_arrow') {
    return (
      <button className={cn(className, cls[variant])} {...otherProps}>
        {children}
        <Arrow />
      </button>
    )
  }

  return (
    <button className={cn(className, cls[variant])} {...otherProps}>
      {children}
    </button>
  )
}

export default memo(Button)
