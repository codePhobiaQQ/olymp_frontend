import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { ReactComponent as Arrow } from '@shared/assets/images/svg/arrow.svg'
import cls from './Button.module.scss'
import cn from 'classnames'

type variantType = 'outline_transparent_arrow' | 'default' | 'outline_transparent'
type colorTheme = 'dark' | 'light'

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
}
const colorThemeClsMapper: Record<colorTheme, string> = {
  light: cls.light,
  dark: cls.dark,
}

const Button = (props: ButtonI) => {
  const { variant = 'outline_transparent_arrow', children, className, colorTheme = 'dark', ...otherProps } = props

  const hasArrow = variant === 'outline_transparent_arrow'

  return (
    <button
      className={cn(className, cls.Button, variantsClsMapper[variant], colorThemeClsMapper[colorTheme])}
      {...otherProps}
    >
      {children}
      {hasArrow && <Arrow />}
    </button>
  )
}

export default memo(Button)
