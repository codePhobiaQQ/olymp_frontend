import cls from './Header.module.scss'
import cn from 'classnames'
import TopNavigation from './../TopNavigation/TopNavigation'
import { ReactComponent as MagnifierSvg } from '@shared/assets/svg/header/magnifier.svg'
import { ReactComponent as Logo } from '@shared/assets/svg/header/logo.svg'
import { ReactComponent as Calendar } from '@shared/assets/svg/header/calendar.svg'
import AppLink, { AppLinkTheme } from '@shared/ui/AppLink/AppLink'
import { HStack } from '@shared/ui/Stack'
import Button from '@shared/ui/Button/Button.tsx'

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
    <HStack max align="center" justify="between" className={cn(className, cls.Header, cls[theme])}>
      <AppLink theme={AppLinkTheme.DEFAULT_LINK} to={'/'}>
        <Logo className={cn(cls.LogoWrapper)} />
      </AppLink>

      <TopNavigation className={cls.TopNavigation} />

      <HStack align="center" gap="24">
        <MagnifierSvg className={cls.HeaderActionsWrapperIcon} />
        <Calendar className={cls.HeaderActionsWrapperIcon} />
        <Button className={cn(cls.EnterBtn)} colorTheme="light" variant="outline_transparent">
          ВХОД
        </Button>
        {/*<OlympCalendar className={cn(cls.HeaderActionsWrapperCalendarIcon, 'm_r_20')} />*/}
      </HStack>
    </HStack>
  )
}

export default Header
