import cn from 'classnames';
import cls from './AuthDialog.module.scss';
import { DynamicModuleLoader, ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx';
import { ReactComponent as Logo } from '@shared/assets/svg/logo/fullLogo.svg'
import { AuthDialogReducer } from './../../model/slices/AuthDialogSlice.ts';
import { Dialog } from '@shared/ui/Dialog/Dialog.tsx';
import { DialogWindow } from '@shared/ui/Dialog/DialogWindow.tsx';
import { VStack } from '@shared/ui/Stack';
import Text from '@shared/ui/Text/Text.tsx';
import { InputWithLabel } from '@shared/ui/InputWithLabel/InputWithLabel.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, getIsAuthDialogOpen } from '@app/providers/storeProvider';
import Button from '@shared/ui/Button/Button.tsx';

const reducers: ReducersList = {
  authDialog: AuthDialogReducer
};

export const AuthDialogAsync = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(getIsAuthDialogOpen)

  const closeHandler = () => {
    dispatch(AppActions.setIsAuthDialogOpen(false))
  }

  return (
    <Dialog isOpen={isOpen} closeHandler={closeHandler}>
      <DialogWindow closeHandler={closeHandler} className={cn(cls.AuthDialog)}>
        <VStack align='center' max gap='48'>
          <Logo className={cn(cls.Logo)} />

          <VStack align='center' max gap='16'>
            <Text className={cn(cls.DialogTitle)} text='Вход в аккаунт' />
            <InputWithLabel placeholder='example@yandex.ru' label={'E-mail'} />
            <InputWithLabel placeholder='test password' type={'password'} label={'Пароль'} extraLabelComponent={<ForgotPassword />} />
          </VStack>

          <Button colorTheme='blue_fill' variant='default'>Войти</Button>
        </VStack>
      </DialogWindow>
    </Dialog>
  );
};

const ForgotPassword = () => {
  return <Text className={cn(cls.ForgotPassword)} text='Забыли пароль ?' />
}

export const AuthDialog = () => {
  return (
    <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
      <AuthDialogAsync />
    </DynamicModuleLoader>
  );
};