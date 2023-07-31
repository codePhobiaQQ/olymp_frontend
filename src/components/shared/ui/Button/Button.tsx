import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import cls from './Button.module.css'
import cn from 'classnames'

export enum ButtonBorderRadiusTheme {
	S = 's',
	M = 'm',
	L = 'l',
	XL = 'xl',
	XXL = 'xxl',
}

export enum ButtonColorTheme {
	DARK = 'dark',
	LIGHT = 'light',
}

export enum ButtonTheme {
	OUTLINE_TRANSPARENT = 'outline_transparent',
	SUBSCRIBE_THEME = 'subscribe_theme',
}

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	className?: string
	theme?: ButtonTheme
	wrapperClassName?: string
	borderRadius?: ButtonBorderRadiusTheme
	colorTheme?: ButtonColorTheme
}

const Button = (props: ButtonI) => {
	const {
		className = '',
		wrapperClassName,
		theme = ButtonTheme.OUTLINE_TRANSPARENT,
		borderRadius = ButtonBorderRadiusTheme.M,
		colorTheme = ButtonColorTheme.DARK,
		children,
		...otherProps
	} = props

	return (
		<div className={cn(wrapperClassName)}>
			<button className={cn(className, cls.Button, cls[theme], cls[borderRadius], cls[colorTheme])} {...otherProps}>
				{children}
			</button>
		</div>
	)
}

export default memo(Button)
