import cls from './Header.module.css'
import cn from 'classnames'
import TopNavigation from '../TopNavigation/TopNavigation'
import LogoMini from './../../shared/assets/images/header/LogoMini.png'
import CalendarIconSvg from '@/components/shared/assets/svg/CalendarIconSvg'
import SearchIconSvg from '@/components/shared/assets/svg/SearchIconSvg'
import LkIconSvg from '@/components/shared/assets/svg/LkIconSvg'
import AppImage from '@/components/shared/ui/AppImage/AppImage'

interface HeaderI {
	className?: string
}

const Header = ({ className = '' }: HeaderI) => {
	return (
		<div className={cn(className, cls.Header)}>
			<div className={cn(cls.HeaderInnner)}>
				<AppImage src={LogoMini} className={cn(cls.Logo)} />
				<TopNavigation />
				<div className={cn(cls.HeaderActionsWrapper)}>
					<SearchIconSvg className={cls.HeaderActionsWrapperIcon} />
					<CalendarIconSvg className={cls.HeaderActionsWrapperIcon} />
					<LkIconSvg className={cls.HeaderActionsWrapperIcon} />
				</div>
			</div>
		</div>
	)
}

export default Header
