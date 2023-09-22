import cls from './Text.module.scss'
import cn from 'classnames'
import {HTMLAttributes, ReactNode} from 'react'

type alignType = 'left' | 'center' | 'right'
type fontWeightMode = 'regular' | 'light' | 'semi_bold'
type variantType = 'p' | 'span'

interface TextI extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  className?: string
  variant?: variantType
  align?: alignType
  text?: string
  fontWeightMode?: fontWeightMode
  children?: ReactNode
}

const fontWeightClsMapper: Record<fontWeightMode, string> = {
  'regular': cls.regular,
  'light': cls.light,
  'semi_bold': cls.semiBold,
}
const alignClsMapper: Record<alignType, string> = {
  'left': cls.alignLeft,
  'center': cls.alignCenter,
  'right': cls.alignRight,
}

const Text = (props: TextI) => {
  const {
    className = '',
    variant = 'p',
    fontWeightMode = 'regular',
    align = 'left',
    text,
    children,
    ...otherProps
  } = props

  if (variant === 'p')
    return (
      <p
        className={cn(className, cls.Text, cls[variant], alignClsMapper[align], fontWeightClsMapper[fontWeightMode])} {...otherProps}>
        {children ? children : text}
      </p>
    )

  if (variant === 'span')
    return (
      <span
        className={cn(className, cls.Text, cls[variant], alignClsMapper[align], fontWeightClsMapper[fontWeightMode])} {...otherProps}>
        {children ? children : text}
      </span>
    )
}

export default Text
