import cls from './Header.module.scss'
import cn from 'classnames'
import TopNavigation from './../TopNavigation/TopNavigation'
import LogoMini from '@/components/shared/assets/images/header/LogoMini.png'
import SearchIconSvg from '@/components/shared/assets/svg/SearchIconSvg'
import LkIconSvg from '@/components/shared/assets/svg/LkIconSvg'
import AppImage from '@/components/shared/ui/AppImage/AppImage'
import { OlympCalendar } from '@/components/common/OlympCalendar'
import AppLink, { AppLinkTheme } from '@/components/shared/ui/AppLink/AppLink'

export enum HeaderTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface HeaderI {
  className?: string
  theme?: HeaderTheme
}

const Header = ({ className = '', theme = HeaderTheme.DARK }: HeaderI) => {
  return (
    <div className={cn(className, cls.Header, cls[theme])}>
      <div className={cn(cls.HeaderInnner)}>
        <AppLink theme={AppLinkTheme.DEFAULT_LINK} to={'/'}>
          <AppImage src={LogoMini} wrapperClassName={cn(cls.LogoWrapper)} className={cn(cls.Logo)} />
        </AppLink>

        <TopNavigation className={cls.TopNavigation} />
        <div className={cn(cls.HeaderActionsWrapper)}>
          <SearchIconSvg className={cls.HeaderActionsWrapperIcon} />
          <OlympCalendar className={cn(cls.HeaderActionsWrapperCalendarIcon, 'm_r_20')} />
          {/* <CalendarIconSvg className={cls.HeaderActionsWrapperIcon} /> */}
          <LkIconSvg className={cls.HeaderActionsWrapperIcon} />
        </div>
      </div>
    </div>
  )
}

export default Header
