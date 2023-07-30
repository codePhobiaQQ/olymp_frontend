import cn from 'classnames'

interface LkIconSvgI {
	className?: string
}

const LkIconSvg = ({ className = '' }: LkIconSvgI) => {
	return (
		<svg className={cn(className)} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle
				cx='4.8'
				cy='4.8'
				r='4.8'
				transform='matrix(-1 0 0 1 14.0508 2)'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
			/>
			<path
				d='M0.849609 18.7216C0.849609 17.6892 1.49863 16.7682 2.47092 16.421V16.421C6.85446 14.8554 11.6448 14.8554 16.0283 16.421V16.421C17.0006 16.7682 17.6496 17.6892 17.6496 18.7216V20.694C17.6496 21.9111 16.5716 22.846 15.3668 22.6739L13.068 22.3455C10.5353 21.9837 7.96396 21.9837 5.43123 22.3455L3.13245 22.6739C1.92759 22.846 0.849609 21.9111 0.849609 20.694V18.7216Z'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
			/>
			<path
				d='M21.0504 13.8008H26.6504'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M23.8477 11.0016L23.8477 16.6016'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default LkIconSvg
