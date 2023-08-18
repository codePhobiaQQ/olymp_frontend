import styles from './Text.module.css'
import cn from 'classnames'
import { HTMLAttributes } from 'react'

export enum TextTheme {
	PARAGRAPH_THEME = 'paragraph_theme',
	SPAN_THEME = 'span_theme',
}

interface TextI extends HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
	className?: string
	theme?: TextTheme
	text?: string
}

const Text = (props: TextI) => {
	const { className = '', theme = TextTheme.PARAGRAPH_THEME, text, ...otherProps } = props

	if (theme == TextTheme.PARAGRAPH_THEME)
		return (
			<p className={cn(className, styles.Text, styles[theme])} {...otherProps}>
				{text}
			</p>
		)

	if (theme == TextTheme.SPAN_THEME)
		return (
			<span className={cn(className, styles.Text, styles[theme])} {...otherProps}>
				{text}
			</span>
		)
}

export default Text
