import cn from 'classnames'

interface CalendarIconSvgI {
	className?: string
}

const CalendarIconSvg = ({ className = '' }: CalendarIconSvgI) => {
	return (
		<svg className={cn(className)} viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect
				x='2.69141'
				y='3.38281'
				width='22.6153'
				height='22.6153'
				rx='5'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
			/>
			<path
				d='M2.69141 9.66727H25.3067'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinejoin='round'
			/>
			<path
				d='M19.6536 1.5L19.6536 5.26922'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8.345 1.5L8.345 5.26922'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.08789 14.696H8.3443'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.3691 14.696H14.6255'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.6523 14.696H20.9088'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.08789 19.7195H8.3443'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.3691 19.7195H14.6255'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M19.6523 19.7195H20.9088'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default CalendarIconSvg
