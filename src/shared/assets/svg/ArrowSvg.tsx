import cn from 'classnames'
import { SVGProps } from 'react'

export interface ArrowSvgI extends SVGProps<SVGSVGElement> {
	className?: string
}

const ArrowSvg = ({ className = '', ...otherProps }: ArrowSvgI) => {
	return (
		<svg className={cn(className)} {...otherProps} viewBox='0 0 17 17' xmlns='http://www.w3.org/2000/svg'>
			<path d='M16.5 1.5C16.5 0.671573 15.8284 0 15 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H13.5V15C13.5 15.8284 14.1716 16.5 15 16.5C15.8284 16.5 16.5 15.8284 16.5 15V1.5ZM3.06066 15.5607L16.0607 2.56066L13.9393 0.43934L0.93934 13.4393L3.06066 15.5607Z' />
		</svg>
	)
}

export default ArrowSvg
