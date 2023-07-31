import { ImgHTMLAttributes } from 'react'
import cls from './AppImage.module.css'
import cn from 'classnames'

interface AppImageI extends ImgHTMLAttributes<HTMLImageElement> {
	wrapperClassName?: string
	className?: string
}

const AppImage = (props: AppImageI) => {
	const { className = '', wrapperClassName = '', src, ...otherProps } = props

	return (
		<div className={cn(wrapperClassName)}>
			<img className={cn(cls.AppImage, className)} src={src} {...otherProps} />
		</div>
	)
}

export default AppImage
