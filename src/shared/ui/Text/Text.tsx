import cls from './Text.module.scss'
import cn from 'classnames'
import { HTMLAttributes } from 'react'

type fontWeightMode = 'REGULAR' | 'LIGHT' | 'SEMI_BOLD-bold'
enum FontWeight {
  REGULAR = 'regular',
  LIGHT = 'light',
  SEMI_BOLD = 'semi-bold',
}

export enum TextTheme {
  PARAGRAPH_THEME = 'paragraph_theme',
  SPAN_THEME = 'span_theme',
}

interface TextI extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  className?: string
  theme?: TextTheme
  text?: string
  fontWeightMode?: fontWeightMode
}

const Text = (props: TextI) => {
  const {
    className = '',
    theme = TextTheme.PARAGRAPH_THEME,
    fontWeightMode = FontWeight.REGULAR,
    text,
    ...otherProps
  } = props

  if (theme == TextTheme.PARAGRAPH_THEME)
    return (
      <p className={cn(className, cls.Text, cls[theme], cls[fontWeightMode])} {...otherProps}>
        {text}
      </p>
    )

  if (theme == TextTheme.SPAN_THEME)
    return (
      <span className={cn(className, cls.Text, cls[theme], cls[fontWeightMode])} {...otherProps}>
        {text}
      </span>
    )
}

export default Text
