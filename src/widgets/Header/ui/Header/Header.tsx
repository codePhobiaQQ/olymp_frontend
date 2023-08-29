import cls from './Header.module.scss'
import cn from 'classnames'
import TopNavigation from './../TopNavigation/TopNavigation'
import LogoRaw from '@shared/assets/images/header/LogoRaw.png'
import SearchIconSvg from '@shared/assets/svg/SearchIconSvg'
import AppImage from '@shared/ui/AppImage/AppImage'
import { OlympCalendar } from '@shared/ui/OlympCalendar'
import AppLink, { AppLinkTheme } from '@shared/ui/AppLink/AppLink'

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
      <div className={cn(cls.HeaderInner)}>
        <AppLink theme={AppLinkTheme.DEFAULT_LINK} to={'/'}>
          <AppImage src={LogoRaw} wrapperClassName={cn(cls.LogoWrapper)} className={cn(cls.Logo)} />
        </AppLink>

        <TopNavigation className={cls.TopNavigation} />

        <div className={cn(cls.HeaderActionsWrapper)}>
          <SearchIconSvg className={cls.HeaderActionsWrapperIcon} />
          <OlympCalendar className={cn(cls.HeaderActionsWrapperCalendarIcon, 'm_r_20')} />
        </div>
      </div>
    </div>
  )
}

export default Header
