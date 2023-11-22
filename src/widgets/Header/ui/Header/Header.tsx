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
import { useCallback } from 'react';
import { AppActions, getIsAuthDialogOpen } from '@app/providers/storeProvider';
import { useDispatch, useSelector } from 'react-redux';

export enum HeaderTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface HeaderI {
  className?: string;
  theme?: HeaderTheme;
}

const Header = ({ className = '', theme = HeaderTheme.DARK }: HeaderI) => {
  const dispatch = useDispatch()
  const { setIsAuthDialogOpen } = AppActions
  const isAuthDialogOpen = useSelector(getIsAuthDialogOpen)

  const openAuthDialogHandler = useCallback(() => {
    dispatch(setIsAuthDialogOpen(true))
  }, [setIsAuthDialogOpen])

  return (
    <>
      <HStack max align='center' justify='between' className={cn(className, cls.Header, cls[theme])}>
        <AppLink theme='default' to='/'>
          <Logo className={cn(cls.LogoWrapper)} />
        </AppLink>

        <TopNavigation className={cls.TopNavigation} />

        <HStack align='center' gap='24'>
          <MagnifierSvg className={cls.HeaderActionsWrapperIcon} />
          <Calendar className={cls.HeaderActionsWrapperIcon} />

          <Button onClick={openAuthDialogHandler} className={cn(cls.EnterBtn)} colorTheme='light' variant='outline_transparent'>
            ВХОД
          </Button>
        </HStack>
      </HStack>

      {isAuthDialogOpen && <AuthDialog />}
    </>
  );
};

export default Header;
