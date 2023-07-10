import AppImage from '@/components/shared/ui/AppImage/AppImage'
import cls from './SubscribeScreen.module.css'
import cn from 'classnames'
import bg from './../../../../../assets/images/subscribe/subscribeBg.jpg'

interface SubscribeScreenI {
	className?: string
}

const SubscribeScreen = ({ className = '' }: SubscribeScreenI) => {
	return (
		<div className={cn(className, cls.SubscribeScreen)}>
			<div className={cn(className, cls.SubscribeScreenInner)}>
				<div className={cn(cls.bg)}>
					<AppImage src={bg} />
				</div>

				<div className={cn(cls.ContentWrapper)}>
					<div className={cn(cls.ContentInnner)}>123</div>
				</div>
			</div>
		</div>
	)
}

export default SubscribeScreen
