import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

export enum ButtonTheme {
	OUTLINE_TRANSPARENT = 'outline_transparent',
}

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	className?: string
	theme?: ButtonTheme
	wrapperClassName?: string
}

const Button = (props: ButtonI) => {
	const { className = '', wrapperClassName, theme, children, ...otherProps } = props

	return (
		<div className={cn(wrapperClassName)}>
			<button className={cn(className, styles.Button, styles[theme])} {...otherProps}>
				{children}
			</button>
		</div>
	)
}

export default memo(Button)
