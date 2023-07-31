import cn from 'classnames'

interface TelegramI {
	className?: string
}

const Telegram = ({ className = '' }: TelegramI) => {
	return (
		<svg className={cn(className)} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_629_1740)'>
				<rect y='0.5' width='24' height='24' rx='12' fill='black' />
				<path d='M5.43087 12.3721C8.92962 10.8481 11.2621 9.84326 12.4284 9.35782C15.7621 7.97163 16.454 7.73088 16.9059 7.72273C17.0052 7.72113 17.2265 7.7457 17.3709 7.86241C17.4909 7.96085 17.5246 8.09398 17.5415 8.18745C17.5565 8.28082 17.5771 8.49363 17.5602 8.65976C17.3802 10.5573 16.5984 15.1619 16.2009 17.2872C16.034 18.1864 15.7021 18.4879 15.3815 18.5174C14.684 18.5815 14.1552 18.0569 13.4802 17.6146C12.4246 16.9221 11.8284 16.4913 10.8027 15.8157C9.61774 15.0349 10.3865 14.6058 11.0615 13.9045C11.2377 13.7209 14.309 10.9281 14.3671 10.6748C14.3746 10.6431 14.3821 10.525 14.3109 10.4628C14.2415 10.4003 14.1384 10.4217 14.0634 10.4386C13.9565 10.4626 12.2709 11.5778 9.00087 13.7841C8.52274 14.113 8.08962 14.2733 7.69962 14.2649C7.27212 14.2557 6.44712 14.0226 5.83399 13.8235C5.08399 13.5792 4.48587 13.45 4.53837 13.0351C4.56462 12.8191 4.86274 12.598 5.43087 12.3721Z' />
			</g>
			<defs>
				<clipPath id='clip0_629_1740'>
					<rect y='0.5' width='24' height='24' rx='12' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default Telegram
