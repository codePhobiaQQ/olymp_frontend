import cls from './Header.module.scss';
import cn from 'classnames';
import TopNavigation from './../TopNavigation/TopNavigation';
import { ReactComponent as MagnifierSvg } from '@shared/assets/svg/header/magnifier.svg';
import { ReactComponent as Logo } from '@shared/assets/svg/header/logo.svg';
import { ReactComponent as Calendar } from '@shared/assets/svg/header/calendar.svg';
import AppLink from '@shared/ui/AppLink/AppLink';
import { HStack } from '@shared/ui/Stack';
import Button from '@shared/ui/Button/Button.tsx';
import { AuthDialog } from '@widgets/AuthDialog';
import { useCallback, useState } from 'react';
import { AppActions, getIsAuthDialogOpen } from '@app/providers/storeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { SearchArea } from './../SearchArea/SearchArea.tsx';
import { ReactComponent as HamburgerSvg } from '@shared/assets/svg/header/hamburger.svg'

export type themeType = 'light' | 'dark'
export const themeClsMapper: Record<themeType, string> = {
  'light': cls.light,
  'dark': cls.dark,
}

interface HeaderI {
  className?: string;
  theme?: themeType
}

const Header = ({ className = '', theme = 'dark' }: HeaderI) => {
  const dispatch = useDispatch()
  const { setIsAuthDialogOpen, setIsMenuOpen } = AppActions
  const isAuthDialogOpen = useSelector(getIsAuthDialogOpen)

  const openAuthDialogHandler = useCallback(() => {
    dispatch(setIsAuthDialogOpen(true))
  }, [setIsAuthDialogOpen])

  // ----------- Search Line -----------
  const [isSearchLineOpen, setIsSearchLineOpen] = useState<boolean>(false)
  const openSearchLine = () => {
    setIsSearchLineOpen(true)
  }
  // ----------------------------------------

  // ----------- Open MenuHandler -----------
  const openMenuHandler = () => {
    dispatch(setIsMenuOpen(true))
  }

  return (
    <>
      <HStack max align='center' justify='between' className={cn(className, cls.Header, themeClsMapper[theme])}>
        <AppLink to='/'>
          <Logo className={cn(cls.LogoWrapper)} />
        </AppLink>

        <TopNavigation className={cls.TopNavigation} />

        <HStack align='center' gap='18'>
          <MagnifierSvg onClick={openSearchLine} className={cls.HeaderActionsWrapperIcon} />

          <Calendar className={cls.HeaderActionsWrapperIcon} />

          <Button onClick={openAuthDialogHandler} className={cn(cls.EnterBtn)} colorTheme='light' variant='outline_transparent'>
            ВХОД
          </Button>

          <HamburgerSvg onClick={openMenuHandler} className={cn(className, cls.Hamburger)} />
        </HStack>

        {/*Search Area*/}
        <SearchArea isOpen={isSearchLineOpen} setIsOpen={setIsSearchLineOpen} />
      </HStack>

      {isAuthDialogOpen && <AuthDialog />}
    </>
  );
};

export default Header;
