import { ImgHTMLAttributes } from 'react'
import styles from './AppImage.module.css'
import cn from 'classnames'

interface AppImageI extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string
}

const AppImage = (props: AppImageI) => {
	const { className = '', src, ...otherProps } = props

	return (
		<div className={cn(className)}>
			<img className={cn(styles.AppImage)} src={src} {...otherProps} />
		</div>
	)
}

export default AppImage
