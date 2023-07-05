import styles from './Typography.module.css'
import cn from 'classnames'
import { HTMLAttributes } from 'react'

export enum TypographyTheme {
	PARAGRAPH_THEME = 'paragraph_theme',
	SPAN_THEME = 'span_theme',
}

interface TypographyI extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
	className?: string
	theme?: TypographyTheme
	text?: string
}

const Typography = (props: TypographyI) => {
	const { className = '', theme = TypographyTheme.PARAGRAPH_THEME, text, ...otherProps } = props

	if (theme == TypographyTheme.PARAGRAPH_THEME)
		return (
			<p className={cn(className, styles.Typography, styles[theme])} {...otherProps}>
				{text}
			</p>
		)

	if (theme == TypographyTheme.SPAN_THEME)
		return (
			<span className={cn(className, styles.Typography, styles[theme])} {...otherProps}>
				{text}
			</span>
		)
}

export default Typography
