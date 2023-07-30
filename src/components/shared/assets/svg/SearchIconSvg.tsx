import cn from 'classnames'

interface SearchIconSvgI {
	className?: string
}

const SearchIconSvg = ({ className = '' }: SearchIconSvgI) => {
	return (
		<svg className={cn(className)} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle
				cx='10.8333'
				cy='10.8333'
				r='9.33333'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M17.25 17.7851L23.0833 23.6185'
				// stroke='#C5C5C5'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default SearchIconSvg
