import cn from 'classnames'

interface LightArrowSvgI {
	className?: string
}

const LightArrowSvg = ({ className = '' }: LightArrowSvgI) => {
	return (
		<svg className={cn(className)} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M15.9993 2.03701C16.0198 1.48511 15.5889 1.02113 15.037 1.00069L6.04318 0.66758C5.49127 0.647139 5.02729 1.07798 5.00685 1.62988C4.98641 2.18179 5.41725 2.64577 5.96915 2.66621L13.9637 2.9623L13.6676 10.9568C13.6471 11.5087 14.078 11.9727 14.6299 11.9931C15.1818 12.0136 15.6458 11.5828 15.6662 11.0308L15.9993 2.03701ZM1.68045 15.7328L15.6805 2.73279L14.3195 1.26721L0.319549 14.2672L1.68045 15.7328Z'
				// fill='#09062E'
			/>
		</svg>
	)
}

export default LightArrowSvg
