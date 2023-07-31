import cls from './Header.module.css'
import cn from 'classnames'
import TopNavigation from './../TopNavigation/TopNavigation'
import LogoMini from '@/components/shared/assets/images/header/LogoMini.png'
import CalendarIconSvg from '@/components/shared/assets/svg/CalendarIconSvg'
import SearchIconSvg from '@/components/shared/assets/svg/SearchIconSvg'
import LkIconSvg from '@/components/shared/assets/svg/LkIconSvg'
import AppImage from '@/components/shared/ui/AppImage/AppImage'
import { OlympCalendar } from '@/components/common/OlympCalendar'

interface HeaderI {
	className?: string
}

const Header = ({ className = '' }: HeaderI) => {
	return (
		<div className={cn(className, cls.Header)}>
			<div className={cn(cls.HeaderInnner)}>
				<AppImage src={LogoMini} wrapperClassName={cn(cls.LogoWrapper)} className={cn(cls.Logo)} />
				<TopNavigation />
				<div className={cn(cls.HeaderActionsWrapper)}>
					<SearchIconSvg className={cls.HeaderActionsWrapperIcon} />
					<OlympCalendar className={'m_r_20'} />
					{/* <CalendarIconSvg className={cls.HeaderActionsWrapperIcon} /> */}
					<LkIconSvg className={cls.HeaderActionsWrapperIcon} />
				</div>
			</div>
		</div>
	)
}

export default Header
