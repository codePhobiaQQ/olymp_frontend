import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { ReactComponent as Arrow } from '@shared/assets/images/svg/arrow.svg'
import cls from './Button.module.scss'
import cn from 'classnames'

type variantType = 'outline_transparent_arrow' | 'default' | 'outline_transparent' | 'only_text'
type colorTheme = 'dark' | 'light' | 'blue_transparent' | 'blue_fill'

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  variant?: variantType
  colorTheme?: colorTheme
}

const variantsClsMapper: Record<variantType, string> = {
  default: cls.default,
  outline_transparent_arrow: cls.outline_transparent_arrow,
  outline_transparent: cls.outline_transparent,
  only_text: cls.only_text,
}
const colorThemeClsMapper: Record<colorTheme, string> = {
  light: cls.light,
  dark: cls.dark,
  blue_transparent: cls.blueTransparent,
  blue_fill: cls.blueFill,
}

const Button = (props: ButtonI) => {
  const { variant = 'outline_transparent_arrow', children, className, colorTheme, ...otherProps } = props

  const hasArrow = variant === 'outline_transparent_arrow'

  return (
    <button
      className={cn(className, cls.Button, variantsClsMapper[variant], colorTheme && colorThemeClsMapper[colorTheme])}
      {...otherProps}
    >
      {children}
      {hasArrow && <Arrow />}
    </button>
  )
}

export default memo(Button)
