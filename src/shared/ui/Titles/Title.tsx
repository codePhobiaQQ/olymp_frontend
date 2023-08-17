import { HTMLAttributes } from 'react'
import styles from './Title.module.css'
import cn from 'classnames'

export enum TitleTheme {
	H1 = 'h1',
	H1_UPPERCASE = 'h1_uppercase',
	H2 = 'h2',
	TITLE_WITH_TEXT = 'title_with_text',
	H3 = 'h3',
	H4 = 'h4',
	H4_THIN = 'h4_thin',
	H5 = 'h5',
	H6 = 'h6',
}

interface TitleI extends HTMLAttributes<HTMLHeadingElement> {
	className?: string
	theme?: TitleTheme
	text?: string
}

const Title = (props: TitleI) => {
	const { className = '', theme = TitleTheme.H1, text, ...otherProps } = props

	if (theme == TitleTheme.H1) {
		return (
			<h1 className={cn(className, styles.Title, styles[TitleTheme.H1])} {...otherProps}>
				{text}
			</h1>
		)
	}

	if (theme == TitleTheme.H1_UPPERCASE) {
		return (
			<h1 className={cn(className, styles.Title, styles[TitleTheme.H1_UPPERCASE])} {...otherProps}>
				{text}
			</h1>
		)
	}

	if (theme == TitleTheme.H2) {
		return (
			<h2 className={cn(className, styles.Title, styles[TitleTheme.H2])} {...otherProps}>
				{text}
			</h2>
		)
	}

	if (theme == TitleTheme.TITLE_WITH_TEXT) {
		return (
			<h2 className={cn(className, styles.Title, styles[TitleTheme.TITLE_WITH_TEXT])} {...otherProps}>
				{text}
			</h2>
		)
	}

	if (theme == TitleTheme.H3) {
		return (
			<h3 className={cn(className, styles.Title, styles[TitleTheme.H3])} {...otherProps}>
				{text}
			</h3>
		)
	}

	if (theme == TitleTheme.H4) {
		return (
			<h4 className={cn(className, styles.Title, styles[TitleTheme.H4])} {...otherProps}>
				{text}
			</h4>
		)
	}

	if (theme == TitleTheme.H4_THIN) {
		return (
			<h4 className={cn(className, styles.Title, styles[TitleTheme.H4_THIN])} {...otherProps}>
				{text}
			</h4>
		)
	}

	if (theme == TitleTheme.H5) {
		return (
			<h5 className={cn(className, styles.Title, styles[TitleTheme.H5])} {...otherProps}>
				{text}
			</h5>
		)
	}

	if (theme == TitleTheme.H6) {
		return (
			<h6 className={cn(className, styles.Title, styles[TitleTheme.H6])} {...otherProps}>
				{text}
			</h6>
		)
	}
}

export default Title
