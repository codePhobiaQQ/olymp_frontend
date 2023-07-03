import { ButtonHTMLAttributes } from 'react'
import styles from './HeaderButton.module.css'
import cn from 'classnames'

interface HeaderButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	text?: string
}

const HeaderButton = (props: HeaderButtonI) => {
	const { className, text = '', ...otherProps } = props

	return (
		<button className={cn(className, styles.HeaderButton)} {...otherProps}>
			{text}
		</button>
	)
}

export default HeaderButton
