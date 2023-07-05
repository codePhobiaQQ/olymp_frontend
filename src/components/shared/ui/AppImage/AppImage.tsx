import { ImgHTMLAttributes } from 'react'
import styles from './AppImage.module.css'
import cn from 'classnames'

interface AppImageI extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string
}

const AppImage = (props: AppImageI) => {
	const { className = '', src, ...otherProps } = props

	return <img className={cn(className, styles.AppImage)} src={src} {...otherProps} />
}

export default AppImage
